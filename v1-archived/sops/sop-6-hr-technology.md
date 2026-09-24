# SOP Signal 6

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

**Signal Type Name:** HR or learning technology implementation or rollout

**What to Look For:** **Confirmed** **implementation, go-live, migration, or enterprise rollout** during or **first publicly announced during** the active review period of people-related technology—not roadmap speculation.

**In-scope systems and categories** (examples):

- Learning Management System (LMS), LXP, learning ecosystem replacement or global standardization
- Skills platforms, talent marketplace, internal gig / opportunity platforms **when presented as deployed or rolling out**
- HR Information System (HRIS) / HCM core (e.g. Workday, SAP SuccessFactors, Oracle HCM, UKG, Dayforce) **phase go-live**, **global template** launch, or **major module** rollout **described as underway or complete**
- Talent, performance, compensation, or succession modules **when tied to a deployment milestone**
- Workforce planning, people analytics, or HR service delivery platforms **with go-live language**
- **Company-attributed** adoption of AI tools **for HR, learning, or internal talent** (e.g. copilot for HR ops, AI in recruiting workflow) **with deployment or pilot-at-scale** language—not a generic vendor press release **unless** the **customer** is named and confirms participation

**Evidence must be company-primary:** press release, official blog, investor materials, **customer-named case study on a vendor site with enough detail to verify**, earnings/scripted remarks, or **regulated disclosure**. **Vendor-only** “Company X selected our product” **without** customer corroboration is **excluded**.

**Boundary with [[sop-3-transformation-initiative]]:** If the announcement is **only** a systems go-live with no enterprise transformation narrative, use **this SOP**. If it is **primarily** a transformation program with systems as one line, follow the boundary rule in SOP 3.

**Why It Matters:** Go-lives drive training demand, change management, governance, content rebuilds, skills taxonomy work, and adoption support.

**What a Strong Signal Looks Like:**

- Official announcement of global LMS rollout completion or next-wave geography
- HRIS cutover milestone with stated employee population or go-live date
- Public description of a skills platform launch tied to internal mobility or workforce planning

**What to Ignore (Noise):**

- RFP “intent to procure” with no award or go-live
- “Exploring,” “evaluating,” or “partnership discussions” **without** deployment facts
- Award logos or conference slides **without** datable customer confirmation
- Pure IT infrastructure or non-HR software **unless** explicitly framed as the people stack

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** Use **announcement publication date** or **stated go-live date** if the release is the first public disclosure of that milestone in-window.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3) were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + HR tech vocabulary** — `"{Account name}" (LMS OR LXP OR Workday OR SuccessFactors OR "SAP" HR OR Oracle HCM OR HRIS OR "learning platform" OR "talent platform") (go-live OR rollout OR implementation OR migration OR launch OR deploy)`
2. **Domain-constrained** — `site:{domain}` combined with HR tech product names, “digital HR,” “people systems,” “learning ecosystem,” “HR transformation” **plus** go-live terms
3. **Partner / case study (secondary, must verify customer quote)** — `"{Account name}"` plus `(case study OR customer story OR press release)` plus vendor or product name—**then** confirm customer-side text exists

**Additional families when warranted:**

4. **Investor / annual report** — MD&A or technology section describing HR systems milestones (often high-level; still needs explicit implementation language).
5. **Retry without a tight date filter** — Broad search, then filter by date.
6. **Local language** — Apply [[sop-1-chro-statement]] Section **7.1a**; use HRIS / LMS / deployment vocabulary in the target language (e.g. French: `SIRH`, `déploiement`, `mise en œuvre`, `formation`, `plateforme de gestion des talents`; German: `HR-System`, `Einführung`, `Rollout`, `Lernplattform`).

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–6** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep.

### 7.3 Batching exception

Same rules as [[sop-1-chro-statement]] Section 7.3.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch** the customer-primary source (or customer section of a joint release).
2. Confirm **date** falls in the active review period (Section 6).
3. Confirm language indicates **actual implementation, rollout, go-live, or completed migration milestone**—not intent only.
4. If the **only** source is vendor-authored, confirm **named customer** statements, quotes, or logo use **with datable publication**; otherwise exclude.
5. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated HTTP fetch fails, apply **Section 8.3**.

### 8.2 Execution log (required for agent or delegated runs)

Same requirements as [[sop-1-chro-statement]] Section 8.2. Log **vendor vs customer URL** when both exist.

### 8.3 Fallback retrieval when the primary URL fails

Apply the same ordered fallback sequence as [[sop-1-chro-statement]] Section 8.3.

**Digest rule:** Prefer **customer URL** in the digest; vendor mirror may be used for verification per log.

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
- Date of publication or stated go-live
- Source type (e.g. press release, investor deck, annual report, vendor case study with customer confirmation)
- Source link (mandatory if available)
- Signal description (1–3 sentences, factual): **system or program name (if public), scope (population/geography/module), milestone stated**
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
Source: Corporate press release  
Link: [URL]  
Signal: [Company] announced [go-live / rollout / migration] of [system or program name if disclosed] for [scope: e.g. HR, payroll, learning] covering [population or region if stated], with [milestone date or phase if stated].

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
- [[sop-5-skills-gaps]] — Related signal: skills gaps
- [[sop-1-chro-statement]] — Related signal: CHRO public statements
- [[run-manifest-template]] — Execution tracking template
