# SOP Signal 5

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

**Table rows are atomic:** Each row is a distinct account for discovery and reporting. Do not assume that sharing a domain or parent company means one search covers multiple rows. If you intentionally batch discovery (e.g. one investor relations site serving several listed entities), you must **document that decision and which rows were covered** in the execution log (Section 8). Default posture: **run discovery using the row’s exact account name** at least once per row.

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

**Signal Type Name:** Public statements on skills gaps, reskilling, upskilling, or workforce challenges

**What to Look For:** **Explicit** language in **company-attributed** channels **first published or first materially surfaced during the active review period** that ties **this organization** (or a defined division you are tracking as the table row) to:

- Skills shortages or capability gaps **affecting execution**
- Reskilling, upskilling, or large-scale workforce development **needs**
- Workforce readiness, talent supply, or critical-skill availability **as a constraint or risk**
- Talent shortages framed as **business** or **operational** impact (not generic “hiring is competitive” alone)

The statement must be **specific, recent, and tied to business impact**. A filing or annual-report mention is not enough by itself.

**Qualifying source types:**

- Earnings calls, earnings presentations, and **official transcripts** or **issuer PDFs**
- Annual / sustainability / integrated reports (PDF or official HTML), **only when the workforce / skills language is specific and tied to a stated business impact or operating priority**
- Investor presentations and **regulated** business updates where the company speaks for itself, **only when the capability gap or workforce challenge is specific enough to support a commercial discussion**
- Official CEO/CFO/CHRO letters or **signed** leadership messages on the corporate site **when the text includes the gap/reskill language above**

**Boundary with [[sop-1-chro-statement]]:** SOP 1 captures **attributed HR-leader viewpoint** in interviews, podcasts, and similar **narrative** media. **This SOP** captures **formal** investor/regulatory-style disclosure and **verbatim risk factors / MD&A-style** workforce statements. If the **same quote** appears in both an interview and a filing, **one digest entry** suffices—pick the **most official** source for citation; log the duplicate in the execution log.

**Why It Matters:** Stated gaps and reskilling needs are explicit pain signals for L&D, skills strategy, and transformation priorities.

**What a Strong Signal Looks Like:**

- Annual report, results discussion, or sustainability section cites critical digital, leadership, technical, HR, or operational skills as a constraint on a named strategy, transformation, service level, revenue, productivity, safety, or customer outcome
- CEO on earnings call states reskilling is required at scale to deliver the transformation
- Investor deck quantifies a workforce capability gap or training investment step-up

**What to Ignore (Noise):**

- Macroeconomic commentary about “the labor market” **without** company-specific capability linkage
- Purely generic DEI or “great place to work” copy **without** a stated gap or reskilling need
- Journalist paraphrase **without** a quotable company line or filing section to verify
- SEC / annual-report boilerplate such as generic “failure to attract and retain qualified employees” risk language, unless the same source provides specific, recent, business-linked capability detail
- Generic risk disclosures, forward-looking-statement disclaimers, or catch-all workforce risks with no named capability, business impact, geography, population, or program response
- General apprenticeship, recruiting, employer-branding, or workforce availability language with no specific capability gap or upskilling / reskilling implication

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** Use **document publication date** (report issue date, call date, PDF posting date). For earnings, the **call date** must fall in-window **or** the **transcript posting date** if that is the first public text in-period.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3) were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + gap / reskill vocabulary** — `"{Account name}" (reskill* OR upskill* OR "skills gap" OR "capability gap" OR "workforce" AND (shortage OR constraint OR risk OR readiness))`
2. **Domain investor / reports** — `site:{domain}` `(annual report OR "integrated report" OR investors OR "results presentation")` plus skills, talent, workforce, training, capability
3. **Earnings / transcript** — `"{Account name}" (earnings OR "results call" OR transcript) (skills OR talent OR workforce OR training OR reskill)`

**Additional families when warranted:**

4. **Regulatory filing hosts** — Jurisdiction-appropriate (e.g. SEC EDGAR search by entity name) for **annual** or **quarterly** text about human capital risks—only when the account is a **filer** or the filing clearly maps to the table row.
5. **Retry without a tight date filter** — Broad search, then filter by document date.
6. **Local language** — Apply [[sop-1-chro-statement]] Section **7.1a**; use filing- and earnings-style vocabulary in the target language (e.g. French: `compétences`, `formation`, `risques`, `effectifs`, `rapport annuel`, `résultats`; German: `Fähigkeiten`, `Weiterbildung`, `Personalrisiken`, `Geschäftsbericht`).

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–6** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep.

### 7.3 Batching exception

Same rules as [[sop-1-chro-statement]] Section 7.3.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch** the PDF, transcript HTML, or official web page containing the **exact** language.
2. Confirm **document or event date** falls in the active review period (Section 6).
3. Confirm the statement is **about this company’s** workforce/skills situation—not only industry commentary.
4. Confirm the language meets Section 5 (explicit gap, reskill need, or workforce constraint)—not vague “talent is important.”
5. Confirm the language is **specific, recent, and business-linked**. Exclude boilerplate SEC / annual-report risk disclosures, generic risk factors, and generic talent-shortage language unless the source ties the gap to a concrete business impact, capability area, population, geography, or program response.
6. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated HTTP fetch returns empty bodies, **PDF direct fetch** and **Section 8.3** are especially important for this SOP.

### 8.2 Execution log (required for agent or delegated runs)

Same requirements as [[sop-1-chro-statement]] Section 8.2. For filings, log **document type** and **page or section** where the language appears when practical.

### 8.3 Fallback retrieval when the primary URL fails

Apply the same ordered fallback sequence as [[sop-1-chro-statement]] Section 8.3. **Prioritize PDF** and **issuer mirror** for annual reports and results decks.

**Digest rule:** Quote or closely paraphrase **only** what the source supports; no strategic inference beyond the text.

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
- Date (call date, report date, or publication date)
- Source type (e.g. Q3 earnings call transcript, 2025 annual report, investor presentation)
- Source link (mandatory if available; for PDFs, stable issuer URL)
- Signal description (1–3 sentences, factual): **speaker or document section, and the specific gap/reskill/workforce challenge language**
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
Date: [Earnings call date]  
Source: Earnings call transcript (official)  
Link: [URL]  
Signal: In the [Q#] [year] results discussion, [Name, title] stated that [company] faces [specific capability or skills constraint] and that [reskilling/upskilling/workforce investment] is required to [stated objective].

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
- [[sop-4-hiring-trends]] — Related signal: hiring trends
- [[sop-6-hr-technology]] — Related signal: HR technology
- [[run-manifest-template]] — Execution tracking template
