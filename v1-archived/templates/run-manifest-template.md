# Run manifest — master digest (copy per run)

**Review period:** [START]–[END] (publication / disclosure date rule per child SOP §6)  
**Run id:** `YYYY-MM` or `YYYY-MM-DD`  
**User-approved waivers (quote or link to message):** _none / see below_

## Instructions

- **Location:** this file lives in **`runs/{run-id}/run-manifest-{run-id}.md`** (not the vault root).  
- **Fill this file last** in the orchestrator workflow: after all batch lane logs for the run exist and Part A / Part B are merged. See [[sop-master-digest]] Section 7.3.
- **Attempted** = child SOP §7 minimum discovery executed for that row + signal **and** a **batch lane log** (`master-digest-log-{run}-s{N}-b{MM}.md` or path under `runs/`) contains that row with the required families and query strings for that signal. Do not mark **Attempted** from memory or from unsubmerged subagent chat alone.
- **Waiver** = only if the **user** explicitly approved skipping this cell in chat; note code (e.g. `USER-SCOPE-HIRING-ONLY`).
- Leave **n/a** only for impossible pairs (should be rare—document why).
- Use **—** or leave empty only while the run is **in progress**; before claiming **complete**, every cell must be **Attempted** or **Waiver** (verifier).

## Batch coverage (which logs prove which cells)

Map each **batch id** to the account rows it covers **for that signal**. Update as batch files land.

| Batch id | Signal # | Batch log file (path) | Account rows in batch |
| -------- | -------- | --------------------- | --------------------- |
| e.g. S1-B01 | 1 | `master-digest-log-2026-03-s1-b01.md` (in this run folder) | ACI Worldwide, Admiral Group Plc, … |
| | | | |

## Row × signal matrix

| Account (exact table row) | [chro-statement] | [leadership-appointment] | [transformation-initiative] | [hiring-trends] | [skills-gaps] | [hr-technology] |
| ------------------------- | ---------------- | -------------------------- | --------------------------- | --------------- | ------------- | --------------- |
| _paste rows from v1-archived/accounts-in-scope.md_ | | | | | | |

## Trade media sweep (`sop-master-digest` §7.2) — audit table

**Orchestrator-only** (not delegated to signal-only subagents). For **each** outlet visit, list **every** article or listing URL that **might** name an in-scope account. For each candidate row below, state verification per child SOP §8 (especially primary/filing requirement for `[skills-gaps]` and `[hr-technology]`).

| Outlet visited | Entry path or search query used | Review window filter | Candidate article URL | In-scope account row (if any) | Outcome (included in Part A / excluded / paywall) | Routed tag (if applicable) | Notes |
| -------------- | ------------------------------- | -------------------- | --------------------- | ----------------------------- | ------------------------------------------------- | -------------------------- | ----- |
| e.g. HR Dive | `site:hrdive.com` March 2026 + keyword | Mar 2026 | `https://…` | — | excluded — trend only | — | |
| | | | | | | | |

**Sweep complete?** yes / **RF-WAIVER** (user-approved): ___

## Subagent / batch invocations

| Signal # | Batch id | Rows (names or range) | Batch log file | Returned OK for §7 minimums? | Notes |
| -------- | -------- | ---------------------- | -------------- | ---------------------------- | ----- |
| | | | | | |

---

When the matrix is full and drafts are merged, run **`/digest-verifier`** (or equivalent) before closing the run.

## See also

- [[sop-master-digest]] — Master SOP that fills this template
- [[accounts-in-scope]] — Account rows tracked in this manifest
- [[batch-lane-log-template]] — Per-batch log template used alongside this
