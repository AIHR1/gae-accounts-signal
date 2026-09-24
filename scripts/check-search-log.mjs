#!/usr/bin/env node
/**
 * Checks the agent's search log for a run: every workbook company must have all three searches,
 * each with the results the search returned, and one randomly chosen result link per search must
 * actually open. A search with only irrelevant results passes. A missing search, a search with no
 * results listed, or a link that does not exist fails.
 *
 *   node scripts/check-search-log.mjs --run-id 2026-09-15-to-2026-09-21
 *
 * Reads  runs/{run-id}/search-log-{run-id}.json   (format: scripts/README.md)
 * Writes runs/{run-id}/search-check-{run-id}.json
 * Exit 0 = PASS, 1 = FAIL, 2 = usage or file error.
 */
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { loadPortfolio } from "./lib/workbook.mjs";

export const WORKBOOK_PATH = "account-context/GAE_Top_Accounts_Context_23september.xlsx";
export const ROUTES = ["company-business", "hr-people", "primary-source"];
export const MIN_RESULTS = 2;
const MAX_BLOCKED_SHARE = 0.5;

// Name as the agent must use it in the query: parenthetical and legal suffixes removed.
export function coreName(company) {
  let s = company.replace(/\([^)]*\)/g, " ");
  const suffix = /\s+(GmbH & Co\.? KG|GmbH|Inc\.?|AG|Company|Group|plc|Ltd\.?)\s*$/i;
  while (suffix.test(s)) s = s.replace(suffix, "");
  return normalize(s);
}

function normalize(s) {
  return s.replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();
}

// A dead link means the result was probably made up. Blocked or slow sites prove nothing either way.
export async function checkLink(url, fetchImpl = fetch) {
  try {
    const res = await fetchImpl(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      headers: { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36" },
    });
    if (res.status < 400) return { outcome: "opened", status: res.status };
    if (res.status === 404 || res.status === 410) return { outcome: "dead", status: res.status };
    return { outcome: "blocked", status: res.status };
  } catch (err) {
    const code = err.cause?.code || err.code || err.name;
    if (code === "ENOTFOUND") return { outcome: "dead", status: "domain does not exist" };
    return { outcome: "blocked", status: code || String(err.message || err) };
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i], i);
      }
    })
  );
  return out;
}

export async function checkSearchLog({ root, runId, fetchImpl = fetch, pick = (arr) => arr[Math.floor(Math.random() * arr.length)] }) {
  const logPath = path.join(root, "runs", runId, `search-log-${runId}.json`);
  const accounts = loadPortfolio(path.join(root, WORKBOOK_PATH));
  const problems = [];
  let log = null;
  if (!fs.existsSync(logPath)) problems.push(`No search log at runs/${runId}/search-log-${runId}.json`);
  else {
    try {
      log = JSON.parse(fs.readFileSync(logPath, "utf8"));
    } catch (err) {
      problems.push(`Search log is not valid JSON: ${err.message}`);
    }
  }
  const entries = Array.isArray(log?.searches) ? log.searches : [];
  if (log && !Array.isArray(log.searches)) problems.push('Search log has no "searches" list');

  const checks = [];
  const rows = [];
  for (const a of accounts) {
    for (const route of ROUTES) {
      const e = entries.find((x) => x.row === a.row && x.route === route);
      const where = `row ${a.row} ${a.company} / ${route}`;
      const results = Array.isArray(e?.results) ? e.results.filter((r) => /^https?:\/\/[^\s/]+\.[^\s]+$/.test(String(r?.url || ""))) : [];
      let status = "ok";
      if (!e) status = "not searched";
      else if (normalize(String(e.company || "")) !== normalize(a.company)) status = `company name in log is "${e.company}"`;
      else if (!normalize(String(e.query || "")).includes(coreName(a.company))) status = `query does not contain "${coreName(a.company)}"`;
      else if (results.length < MIN_RESULTS) status = `only ${results.length} result link(s) listed; need at least ${MIN_RESULTS}`;
      if (status !== "ok") problems.push(`${where}: ${status}`);
      const row = { row: a.row, company: a.company, rep: a.rep, route, status, results: results.length, link_checked: null };
      rows.push(row);
      if (status === "ok") checks.push({ row, url: pick(results).url });
    }
  }

  await mapLimit(checks, 8, async (c) => {
    const r = await checkLink(c.url, fetchImpl);
    c.row.link_checked = { url: c.url, ...r };
    if (r.outcome === "dead") problems.push(`row ${c.row.row} ${c.row.company} / ${c.row.route}: link does not exist (${r.status}): ${c.url}`);
  });

  const blocked = checks.filter((c) => c.row.link_checked.outcome === "blocked").length;
  if (checks.length && blocked / checks.length > MAX_BLOCKED_SHARE)
    problems.push(`${blocked} of ${checks.length} links could not be opened (blocked or timed out); too few to trust the log`);

  const opened = checks.filter((c) => c.row.link_checked.outcome === "opened").length;
  const report = {
    run_id: runId,
    result: problems.length ? "FAIL" : "PASS",
    checked_at: new Date().toISOString(),
    companies: accounts.length,
    searches_required: accounts.length * ROUTES.length,
    searches_logged_ok: rows.filter((r) => r.status === "ok").length,
    links: { checked: checks.length, opened, blocked, dead: checks.length - opened - blocked },
    problems,
    searches: rows,
  };
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.writeFileSync(path.join(root, "runs", runId, `search-check-${runId}.json`), JSON.stringify(report, null, 2));
  return report;
}

async function main() {
  const i = process.argv.indexOf("--run-id");
  const runId = i > 0 ? process.argv[i + 1] : null;
  if (!runId) {
    console.error("usage: node scripts/check-search-log.mjs --run-id <run-id>");
    process.exit(2);
  }
  const r = await checkSearchLog({ root: process.cwd(), runId });
  for (const p of r.problems) console.error(`- ${p}`);
  console.log(
    `SEARCH CHECK ${r.result}: ${r.searches_logged_ok}/${r.searches_required} searches logged; links opened ${r.links.opened}, blocked ${r.links.blocked}, dead ${r.links.dead}`
  );
  process.exitCode = r.result === "PASS" ? 0 : 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(`check-search-log: ${err.message || err}`);
    process.exit(2);
  });
}
