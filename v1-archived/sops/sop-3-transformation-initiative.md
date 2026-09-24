# SOP Signal 3

## 1. Purpose

This SOP defines the process for collecting external intelligence on a predefined set of accounts, with a specific focus on one defined signal type.

The goal is to consistently identify commercially relevant external signals that may indicate changes in:

- Workforce strategy
- Organizational priorities
- Capability development needs

The output is a concise digest of relevant new signals, enabling informed commercial action.

---

## 2. Scope

This SOP applies to:

- External, publicly available information only
- A single signal category per SOP instance (defined in Section 5)
- A fixed list of accounts (defined in Section 3)

This SOP excludes:

- Internal data (e.g., CRM, usage, communications)
- Interpretation, recommendations, or strategy

---

## 3. Accounts in Scope

Research must be conducted only for the following accounts: [[accounts-in-scope]]

**Table rows are atomic:** Each row is a distinct account for discovery and reporting. Do not assume that sharing a domain or parent company means one search covers multiple rows. If you intentionally batch discovery (e.g. one corporate newsroom serving several listed entities), you must **document that decision and which rows were covered** in the execution log (Section 8). Default posture: **run discovery using the row’s exact account name** at least once per row.

If no relevant new information is found for an account during the review period, that account must not appear in the digest output.

---

## 4. Output Definition

Each execution produces a digest of relevant new external signals across the accounts in scope.

The digest must:

- Include only new or meaningfully updated information from the **active review period** (Section 6)
- Include only signals that match the defined signal type (Section 5)
- Exclude accounts with no relevant updates
- Contain fact-based entries only (no interpretation or recommendations)

The digest is designed to highlight what has changed, not to summarize accounts.

---

## 5. Signal Definition

**Signal Type Name:** Company-wide transformation initiative

**What to Look For:** **First published or first materially updated during the active review period**, a **formal** company communication about an **enterprise-scale** transformation program—meaning it is described as affecting **multiple** functions, business units, geographies, or the group as a whole—not a single team’s project. The communication must have an explicit workforce / capability angle, or the workforce capability change must be highly implied at enterprise scale.

**Qualifying initiative types** (examples):

- Digital transformation **program** or **enterprise** roadmap (named or budgeted, not a slogan)
- Cultural or values-led transformation **at scale** with defined scope (e.g. company-wide behavior standards, leadership model rollout)
- Operating model or organizational redesign **affecting multiple units or regions**
- Major enterprise restructuring **disclosed as such** (e.g. multi-region, multi-function)
- Company-wide productivity, simplification, or “future of work” **programs** with explicit enterprise scope

**Required people angle:** Include transformation signals only when at least one is true:

- The source explicitly states workforce impact, e.g. role redesign, reskilling, upskilling, leadership model, change adoption, HR operating model, headcount transition, employee productivity, or capability build-out
- The initiative is enterprise-scale and the capability change is highly implied by the described operating-model shift, not merely by generic technology adoption
- A named HR, Talent, L&D, Change, People Analytics, or Workforce Strategy stakeholder is quoted, accountable, or clearly implicated by the source

**Hard exclusions:**

- Single-department tooling upgrades with no enterprise narrative (may fit [[sop-6-hr-technology]] instead)
- Generic “innovation” or “customer obsession” messaging **without** a defined program, scope, or milestone
- Analyst commentary **without** a cited company primary source in-period
- Investor decks, earnings summaries, annual-result updates, strategy refreshes, growth pillars, GenAI / automation themes, productivity programs, or customer-experience initiatives **without explicit workforce / capability implications**
- Plant, capex, manufacturing, supply-chain, industrial, or infrastructure investments unless the source explicitly states enterprise workforce capability implications
- Technology rollouts, AI implementations, automation deployments, forecasting tools, or supply-chain upgrades where the source does not connect the change to workforce capability, learning, change adoption, role redesign, or HR priorities

**Boundary with SOP 6:** If the communication is **only** about implementing a specific HR/LMS/HRIS product with no broader transformation framing, prefer Signal 6. If the same announcement ties the system to an **enterprise** transformation (e.g. global operating model + Workday), you may include **one** digest entry under the **dominant** signal per requester convention; default: **lead with transformation (this SOP)** and mention the system in the factual summary, or split only if both are independently material—log the choice.

**Why It Matters:** Enterprise transformations usually drive demand for leadership development, change capability, role redesign, skills strategy, and aligned L&D.

**What a Strong Signal Looks Like:**

- Launch of a named global digital transformation program with stated scope
- Investor-facing description of a major operating model change affecting multiple regions **and** describing workforce, skills, role, leadership, or change implications
- Official disclosure of enterprise restructuring with cross-functional impact

**What to Ignore (Noise):**

- Continuous improvement jargon without a defined initiative
- Product launch marketing that does not imply workforce or org operating model change
- Old programs re-announced without **new** scope, timeline, or milestone in-period
- Company strategy language with no direct link to workforce capability, HR priorities, or L&D demand

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** Use the **publication date** of the press release, filing, web article, or **dated investor materials**. For multi-day events (e.g. capital markets day), use the **first day materials were published** in the active window.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3) were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + transformation vocabulary** — `"{Account name}" ("digital transformation" OR "operating model" OR "organizational redesign" OR restructuring OR "culture transformation" OR "enterprise transformation")`
2. **Domain-constrained** — `site:{domain}` combined with `transformation` OR `restructuring` OR `strategic program` OR `investor` OR `annual report`
3. **Investor / regulatory** — `"{Account name}"` plus `(investor presentation OR "annual report" OR "Form 10-K" OR "annual results")` plus transformation or restructuring terms **as appropriate to the filer’s jurisdiction**

**Additional families when warranted:**

4. **CEO / CFO remarks** — Earnings call transcript keywords (site: or transcript host) for “restructuring,” “operating model,” “transformation program”—**only** if the speaker ties it to **company-wide** scope.
5. **Retry without a tight date filter** — Search broader, then **manually filter** to the active review period.
6. **Local language** — Apply [[sop-1-chro-statement]] Section **7.1a**; use transformation and investor vocabulary in the target language (e.g. French: `transformation`, `modèle opératoire`, `réorganisation`, `plan stratégique`; German: `Transformation`, `Umstrukturierung`, `Betriebsmodell`).
7. **Alternate spellings and subsidiaries** — Legal name variants, “Group,” “Holdings,” or a known division name **for that row** if the table row is division-specific (same intent as [[sop-1-chro-statement]] Section 7.1 item 7).

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–7** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep.

### 7.3 Batching exception

Same rules as [[sop-1-chro-statement]] Section 7.3.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch the primary source** (not only the search snippet).
2. Confirm **publication or filing date** falls in the active review period (Section 6).
3. Confirm the text describes **enterprise or multi-unit** scope—not a single department initiative.
4. Confirm the initiative is **substantive** (named program, quantified impact, timeline, geographic breadth, or explicit “company-wide / group-wide” language—not vague aspiration).
5. Confirm the people angle: explicit workforce impact or a highly implied enterprise-scale capability change. If the source only describes company strategy, capex, automation, AI, or technology implementation without workforce / capability implications, exclude.
6. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated HTTP fetch fails, follow **Section 8.3** and log attempts.

### 8.2 Execution log (required for agent or delegated runs)

Same requirements as [[sop-1-chro-statement]] Section 8.2.

### 8.3 Fallback retrieval when the primary URL fails

Apply the same ordered fallback sequence as [[sop-1-chro-statement]] Section 8.3. **PDFs** (annual reports, investor packs) are common for this signal—prefer direct PDF fetch when the HTML shell is brittle.

**Digest rule:** Include only when Section 8.1 is satisfied; log which channel supplied the verifiable text.

---

## 9. Execution workflow

1. **Confirm review period** with the requester if not default; record it in the log and digest header.  
2. **Iterate accounts** per Section 3 and **discovery minimums** per Section 7.  
3. **Filter to signal type** only (Section 5); discard noise.  
4. **Verify** each candidate per Section **8.1** and, if needed, **8.3** fallback retrieval.  
5. **Write digest entries** per Section 10 (format). Omit accounts with no qualifying signal.  
6. **Complete the execution log** per Section 8.2.

---

## 10. Entry format and quality standard

### 10.1 Each digest entry must include

- Account name (table row)
- Date of publication or filing reference
- Source type (e.g. press release, earnings call, annual report, investor presentation)
- Source link (mandatory if available)
- Signal description (1–3 sentences, factual): **initiative name if any, stated scope (functions/regions), and what changed**
- For master digests, use [[sop-master-digest]] Section 8 fields: **What changed**, **Why it matters**, **Relevant stakeholder**, **Commercial hypothesis**, and **Score**

If a source link is not available, include enough source detail for verification.

### 10.2 Quality standard

A high-quality digest:

- Contains only relevant, high-signal information
- Strictly adheres to the defined signal type
- Avoids repetition and generic information
- Surfaces only meaningful developments
- Enables fast scanning and immediate usability

---

## 11. Example entry format

Account: [Table row name]  
Date: [Publication date]  
Source: Investor presentation (PDF)  
Link: [URL]  
Signal: [Company] announced a group-wide operating model program affecting [regions/units stated], including [concrete element: e.g. simplified management layers, shared services], as described in [document title].

---

## 12. Final note

This SOP is designed to maximize signal clarity over volume.

The value of the output depends on:

- Precision in defining the signal
- Discipline in excluding irrelevant information
- **Consistent application of the discovery and verification standards** (Sections 7–8), not only the digest formatting
- Consistent execution each cycle

## See also

- [[sop-master-digest]] — Master orchestration SOP
- [[accounts-in-scope]] — Account list this signal covers
- [[sop-2-leadership-appointment]] — Related signal: leadership appointments
- [[sop-4-hiring-trends]] — Related signal: hiring trends
- [[run-manifest-template]] — Execution tracking template
