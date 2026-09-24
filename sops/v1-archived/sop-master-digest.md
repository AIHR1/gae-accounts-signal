# Master SOP — Weekly external digest (all signals)

## 1. Purpose

This SOP defines how to produce **one combined weekly digest** across **all six signal types** for the accounts in [[accounts-in-scope]], using the signal-specific procedures in:

- [[sop-1-chro-statement]]
- [[sop-2-leadership-appointment]]
- [[sop-3-transformation-initiative]]
- [[sop-4-hiring-trends]]
- [[sop-5-skills-gaps]]
- [[sop-6-hr-technology]]

The goal is a **single reader-facing file** that (a) lists every qualifying signal with a **clear signal tag**, and (b) includes a **mandatory red-flag / execution health section** so the next run can fix gaps (visibility, tooling, paywalls, batching mistakes, etc.).

Individual signal SOPs remain the source of truth for definitions, discovery minimums, and verification. This master SOP adds **orchestration, tagging, and collective quality reporting** only.

---

## 2. Scope

This SOP applies to:

- External, publicly available information only
- All **six** signal categories in **one** execution cycle
- The same fixed account list as the child SOPs: [[accounts-in-scope]]

This SOP excludes:

- Internal data (e.g. CRM, usage, communications)
- Unsupported commercial recommendations or deal strategy. The digest **must** include a concise, evidence-linked commercial relevance hypothesis for each included signal (Section 4.1), but must not invent buyer intent, budget, or outreach advice beyond the public evidence.

---

## 3. Accounts in Scope

Research must be conducted only for the following accounts: [[accounts-in-scope]]

**Table rows are atomic** (same rule as child SOPs). Each row is tracked **per signal** for discovery compliance and **once** for cross-signal “silence” red flags (Section 9).

---

## 4. Output definition — one digest, two parts

Each master execution produces **one** markdown digest file under the **run folder** `runs/{run-id}/` (name: `master-digest-YYYY-MM-DD.md` or `master-digest-YYYY-MM.md` per requester convention; `{run-id}` matches that stem, e.g. `runs/2026-03/master-digest-2026-03.md`). The digest has **two parts** in this order:

### Part A — Evidence-linked signal entries

- One subsection **per signal tag** (six subsections), **or** a single list sorted by account then tag — requester preference; default is **six tagged subsections** for fast scanning.
- **Every entry** must start with its **signal tag** exactly as defined in Section 5 (square brackets in the template).
- Include **only** facts that passed the **child SOP’s** Section 5 definition, verification (typically child Section 8.1 / 8.3), and the **commercial signal gate** in Section 4.1.
- **Do not** repeat the same underlying fact under two tags unless the requester explicitly wants duplicates **or** Sections **7.1b–7.1c** apply (orchestrator **uplift** after the URL first surfaced in another lane, with **RF-CROSS-SIGNAL-SOP1** or **RF-CROSS-SIGNAL-ROUTE** in Part B). Default for other cases: **one entry under the primary tag** and a **RF-DEDUPE** or **RF-CLASSIFICATION** note in Part B if another signal almost applied.
- Each entry must explain **what changed**, **why it matters** for the business and workforce, the **relevant stakeholder**, and the **commercial hypothesis** for AIHR. If those cannot be stated clearly from the source evidence and the account context, exclude the candidate.

### Part B — Red flags & execution awareness (mandatory)

Part B is **not optional**. It records what went wrong, what was blocked, and what should improve **before the next cycle**. It does **not** need to be client-facing if the requester splits files later; default is **same file, clearly headed**.

See Section 9 for required content and flag codes.

### 4.1 Commercial signal gate (mandatory before Part A)

Before any candidate from any child SOP enters Part A, apply this gate. The purpose is to reduce false positives from general company news, investor strategy language, generic hiring, and boilerplate risk disclosures.

**Include only if the signal clearly supports at least one of:**

- An expansion conversation with an existing or target account
- New stakeholder engagement in HR, Talent, L&D, People Analytics, HRIS, Change, Workforce Strategy, or Leadership Development
- A capability / L&D discussion tied to a stated or strongly evidenced workforce need
- An advisory or strategic dialogue about workforce transformation, skills, leadership, AI impact on the workforce, or HR operating model change

**Commercial relevance test:** Each included signal must answer all three questions in the entry:

- **Why does this matter for AIHR?**
- **What capability gap or need is implied?**
- **Who is the relevant stakeholder?**

If any answer is weak, generic, or cannot be derived from the public evidence, exclude the candidate from Part A and log the exclusion reason in Part L.

**Scoring filter:** Score every candidate 1–5 on each dimension before inclusion:

| Dimension | What high score means |
| --------- | --------------------- |
| Relevance to AIHR offering | Direct link to HR capability building, L&D, skills, leadership, HR transformation, HR tech adoption, or people analytics |
| Actionability | Creates a plausible reason for a commercial conversation now |
| Stakeholder clarity | A reachable function or senior stakeholder is identifiable |
| Specificity | Source names a concrete program, role cluster, gap, technology, population, business impact, or workforce change |
| Timing signal | Publication, listing, go-live, appointment, or disclosure is recent and tied to the active review period |

**Threshold:** Include only candidates scoring **18/25 or higher**, and exclude any candidate with **Relevance to AIHR offering** or **Specificity** below **3**, even if the total score reaches 18. Record the score in Part A and the detailed scoring in Part L for borderline items.

**Always exclude:**

- Investor decks, earnings summaries, annual-result updates, or strategy presentations **without explicit workforce, capability, HR, learning, talent, leadership, or change implications**
- Generic strategy updates, growth pillars, GenAI / automation themes, or productivity language with no people angle
- Plant, capex, manufacturing, industrial, or infrastructure investments unless the source explicitly states workforce capability implications at enterprise scale
- Internships, graduate programs, early-career campaigns, campus recruitment, and employer-branding events
- Single generic job postings or generic tech / IT / data hiring with no HR, talent, L&D, people analytics, HRIS, change, leadership, or workforce-strategy cluster
- Employer branding content, awards, “people are important” messaging, or recruitment marketing with no strategic workforce implication
- Boilerplate SEC / annual-report risk disclosures or generic talent-shortage language unless the source is specific, recent, and tied to business impact

**Generic calibration guidance:**

- Remove as noise: career events, internship programs, graduate programs, generic IT / data hiring, boilerplate workforce risk factors, and industrial / capex investments without workforce capability detail.
- Treat as borderline: strategy updates, AI / automation rollouts, and operational technology changes. Include only when the source explicitly states workforce impact or the enterprise-scale capability change is strong enough to pass the score threshold.
- Keep as high-quality: clear upskilling / reskilling narratives, HR-specific hiring clusters, business-linked skills-gap disclosures, HR technology go-lives, and senior people-leader statements with explicit capability implications.

---

## 5. Signal tags (use filename words as abbreviations)

Tags are drawn from the **two-word** file slugs (the part after `sop-N-` in each note name). Use these **exact strings** in square brackets at the start of every signal line or block:

| Signal | Child SOP note | **Digest tag** (use verbatim) |
|--------|----------------|---------------------------------|
| 1 | [[sop-1-chro-statement]] | `[chro-statement]` |
| 2 | [[sop-2-leadership-appointment]] | `[leadership-appointment]` |
| 3 | [[sop-3-transformation-initiative]] | `[transformation-initiative]` |
| 4 | [[sop-4-hiring-trends]] | `[hiring-trends]` |
| 5 | [[sop-5-skills-gaps]] | `[skills-gaps]` |
| 6 | [[sop-6-hr-technology]] | `[hr-technology]` |

**Scanning shorthand (optional, secondary):** After the tag, you may repeat a short code in parentheses if helpful: `(CHRO)`, `(LEAD)`, `(TRANS)`, `(HIRE)`, `(SKILL)`, `(HRTECH)` — **only** as a duplicate hint; the **canonical** label in tooling and search remains the bracketed slug above.

---

## 6. Review period

Use **one** active review period for the whole master run (same default as child SOPs: seven calendar days ending on the run date, unless the requester specifies otherwise).

State it **once** at the top of the digest and in the **master execution log** (Section 10).

---

## 7. Execution process (orchestration)

1. **Fix the review period** and run date; record in the digest header and master log.  
2. For **each** of the six child SOPs, run discovery and verification **as defined in that SOP** for **every** account row in [[accounts-in-scope]], unless the requester explicitly scopes down (log any scope cut).  
3. **Once per active review period**, complete the **HR / HR-tech trade media sweep** (Section 7.2) **as orchestrator** and record the **audit table** in **`runs/{run-id}/run-manifest-{run-id}.md`** (candidate URLs, outcomes, routed tags). For each candidate hit, route to the correct child SOP for **full** Section 8 verification before Part A inclusion. If the sweep is skipped, log **RF-WAIVER** in Part B **only** with **user** approval.  
4. **Aggregate** qualifying hits into Part A with the correct **signal tag** (Section 5).  
5. **Build Part B** continuously during the run: every paywall, fetch failure, skipped named pass, ambiguous entity, or “silent” account row **after compliant discovery** must be captured with a **flag code** (Section 9).  
6. Follow **Section 7.3** (orchestrator merge order): batch lane logs → merged digest → master log index → **fill run manifest last** → verifier.  
7. **Complete the master execution log index** (Section 10) and ensure **every batch** has an on-disk lane log file.

**Efficiency:** You may batch work by **signal** (run all accounts on `[chro-statement]`, then all on `[leadership-appointment]`, etc.) or by **account** (all six signals for one row). Either is valid if batching rules from each child SOP are respected and **documented**.

### 7.1 Operator compliance (capacity vs standard)

Step 2 describes **complete** coverage: **every** table row × **six** signals × each child’s **mandatory** discovery minimums (typically Section 7). That is the **standard**, independent of whether a human or an AI agent executes the run in one sitting or across multiple sessions.

If the operator **stops before** that matrix is done, the run is **not** fully SOP-compliant. They **must** record **RF-WAIVER** (and describe what was skipped). They **must not** treat “no Part A entries” as evidence of **RF-SILENCE-ROW** for rows or signals that were **never** attempted. In other words: **“not feasible in one pass”** refers only to **time, tooling, or session limits** — it is **not** a built-in exception to the SOP. Splitting work across runs, adding automation, or narrowing scope **with requester approval** are the legitimate ways to handle capacity.

### 7.1b Cross-signal uplift for `[chro-statement]`

**Purpose:** A URL can be **in-scope for Signal 1** (attributed strategic statement from CHRO/CPO/VP+ people leader per [[sop-1-chro-statement]] Section 5) while **out-of-scope** for the lane that found it first—e.g. [[sop-2-leadership-appointment]] because the piece is **not** a **new appointment**. Those items must **not** disappear silently.

**When:** Same passes as Section **7.1c** (after batch Part A′ merge and after §7.2).

**Orchestrator actions:** Execute Section **7.1c** for every Part L row with **`Cross-signal: S1`** from **`[leadership-appointment]`** batches and for §7.2 manifest rows that match this profile (not an appointment; VP+ / CHRO-tier strategic people commentary). Verify with [[sop-1-chro-statement]] **Section 8.1**; on success append **`[chro-statement]`** to Part A and log **RF-CROSS-SIGNAL-SOP1** (use this code **instead of** **RF-CROSS-SIGNAL-ROUTE** for these cases). **Dedupe** per Section 7.1c—do not duplicate an existing S1 batch line.

**Sub-agent logging:** Signal 2 runners **must** mark **`Cross-signal: S1`** on Part L for these URLs (see `.cursor/agents/max-signal-sop-runner.md`).

### 7.1c Cross-signal harvest (all batch lanes → other SOPs)

**Purpose:** Reuse URLs **already fetched** in one signal batch when they **fail that lane’s §5** but **match another** child SOP. Sub-agents must not bury those URLs in a generic “no signal” summary line with no URL list.

**Sub-agent requirement (normative copy in `.cursor/agents/max-signal-sop-runner.md`):** List **every** candidate URL **opened or fetched** for verification in Part L. When excluded from the batch’s signal, if another signal **S1–S6** **clearly** applies, record **`Cross-signal: S#`** (or multiple, comma-separated) in the batch template **Cross-signal hint** column or equivalent. Suffix **`?`** when plausible but uncertain. **Mandatory** for clear alternate fits; **strongly encouraged** for near-misses.

**Orchestrator requirement:** Immediately after the initial Part A′ merge (Section 7.3 step 6), and again after the §7.2 sweep when new Part L / manifest rows appear:

1. Scan **all** `master-digest-log-*-s*-b*.md` Part L tables for **non-empty Cross-signal hint** or outcome text containing **`Cross-signal:`**.  
2. For each **URL + hinted S#** pair not already represented in Part A under that signal’s tag (same underlying fact): run the **hinted** child SOP **Section 8.1** on the primary source.  
3. If verified, **append** Part A with the correct digest tag (Section 5).  
4. **Part B:** Log **RF-CROSS-SIGNAL-ROUTE** with batch id, URL, account row, **source lane** (e.g. `S4-B02`) → **target tag**. If the inclusion is **`[chro-statement]`** from a non–Signal-1 lane per Section **7.1b** (VP+ strategic statement, not appointment), use **RF-CROSS-SIGNAL-SOP1** instead of **RF-CROSS-SIGNAL-ROUTE**.  
5. **Dedupe:** If two batches hint the same URL for the same target signal, one Part A entry suffices; consolidate Part B flags.

### 7.2 HR and HR-technology trade media sweep (master runs)

**Purpose:** English-first web search and `site:{domain}` passes miss a lot of **trade-press** and **HR-tech** coverage. This sweep adds a **compressed, date-scoped** channel: scan specialist outlets for the review period, then verify any hit on a **company-primary** source per the relevant child SOP.

**When:** **Once per master execution** (per active review period), **in addition to** (not instead of) each child’s per-row minimums in Section 7.

**How:**

1. Maintain a **short, rotating list** of sources for the run (document the exact list in the master log). Open each site’s **news**, **HR**, **workplace**, or **HR technology** section, or run `site:{outlet-domain}` queries with the review month/year and (where the index allows) account keywords.  
2. For any article or wire clearly naming an **accounts-in-scope** row (or an unmistakable subsidiary tied to that row), open the URL and decide which **signal tag** might apply.  
3. **Do not** paste trade-press claims into Part A without child SOP **Section 8.1** verification on a **primary** or filing-grade source when the SOP requires it (especially [skills-gaps] and [hr-technology]).  
4. For **[hr-technology]**, vendor or analyst pieces **alone** are insufficient if the child SOP requires **customer-corroborated** implementation language.

**Example outlets (non-exhaustive — rotate and refresh):** People Matters; HR Dive; UNLEASH; HR Grapevine; People Management (CIPD); TLNT; Human Resource Executive; HCM Technology Report; Reworked (Workplace); HR Executive; EBN / Employee Benefit News; *optionally* neutral summaries from industry analysts **only** as pointers to issuer or corporate sources.

**Log (manifest + master log):** Every outlet visited, query or browse path, **each candidate article URL**, named in-scope **account row** (if any), verification outcome (**included in Part A** / **excluded** + one-line reason / **paywall**), and **routed signal tag** if applicable. Use the expanded table in `templates/run-manifest-template.md` (Section “Trade media sweep”).

### 7.3 Orchestrator merge order (mandatory)

**Cursor:** For a full run, you may invoke the agent **`max-digest-orchestrator`** (`.cursor/agents/max-digest-orchestrator.md`) so merge, **§7.1c**, **§7.2**, manifest-last, and verifier handoff stay in one role.

Execute in this order so the **run manifest** stays auditable and the **verifier** can PASS:

1. **Create the run folder** `runs/{run-id}/` (e.g. `runs/2026-03/`). All artifacts for this execution live **only** here (digest, manifest, master log index, batch lane logs).  
2. **Copy** `templates/run-manifest-template.md` to **`runs/{run-id}/run-manifest-{run-id}.md`**. Fill header (review period, run id, waivers).  
3. **Plan batches:** For each signal 1–6, split [[accounts-in-scope]] into row batches (recommended **8–15 rows** per batch). Assign **`S{N}-B{MM}`** ids (e.g. `S1-B01`, `S1-B02`, …). Record the plan in the manifest **Batch coverage** table as files are created.  
4. **Run subagents** (`.cursor/agents/max-signal-sop-runner.md`): one invocation per **batch** (not one invocation per entire signal unless the row count is tiny). Run batches in parallel when safe (**no overlapping rows** in concurrent invocations for the same signal).  
5. **Batch lane logs (on disk before merge):** Each **`max-signal-sop-runner`** invocation **writes** **`runs/{run-id}/master-digest-log-{run-id}-s{N}-b{MM}.md`** (orchestrator passes the full path in the task). Content must be **verbatim** execution detail: Part A′ + Part L with **row-specific** queries and URLs—**not** repeated template filler (see `.cursor/agents/max-digest-orchestrator.md` **Anti-placeholder gate**). If the runner cannot write files, the orchestrator **pastes** the runner’s full markdown into that path **before** the next batch or merge. If the subagent emits **CHECKPOINT**, do not mark those rows **Attempted** until a completing batch is written.  
6. **Merge Part A′** from all batch files into **`runs/{run-id}/master-digest-{run-id}.md`** **only after** every planned lane log passes the anti-placeholder check (dedupe per Section 4; note **RF-DEDUPE** / **RF-CLASSIFICATION** in Part B as needed). **Immediately after**, run Section **7.1c** (which covers **7.1b** `[chro-statement]` uplifts and all other **`Cross-signal:`** hints) and **append** any verified entries not already in Part A.  
7. **Merge Part B** from flags observed across batches (sweep flags added in the next step); include **RF-CROSS-SIGNAL-SOP1** / **RF-CROSS-SIGNAL-ROUTE** from step 6 / 7.1c.  
8. **Run §7.2 sweep** (orchestrator): visit rotating trade outlets; fill **`runs/{run-id}/run-manifest-{run-id}.md`** audit table with **every** candidate article URL, account row, outcome, and routed tag; update Part B for paywall / RF-CLASSIFICATION from sweep. **Re-run Section 7.1c** for sweep rows that imply a **`Cross-signal:`** or 7.1b-style S1 uplift.  
9. **Write master log index** **`runs/{run-id}/master-digest-log-{run-id}.md`**: review period, work order, **relative paths to every batch file** in the same folder, §7.2 sweep summary (or pointer to manifest audit table), and Part B flag index.  
10. **Fill run manifest matrix last:** For each cell, **Attempted** only if a batch log proves §7 minimums for that row + signal; **Waiver** only with user-approved code. Update **Subagent / batch invocations** and **Batch coverage** rows.  
11. Invoke **`max-digest-verifier`** against the **`runs/{run-id}/`** manifest + digest + master index **and** all batch lane logs in that folder before claiming **complete**.

### 7.4 Notify Max (Slack MCP)

When the run is delivered to Max via **Slack MCP** (Cursor Cloud, Automations, or equivalent), post the digest summary with **`slack_send_message`** using this **`channel_id`** (Max’s digest destination — **not** a secret; same value may be mirrored as **`MAX_SLACK_CHANNEL_ID`** in **`.cursor/environment.json`** for automation env loading):

**`D01DFNA0GBH`**

Message content, length limits, multi-message splits, and webhook fallback are specified in **`AGENTS.md`**.

---

## 8. Part A — Entry format

Use the child SOP field requirements **plus** the tag on the first line.

**Template (repeat per finding):**

```text
[chro-statement] (CHRO)
Account: [table row name]
Date: [publication or signal date]
Source: [type]
Link: [URL if available]
What changed: [1 factual sentence on the new statement, appointment, program, cluster, disclosure, or rollout]
Why it matters: [1 sentence linking the business context to the workforce / capability implication]
Relevant stakeholder: [function or role, e.g. CHRO, VP Talent, Head of L&D, HRIS leader, People Analytics, Change / Transformation leader]
Commercial hypothesis: [evidence-linked expansion angle for AIHR; no invented budget or buyer intent]
Score: [n]/25 ([Relevance], [Actionability], [Stakeholder clarity], [Specificity], [Timing])
Signal: [optional 1–2 factual source details if needed for context]
```

Swap `[chro-statement]` and `(CHRO)` for the relevant tag / shorthand from Section 5.

---

## 9. Part B — Red flags & execution awareness

### 9.1 Purpose

Part B answers: **What broke, what we could not see, and what we should fix next time?**  
It is **not** a list of “no news” for its own sake; it highlights **process risk** and **access limits**.

### 9.2 Flag codes (use consistently)

Use these codes as **bold labels** in Part B for sorting and trend tracking.

| Code | When to use |
|------|-------------|
| **RF-SILENCE-ROW** | After **all six** signals, **no** Part A entries for this account row **and** mandatory discovery minimums were **attempted** for each signal (or log explicit waiver). *Meaning:* possible visibility gap, weak index presence, naming mismatch, or overly narrow window — **review query shapes and domains next run.* |
| **RF-SILENCE-SIGNAL** | For a given row + signal tag, **no** qualifying hit **after** that signal’s required discovery families (child Section 7). *Use selectively:* optional for every cell in a 40×6 grid unless the requester wants full matrix logging; **minimum** is to use this when silence was **surprising** (e.g. known loud employer, zero careers reachability) or when improving a weak signal type. **Always** use for rows where **any** signal repeatedly fails (same failure mode twice in a row). |
| **RF-PAYWALL** | Material source identified but **not verifiable** after child SOP 8.3 fallbacks; content sits behind a **hard** paywall or subscriber-only vault with **no** official mirror, PDF, wire, or archive. Include URL domain and what was tried. |
| **RF-FETCH** | Systematic fetch failure: timeout, empty body, HTTP errors, bot mitigation, TLS/HTTP2 issues — even if **partial** recovery later. Log URL and **which** fallback step worked or none did. |
| **RF-BLOCKED-ATS** | Careers or ATS pages require heavy scripting, login, or geo-block; could not confirm hiring trend or count **without** human/browser; note vendor (e.g. Workday, Greenhouse) if known. |
| **RF-IDENTITY** | Could not resolve named executive, division vs group entity, or correct careers property; **skipped** child mandatory pass (e.g. named CHRO query) — cite child SOP rule. |
| **RF-BATCH-RISK** | Batching was used across rows; **document** per child SOP 7.3. If batching might have **hidden** division-specific news, flag it here for review. |
| **RF-CLASSIFICATION** | Unclear which tag applies; **decision** taken — state chosen tag and one-line reason (prevents silent miscoding next time). |
| **RF-DEDUPE** | Same underlying event could fit two tags; **one** entry kept in Part A — note the alternate tag here. |
| **RF-CROSS-SIGNAL-SOP1** | Orchestrator **added** (or confirmed) a `[chro-statement]` entry after the URL first surfaced under another signal or sweep route—typically **not** a new **appointment** but **VP+ / CHRO-tier attributed** workforce-skills-talent commentary per [[sop-1-chro-statement]] Section 5. Cite first lane (e.g. `S2-B…`) and URL. |
| **RF-CROSS-SIGNAL-ROUTE** | Orchestrator **added** a Part A entry under **any** tag after a sub-agent **`Cross-signal: S#`** hint (Section **7.1c**), excluding cases that must use **RF-CROSS-SIGNAL-SOP1**. Cite source batch, URL, and target tag. |
| **RF-WAIVER** | Requester or operator **skipped** a mandatory step (e.g. time box); **not** compliant with full SOP — must be explicit. |

### 9.3 Required Part B content every run

At minimum, Part B must include:

1. **Summary counts** — e.g. rows in scope, rows with ≥1 signal, count of **RF-SILENCE-ROW** (if any), count of **RF-PAYWALL** / **RF-FETCH** / **RF-BLOCKED-ATS**.  
2. **Row-level silence** — list every account row with **RF-SILENCE-ROW** (none of six signals fired after compliant passes).  
3. **Access / tooling failures** — every **RF-PAYWALL**, **RF-FETCH**, and **RF-BLOCKED-ATS** with enough detail to reproduce.  
4. **Improvement notes** — 3–10 bullet **action items** (“next run: try X for domain Y”, “add language Z for row A”, “escalate paywall source B to human read”).

### 9.4 Part B template

```text
## Red flags & execution notes

### Summary
- Review period: [dates]
- Rows in scope: [n]
- Rows with ≥1 signal: [n]
- RF-SILENCE-ROW: [n] | RF-PAYWALL: [n] | RF-FETCH: [n] | RF-BLOCKED-ATS: [n] | (others as needed)

### Row-level silence (RF-SILENCE-ROW)
- [Account row]: attempted all six signals per child SOPs; zero qualifying entries. Notes: [e.g. weak web presence, only LinkedIn, possible naming issue]

### Access & verification failures
- **RF-PAYWALL** — [Account / signal tag]: [URL or domain]; tried: [mirror / PDF / archive / proxy / human]; outcome: [blocked | partial].

### Other flags
- [codes as they occurred]

### Improvements for next run
- [actionable item]
```

---

## 10. Master execution log

Maintain **one master index per run** inside **`runs/{run-id}/`**: `runs/{run-id}/master-digest-log-{run-id}.md` (same date stem as the digest), plus **one batch lane log file per signal batch** in that **same folder** (see Section 7.3).

The **master index** must contain:

- Review period and run date  
- Table of **all batch lane logs** with paths relative to the run folder, e.g. `master-digest-log-2026-03-s1-b01.md`  
- Per-signal summary (batch ids, row coverage)  
- §7.2 sweep summary (may duplicate manifest audit table by reference)  
- **Every Part B flag** duplicated or indexed here with timestamps/tools where relevant  

Each **batch lane log** (from `templates/batch-lane-log-template.md`) holds the **verbatim** Part A′ + Part L for that batch, including **ISO 639-1 + query** lines for §7.1a. Delegated or agent runs **must** produce these files; the index ties them together for auditability.

**Procedure SOPs** (child signals + this master note) live in **`sops/`**; **accounts** in **`accounts-in-scope.md`** at vault root; **each run** is self-contained under **`runs/{run-id}/`**.

---

## 11. Quality standard

A high-quality master digest:

- Uses **one** file with **Part A + Part B** complete  
- Tags every signal with the **exact** strings in Section 5  
- Applies the Section 4.1 commercial signal gate before inclusion; high volume is never a substitute for commercial relevance
- Makes every Part A entry answer: **what changed**, **why it matters**, **who owns it**, and **what AIHR-relevant capability conversation it opens**
- Surfaces **silence** and **access** problems in Part B, not only “happy path” hits  
- Stays evidence-linked in Part A; commercial hypotheses are concise and derived from the public source, not speculative recommendations  

---

## 12. Final note

The child SOPs optimize **precision per signal**. This master SOP optimizes **operational learning**: without Part B, repeated paywalls, silent accounts, and tooling failures stay invisible week to week.

---

## See also

- [[accounts-in-scope]] — Target account list for all research
- [[sop-1-chro-statement]] — Signal 1 definition and discovery rules
- [[sop-2-leadership-appointment]] — Signal 2 definition
- [[sop-3-transformation-initiative]] — Signal 3 definition
- [[sop-4-hiring-trends]] — Signal 4 definition
- [[sop-5-skills-gaps]] — Signal 5 definition
- [[sop-6-hr-technology]] — Signal 6 definition
- [[run-manifest-template]] — Template for documenting execution runs
- [[ai-champions-agent-system-slack-message]] — Agent system implementing this SOP
- [[ai-champions-autoresearch-post]] — Autoresearch concept behind this system
