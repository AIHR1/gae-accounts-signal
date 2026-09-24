# Scripts

## `check-search-log.mjs` — did the searches run?

Every company in `account-context/GAE_Top_Accounts_Context_23september.xlsx` needs three searches: `company-business`, `hr-people`, and `primary-source` (the company's own news, filings, or investor pages). The agent uses Cursor's built-in web search.

For each search, the agent writes the query and the top results it got — at least 2, even if they are useless — to `runs/{run-id}/search-log-{run-id}.json`:

```json
{
  "run_id": "2026-09-15-to-2026-09-21",
  "searches": [
    {
      "row": 2,
      "company": "Michelin",
      "route": "company-business",
      "query": "Michelin acquisition OR restructuring OR strategy September 2026",
      "results": [
        { "title": "…", "url": "https://…" },
        { "title": "…", "url": "https://…" }
      ]
    }
  ]
}
```

`row` and `company` are the workbook row number and the Company name exactly as written there. The query must contain the company name, without anything in brackets or legal suffixes such as Inc., GmbH, AG, Group, or Company.

Run `node scripts/check-search-log.mjs --run-id {run-id}`. It opens one random result link per search.

- **PASS:** all searches are logged, and the links open. Useless results are fine, so a quiet week passes.
- **FAIL:** a search is missing, fewer than 2 results are listed, the query doesn't name the company, a link doesn't exist (404 or unknown domain), or more than half the links can't be opened.

The checker writes `runs/{run-id}/search-check-{run-id}.json`. It needs internet access, and no paid service.

This catches skipped searches and made-up results. It can't prove the results came from a search rather than from memory.

Self-test, no internet needed: `node scripts/test-check-search-log.mjs`.

## `post-digest-slack-webhook.mjs`

**Primary path for weekly notifications to Max:** configure **Slack MCP** on the automation and follow `AGENTS.md` (post via `slack_send_message` using **`channel_id` `D01DFNA0GBH`**; **`MAX_SLACK_CHANNEL_ID`** in **`.cursor/environment.json`** mirrors the same value). **Do not** rely on Cursor’s built-in **Send to Slack** for that destination.

Use this webhook helper only when:

- You prefer Slack **Incoming Webhooks** stored as a Cloud Agent secret (`SLACK_WEBHOOK_URL`), or
- You are testing locally and already have a webhook URL.

**Setup:** Create an Incoming Webhook in Slack for the target channel, then add `SLACK_WEBHOOK_URL` under [Cloud Agents secrets](https://cursor.com/dashboard/cloud-agents) (or export it locally).

**Run from repo root** (`gae-accounts-signal/`):

```bash
export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/..."
node scripts/post-digest-slack-webhook.mjs --file runs/2026-W18/slack-summary-2026-W18.md
```

Requires **Node.js 18+** (global `fetch`).