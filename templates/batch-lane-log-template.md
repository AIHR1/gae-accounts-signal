# Batch lane log — copy per signal batch

**Run id:** `YYYY-MM` (must match `runs/{run-id}/run-manifest-{run-id}.md` and digest in the same folder)  
**Signal # (1–6):**  
**Batch id:** `S{N}-B{MM}` (e.g. `S1-B01`) — unique within run; orchestrator assigns.  
**Review period:** [START]–[END]  
**Account rows in this batch:** (exact names from [[accounts-in-scope]])

---

## Part A′ — Verified entries (this signal × this batch only)

_Filled by **`signal-sop-runner`** (writes this file) or pasted verbatim by the orchestrator if the runner is text-only._

## Part L — Execution log

**§7.1a (mandatory local language):** For each row where `sops/sop-1-chro-statement` §7.1a applies, log **ISO 639-1 code** and **full query string** for every non-English attempt (dedicated rows or table columns).

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| | | | | | | | |

**Cross-signal hint:** When this lane **excluded** the URL but it may fit **another** signal (1–6), set e.g. `S3`, `S1`, or `S4, S6?`. Leave blank if no alternate. Sub-agent spec: `.cursor/agents/signal-sop-runner.md` job item 9; orchestrator: `sops/sop-master-digest.md` Section 7.1c.

**Commercial gate score / reason:** For included candidates, record the 1–5 scoring breakdown from `sops/sop-master-digest.md` Section 4.1. For excluded candidates, state the gate failure (e.g. `excluded: strategy noise, no workforce implication`, `excluded: 14/25`, `excluded: generic IT hiring`, `excluded: boilerplate risk disclosure`).

## Batch summary

- Rows assigned:  
- Rows with ≥1 Part A′ entry:  
- Flags (count by type):  

---

_File location (required for new runs):_ **`runs/{run-id}/master-digest-log-{run-id}-sN-bMM.md`** (same folder as `master-digest-{run-id}.md` and `run-manifest-{run-id}.md`). See [[runs/README]].

## See also

- [[run-manifest-template]] — Parent manifest this batch log feeds into
- [[sop-master-digest]] — Master SOP orchestrating batch execution
