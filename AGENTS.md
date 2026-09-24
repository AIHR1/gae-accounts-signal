# Cursor instructions — gae-accounts-signal

This repository is a markdown vault for SOP-driven account-signal research. There is no application build. Run artifacts live under `runs/{run-id}/`.

When you run inside Cursor, including Cursor Automations, this file is binding together with `sops/` and `.cursor/rules/gae-accounts-signal-execution.mdc`.

## Active procedure — V2

Research logic is the four V2 SOPs:

1. `sops/sop-change-detection-v2.md`
2. `sops/sop-evidence-enrichment-v2.md`
3. `sops/sop-account-reasoning-relevance-v2.md`
4. `sops/sop-master-digest-v2.md`

Portfolio source of truth: `account-context/GAE_Top_Accounts_Context_23september.xlsx`.

`v1-archived/` is retired. It holds the six-signal SOPs, `accounts-in-scope.md`, the V1 agents, and the V1 templates. Do not use the six signal categories as output lanes, and do not use the old account table for ownership.

The chain is Change Detection → Evidence Enrichment → Account Relevance → Include/Suppress. A quiet week is a valid result. There is no Monitor category and no minimum signal count.

`cursor-implementation-spec.md` at the repository root is a human checklist for turning on rep-level Slack routing. It is not an SOP, and Cursor does not load it. Until that checklist is done and this file says routing is on, follow the combined-delivery rules below.

## Combined delivery to Max — read this before any Slack send

Rep-level Slack routing is **not** active. The per-rep delivery section of `sops/sop-master-digest-v2.md` does not apply until it is.

Until routing is explicitly turned on:

- Research the full workbook portfolio: every account for Max, Jessica, and Filip.
- Write one internal run record and one combined digest.
- Put `Rep's Name` on each included item so ownership is visible.
- Log every search in `runs/{run-id}/search-log-{run-id}.json` and run `node scripts/check-search-log.mjs --run-id {run-id}` (see `scripts/README.md`). No Slack message unless it prints PASS.
- Send at most one combined digest to Max, Slack DM `D01DFNA0GBH`.
- Do not send separate digests to Jessica or Filip.
- Do not send an empty “nothing this week” message.
- The paste-ready weekly prompt is `.cursor/automation-weekly-digest-prompt.md`. An automation already saved in the Cursor UI does not change until that prompt is pasted there.

The 15–21 September 2026 run was a manual test of the research logic. From 28 September 2026 the weekly automation runs unattended with this combined delivery. The plan is two weekly runs, 28 September and 5 October 2026, then a review with Max before routing. The automation does not stop by itself after two weeks.

## Slack

Max is not a Cursor user. If a digest is sent, use Slack MCP `slack_send_message`. Do not use Cursor Automations’ built-in Send to Slack action.

Channel id: `D01DFNA0GBH`. It is not a secret. Do not put tokens or webhook URLs in committed files.

If Slack MCP is unavailable and only a webhook exists, `scripts/post-digest-slack-webhook.mjs` remains a fallback for that same fixed destination. See `scripts/README.md`.

## Git

`runs/` is gitignored. Do not commit run artifacts, and do not open a pull request to deliver a digest. Slack is the delivery. Do not commit other files unless the user asks.

## Environment

No npm install is required for the digest. `.cursor/environment.json` sets a no-op install. The search check needs Node 18 or later and internet access.
