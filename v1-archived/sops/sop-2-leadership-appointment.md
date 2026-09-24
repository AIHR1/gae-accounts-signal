# SOP Signal 2

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

**Signal Type Name:** New leadership appointment in learning, talent, or HR transformation

**What to Look For:** **First public announcement or first substantive update during the active review period** of a **newly appointed** senior leader whose remit clearly includes enterprise or large-scale learning, talent, organizational effectiveness, or HR / people transformation—not routine HR operations alone.

**In-scope role examples** (non-exhaustive; titles vary by company):

- Head of Learning & Development / Global L&D
- Chief Learning Officer (CLO)
- Head of Talent / Talent Management / Talent Acquisition **when framed as enterprise or strategic** (not only local recruiting)
- Head of Organizational Development / Organization Design
- HR Transformation Lead / Director / VP (people systems, operating model, HRIS-led change)
- VP / SVP / EVP People Experience, Workforce Transformation, or equivalent **where the announcement text ties the role to learning, skills, talent strategy, or HR transformation**

**The appointment must be:**

- Stated in a **verifiable public source** (press release, official newsroom, securities filing, reputable trade press with clear attribution to the company, or the company’s verified leadership page updated in-period with effective date or “new” designation)
- **Strategic in scope** (regional or global mandate, new function, expanded remit, or creation of a new leadership lane)—not a backfill of an identical junior role

**Boundary with other SOPs:** A **CHRO/CPO appointment** is out of scope here (use [[sop-1-chro-statement]] only if the content is a **statement** from that leader, not the appointment wire itself—or track the appointment under this SOP if the requester wants leadership moves consolidated here; default: **CHRO/CPO appointment = this SOP**; **their subsequent quotes = SOP 1**). If unclear, log the classification choice.

**Profiles, interviews, and conference recaps (no new appointment):** If the source is **not** a dated appointment announcement but features **VP+ / CHRO-tier** attributed commentary on workforce, skills, or talent strategy, it is **out of scope for this SOP**—**log the URL in Part L** with exclusion reason **“not an appointment”** and set **`Cross-signal: S1`** (batch template column) so the [[sop-master-digest]] orchestrator can apply Sections **7.1b** and **7.1c**.

**Why It Matters:** New senior owners of learning, talent, or HR transformation often reset priorities, budgets, vendor landscapes, and appetite for external capability support.

**What a Strong Signal Looks Like:**

- Company announces a new global Head of Learning or CLO with a stated mandate (e.g. digital learning, skills, culture)
- New HR Transformation leader appointed alongside a systems or operating-model program
- Creation of a new senior talent or OD role with enterprise scope

**What to Ignore (Noise):**

- Junior or mid-level hires (individual contributors, local site HRBPs, single-country recruiters) unless the announcement explicitly defines a **new enterprise program** they lead
- Internal mobility with **no** change in scope or level described in public text
- Rumors, unverified LinkedIn profile-only changes **without** a company or press corroboration in-period (log as “unverified—excluded”)
- Pure vendor or conference bios that are not tied to a **dated company announcement**

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** Use the **publication date of the announcement** (or the **effective date** if that is the only dated field in the official release and it falls in-window). Do not use the date of a conference speech as the appointment date unless the speech **is** the first public disclosure.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3) were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + appointment language** — Include the **exact account name**. Example pattern: `"{Account name}" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "organizational development") (appointed OR joins OR hire OR named OR "new role")`
2. **Domain-constrained** — `site:{domain}` combined with appointment and role terms; add `press` OR `news` OR `leadership` if noise is high.
3. **Newsroom / investor** — `site:{domain}` (leadership OR appointment OR management OR `about/news`)` plus L&D / talent / transformation keywords.

**Additional families when warranted (not optional if 1–3 return nothing useful):**

4. **Executive-move outlets** — Reputable HR or business press that republish corporate moves (still require company confirmation or clear primary attribution).
5. **Retry without a tight date filter** — Search broader, then **manually filter** to the active review period.
6. **Local language** — Apply [[sop-1-chro-statement]] Section **7.1a**; use appointment vocabulary in the target language (e.g. French: `nomination`, `nommé`, `rejoint`, `prend la fonction`; German: `ernannt`, `übernimmt`, `Leitung`).
7. **Legal name variants** — “Group,” “Holdings,” division name **for that row** if the table is division-specific.

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–7** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep. Directory pages or static org charts **without** a dated appointment in-period do not qualify as signals.

### 7.3 Batching exception

Same rules as [[sop-1-chro-statement]] Section 7.3: batching discouraged; document every row covered and rationale.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch the primary source** (not only the search snippet).
2. Confirm the **announcement or page update date** falls in the active review period (Section 6), or that the text explicitly states an effective date in-window.
3. Confirm the **role title and scope** match Section 5 (strategic learning, talent, OD, or HR transformation—not generic local HR unless clearly enterprise).
4. Confirm the item is an **appointment / new role / material scope change**, not a recycled profile or old news resurfacing.
5. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated HTTP fetch returns empty, paywalled, or script-heavy pages, **use another method** and note **every** attempt in the log. See **Section 8.3** for the standard fallback sequence.

### 8.2 Execution log (required for agent or delegated runs)

Whenever this SOP is executed by an agent, contractor, or anyone other than the requester doing ad-hoc spot checks, maintain an **execution log** for that run, including:

- Active review period and run date
- **Every discovery query** (full string) and tool/channel used
- **Every source URL** retrieved or opened for verification, with outcome (success, partial, timeout, paywall)
- **Inclusion/exclusion notes** for near-misses (wrong date, wrong level, rumor only, etc.)

The digest and the log may be separate files. The digest remains executive-facing; the log is for auditability and improving the next run.

### 8.3 Fallback retrieval when the primary URL fails

Apply the same ordered fallback sequence as [[sop-1-chro-statement]] Section 8.3 (alternate client, official mirror, wire copy, PDF, readability proxy, archive, human/browser). Log each channel and outcome.

**Digest rule:** Signals may be included only when Section 8.1 is satisfied using text obtained through any of the channels above; the log must show **which channel** produced the verifiable appointment detail and date.

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
- Date of publication (or effective date per Section 6)
- Source type (e.g. press release, leadership page update, news article)
- Source link (mandatory if available)
- Signal description (1–3 sentences, factual, no interpretation): **new leader name, exact title, scope/geography if stated, and source of the announcement**
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
Date: [Publication or effective date]  
Source: Press release (corporate newsroom)  
Link: [URL]  
Signal: [Company] announced that [Full Name] has been appointed [Exact Title], with responsibility for [stated scope: e.g. global learning and skills], effective [date if stated].

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
- [[sop-1-chro-statement]] — Related signal: CHRO public statements
- [[sop-3-transformation-initiative]] — Related signal: transformation initiatives
- [[run-manifest-template]] — Execution tracking template
