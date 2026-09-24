---
name: digest-verifier
description: Retired V1 completeness checker for the six-signal matrix. Do not use it to judge a V2 run.
model: fast
readonly: true
is_background: false
---

This verifier is retired with the six-signal workflow. Stop. Do not apply its checklist to a V2 run. V2 quality checks are in `sops/sop-master-digest-v2.md`.

Historical V1 checklist follows.

## Inputs from the parent

- **Run folder** **`runs/{run-id}/`** containing at minimum: **`run-manifest-{run-id}.md`** (row × signal grid, **Batch coverage**, **§7.2 audit table** with candidate URLs, **Subagent / batch invocations**), **`master-digest-{run-id}.md`** (Part A and Part B), **`master-digest-log-{run-id}.md`** (index listing every batch file in the same folder)
- **All batch lane logs** in that folder: **`master-digest-log-{run-id}-s{N}-b{MM}.md`** (audit trail for **Attempted** cells and §7.1a ISO + query lines)
- The **review period** and any **user-approved** scope waivers quoted verbatim from the conversation

## Your job

1. **Matrix check:** For every row in `v1-archived/accounts-in-scope.md`, confirm **all six** signal columns are **Attempted** OR have an explicit **user-approved Waiver** code (not “skipped by agent discretion”). For each **Attempted** cell, confirm a **batch lane log** lists that row for that signal with §7-level detail. Flag any blank cell as **INCOMPLETE**.
2. **Sweep check:** Confirm **`runs/{run-id}/run-manifest-*.md`** §7.2 audit table lists outlets visited and **each candidate article URL** with outcome (included / excluded / paywall), or **user-approved RF-WAIVER** for skipping the sweep.
3. **Language check:** For French/German (and other non-English HQ) rows, confirm **batch lane logs** show **§7.1a**-style queries (ISO code + full query string) for signals where the manifest marks **Attempted**—spot-check at least two such rows per language group present in scope.
4. **Silence logic:** If Part B lists **RF-SILENCE-ROW**, confirm the log proves **all six** signals were attempted for that row (or waiver). Reject **RF-SILENCE-ROW** if any signal was never attempted.
5. **Part A quality spot-check:** Randomly sample **3** Part A entries; confirm each has a **working or documented** primary link, date in window, tag matching §5, master §4.1 fields (**What changed**, **Why it matters**, **Relevant stakeholder**, **Commercial hypothesis**, **Score**), and a passing score (**18/25+**, with **Relevance** and **Specificity** both **3+**).
6. **Cross-signal uplift:** If Part B lists **RF-CROSS-SIGNAL-SOP1** or **RF-CROSS-SIGNAL-ROUTE**, confirm Part A includes the referenced entry (or an explicit duplicate note). Spot-check that batch Part L rows with **non-empty Cross-signal hint** were either merged into Part A for the hinted tag or carry **RF-WAIVER** / explicit orchestrator note (e.g. failed §8.1).
7. **Placeholder Part L (blocking):** Scan every batch lane log. **FAIL** if Part L repeats **forbidden stub** text across multiple account rows—e.g. substrings `Multiple full-query`, `per subagent` (when used as generic filler), `Candidate URLs opened/fetched per lane`, or the same long generic phrase copied for **≥2** different accounts with no distinct query strings. **FAIL** if any lane log says evidence lives “in orchestrator session” / “subagent return” instead of logging queries and URLs **in the file**.

## Output format

1. **VERDICT:** `PASS` | `PASS WITH NOTES` | `FAIL`
2. **Blocking issues** (must fix before claiming complete)
3. **Non-blocking notes** (quality, consistency)
4. **Counts:** total rows, rows with ≥1 signal, RF-SILENCE-ROW count (if legitimate), incomplete cells count

Do not edit files. Report only.
