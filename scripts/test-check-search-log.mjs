#!/usr/bin/env node
// Self-test for check-search-log.mjs. No network: links are answered by a stub.
//   node scripts/test-check-search-log.mjs
import fs from "fs";
import path from "path";
import { loadPortfolio } from "./lib/workbook.mjs";
import { checkSearchLog, ROUTES, WORKBOOK_PATH } from "./check-search-log.mjs";

const REPO = process.cwd();
const BASE = path.join(REPO, "runs", ".selftest-search-log");
const RUN_ID = "2026-09-15-to-2026-09-21";
const accounts = loadPortfolio(path.join(REPO, WORKBOOK_PATH));

function fullLog() {
  return {
    run_id: RUN_ID,
    searches: accounts.flatMap((a) =>
      ROUTES.map((route) => ({
        row: a.row,
        company: a.company,
        route,
        query: `${a.company.replace(/\([^)]*\)/g, "").trim()} ${route} 2026`,
        results: [
          { title: "Unrelated result 1", url: `https://news.example.org/${a.row}/${route}/1` },
          { title: "Unrelated result 2", url: `https://news.example.org/${a.row}/${route}/2` },
        ],
        useful: false,
      }))
    ),
  };
}

function stubFetch(url) {
  if (url.includes("nonexistent-domain")) {
    const err = new TypeError("fetch failed");
    err.cause = { code: "ENOTFOUND" };
    return Promise.reject(err);
  }
  if (url.includes("/made-up/")) return Promise.resolve({ status: 404 });
  if (url.includes("/blocked/")) return Promise.resolve({ status: 403 });
  return Promise.resolve({ status: 200 });
}

const find = (log, company, route) => log.searches.find((s) => s.company === company && s.route === route);

const scenarios = [
  { name: "pass: all 108 searches logged, results useless (quiet week)", expect: "PASS", edit: () => {} },
  {
    name: "fail: one search skipped",
    expect: "FAIL",
    edit: (log) => (log.searches = log.searches.filter((s) => !(s.company === "Heineken" && s.route === "hr-people"))),
    reason: /Heineken \/ hr-people: not searched/,
  },
  {
    name: 'fail: "done" checkmark but no results listed',
    expect: "FAIL",
    edit: (log) => Object.assign(find(log, "Nedbank", "primary-source"), { results: [], done: true }),
    reason: /Nedbank \/ primary-source: only 0 result link/,
  },
  {
    name: "fail: made-up link (page does not exist)",
    expect: "FAIL",
    edit: (log) => (find(log, "Michelin", "company-business").results = [
      { title: "Fake", url: "https://www.michelin.com/made-up/1" },
      { title: "Fake", url: "https://www.michelin.com/made-up/2" },
    ]),
    reason: /Michelin \/ company-business: link does not exist \(404\)/,
  },
  {
    name: "fail: made-up link (domain does not exist)",
    expect: "FAIL",
    edit: (log) => (find(log, "Pluxee", "hr-people").results = [
      { title: "Fake", url: "https://pluxee.nonexistent-domain.com/a" },
      { title: "Fake", url: "https://pluxee.nonexistent-domain.com/b" },
    ]),
    reason: /Pluxee \/ hr-people: link does not exist \(domain does not exist\)/,
  },
  {
    name: "fail: query does not name the company",
    expect: "FAIL",
    edit: (log) => (find(log, "Deloitte", "company-business").query = "big four restructuring 2026"),
    reason: /Deloitte \/ company-business: query does not contain "deloitte"/,
  },
  {
    name: "pass: a few sites block the link check (403)",
    expect: "PASS",
    edit: (log) => log.searches.slice(0, 10).forEach((s) => s.results.forEach((r) => (r.url = r.url.replace("/1", "/blocked/1").replace("/2", "/blocked/2")))),
  },
  {
    name: "fail: most links cannot be opened",
    expect: "FAIL",
    edit: (log) => log.searches.slice(0, 70).forEach((s) => s.results.forEach((r) => (r.url = r.url + "/blocked/"))),
    reason: /links could not be opened .* too few to trust/,
  },
  { name: "fail: no search log written", expect: "FAIL", edit: null, reason: /No search log/ },
];

let failures = 0;
fs.rmSync(BASE, { recursive: true, force: true });
for (const s of scenarios) {
  const root = path.join(BASE, s.name.replace(/[^a-z0-9]+/gi, "-").slice(0, 50));
  fs.mkdirSync(path.join(root, path.dirname(WORKBOOK_PATH)), { recursive: true });
  fs.copyFileSync(path.join(REPO, WORKBOOK_PATH), path.join(root, WORKBOOK_PATH));
  fs.mkdirSync(path.join(root, "runs", RUN_ID), { recursive: true });
  if (s.edit) {
    const log = fullLog();
    s.edit(log);
    fs.writeFileSync(path.join(root, "runs", RUN_ID, `search-log-${RUN_ID}.json`), JSON.stringify(log, null, 2));
  }
  const r = await checkSearchLog({ root, runId: RUN_ID, fetchImpl: stubFetch, pick: (arr) => arr[0] });
  const ok = r.result === s.expect && (!s.reason || r.problems.some((p) => s.reason.test(p)));
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"}  [${r.result}] ${s.name}`);
  if (r.problems[0]) console.log(`        ${r.problems[0]}`);
}
console.log(failures ? `\n${failures} test(s) failed` : `\nAll ${scenarios.length} tests passed`);
process.exitCode = failures ? 1 : 0;
