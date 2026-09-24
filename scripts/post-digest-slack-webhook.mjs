#!/usr/bin/env node
/**
 * Optional Slack notify via Incoming Webhook (no npm deps).
 * Use when Cursor "Send to Slack" is off but SLACK_WEBHOOK_URL is set in Cloud Agent secrets.
 *
 * Usage:
 *   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/... \
 *     node scripts/post-digest-slack-webhook.mjs --file runs/2026-09-21-to-2026-09-27/master-digest-2026-09-21-to-2026-09-27.md
 *   node scripts/post-digest-slack-webhook.mjs --text "Short plain summary"
 */

import fs from "fs";
import path from "path";
import process from "process";

const MAX_CHARS = 39_000;

function parseArgs(argv) {
  let text;
  let file;
  let help;
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--text" && argv[i + 1]) {
      text = argv[++i];
    } else if (a === "--file" && argv[i + 1]) {
      file = argv[++i];
    } else if (a === "--help" || a === "-h") {
      help = true;
    }
  }
  return { text, file, help };
}

async function main() {
  const { text: textArg, file, help } = parseArgs(process.argv);
  if (help) {
    console.error(
      `Usage: SLACK_WEBHOOK_URL=... node ${path.basename(process.argv[1])} (--text "..." | --file path)`
    );
    process.exit(0);
  }

  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url || !/^https:\/\//i.test(url)) {
    console.error("post-digest-slack-webhook: set SLACK_WEBHOOK_URL to a Slack incoming webhook URL (https://...).");
    process.exit(1);
  }

  let body = textArg;
  if (!body && file) {
    const abs = path.isAbsolute(file) ? file : path.join(process.cwd(), file);
    body = fs.readFileSync(abs, "utf8");
  }
  if (!body) {
    body = fs.readFileSync(0, "utf8");
  }
  if (!body || !String(body).trim()) {
    console.error("post-digest-slack-webhook: provide --text, --file, or stdin.");
    process.exit(1);
  }

  if (body.length > MAX_CHARS) {
    body = body.slice(0, MAX_CHARS - 80) + "\n\n…(truncated for Slack webhook size limit)";
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ text: body }),
  });

  const raw = await res.text();
  if (!res.ok) {
    console.error("post-digest-slack-webhook: HTTP", res.status, raw);
    process.exit(1);
  }
  if (raw !== "ok") {
    console.warn("post-digest-slack-webhook: unexpected body:", raw);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
