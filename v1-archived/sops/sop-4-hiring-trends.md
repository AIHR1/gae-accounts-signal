# SOP Signal 4

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

**Table rows are atomic:** Each row is a distinct account for discovery and reporting. Do not assume that sharing a domain or parent company means one search covers multiple rows. If you intentionally batch discovery (e.g. one careers site serving several listed entities), you must **document that decision and which rows were covered** in the execution log (Section 8). Default posture: **run discovery using the row’s exact account name** at least once per row.

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

**Signal Type Name:** Hiring trends in strategic capability areas

**What to Look For:** **Observable evidence during the active review period** that the organization is **concentrating hiring** in commercially relevant HR / workforce capability domains—not a single generic vacancy and not broad IT / data hiring.

**Strategic capability domains** (non-exhaustive):

- Leadership development, talent management architecture, organizational effectiveness
- HR analytics, people analytics, workforce planning (strategic roles, not only payroll clerks)
- HRIS / HCM / people-systems transformation, HR service delivery, or HR process change
- Learning, L&D, learning technology, skills architecture, talent marketplace, or capability academy roles
- Change management, workforce transformation, talent transformation, skills-based workforce design, organizational design, or future-of-work roles
- Leadership, management development, culture change, or strategic talent acquisition **when linked to enterprise capability building**

Generic technology hiring is **not** in scope unless the cluster is explicitly inside HR / Talent / L&D / People Analytics / HRIS / Change / Leadership or the source states that the hiring supports HR transformation or workforce capability building.

**Hard exclusions (not in scope — do not count toward volume or as a trend):**

- **Graduate programmes**, graduate hiring schemes, campus / university pipeline intakes, “young professional” or **early-careers** cohorts marketed primarily at **pre-experience** candidates
- **Internship programmes** (including multi-place **intern** cohorts, summer / vacation schemes, “internship campaign” microsites)
- Any role family whose **primary audience** in the posting text is students, recent graduates only, or interns—even if titles mention “data,” “AI,” or “digital”
- Generic IT, software engineering, data, analytics, cybersecurity, AI, automation, or digital-product hiring with no HR / workforce capability link
- Single generic job postings, including single HR postings, unless accompanied by a qualifying cluster or explicit company statement

*Illustrative non-signals:* An **internship** campaign; generic “we are hiring graduates into our [digital] stream” messaging without **mid-career** strategic roles in the same theme.

**What counts as a “trend” (operational rules):**

Meet **at least one** of the following **and** document the basis in the execution log. **Exclude** any hit that falls under **Hard exclusions** above.

- **Volume:** **Three or more** open roles (or **three or more** distinct postings) visible **in the same qualifying HR / workforce capability theme** within the review period **or** simultaneously live on the official careers properties during the verification pass, **after** you have sampled the relevant careers index or search for that account row — **each counted posting must be** a **professional / experienced-hire** track (not intern, not graduate-only intake).
- **Explicit company statement:** Leadership, HR, or investor communication **in-period** that states **expansion** of hiring in a named HR / workforce capability area (e.g. people analytics, HRIS transformation, L&D, leadership development, change management, skills architecture) **for the professional workforce** — not solely graduate or intern intake.
- **Structured hiring event (mid-career or mixed professional intake only):** Public announcement of a **talent program, academy, reskilling cohort, or mass experienced hire** in a strategic domain with stated numbers or geography — **only if** the programme is **not** marketed exclusively as graduate, intern, or early-careers; if the announcement blends tracks, **count only** the professional / experienced-hire elements in the digest and **log** what was excluded.

**If only one or two postings exist** and there is no company statement or qualifying programme, **exclude** unless the requester has lowered the threshold for a pilot (log any waiver).

**Why It Matters:** Hiring concentration reveals investment direction, anticipated skill gaps, and near-term capability build-out that L&D and HR tech agendas must support.

**What a Strong Signal Looks Like:**

- Multiple concurrent **professional-track** people analytics, HRIS, L&D, leadership development, or change roles across regions on the official careers site
- Earnings or HR blog post stating accelerated hiring in HR transformation, workforce planning, skills architecture, or learning capabilities **for experienced hires**
- Launch of a company-branded **mid-career** academy or reskilling cohort tied to internal workforce capability needs

**What to Ignore (Noise):**

- **All graduate, internship, and early-careers-only** pipelines (see **Hard exclusions**)
- One-off backfills or replacements
- Third-party job board scrapes **without** cross-check against official careers or company statement
- Generic IT/data/AI hiring clusters outside HR, Talent, L&D, People Analytics, HRIS, Change, Leadership, or Workforce Strategy
- Roles that are **not** plausibly strategic (e.g. routine facilities, generic admin) unless bundled in an explicit **professional** company programme

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** For postings, prefer **first seen live** date in-window **or** **last updated** date if the platform exposes it and indicates material refresh. For statements, use **publication date** of the article, post, or filing.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3) were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + careers + theme** — `"{Account name}" (careers OR jobs OR hiring) (AI OR "machine learning" OR data OR analytics OR "people analytics" OR "talent management" OR "organizational development")`
2. **Domain careers path** — Discover `careers.{domain}`, `jobs.{domain}`, or Greenhouse/Lever/Workday-style hosts linked from the corporate site; run **theme-filtered** searches **inside** the official tool when available.
3. **Executive or HR statement** — `"{Account name}" (hiring OR talent OR workforce) (AI OR data OR analytics OR skills) (interview OR blog OR podcast OR "investor")`

**Additional families when warranted:**

4. **LinkedIn / professional network** — Use **only** as supporting evidence of volume if company-primary sources are thin; **do not** rely on LinkedIn alone without noting limitations; prefer official careers counts when possible.
5. **Retry without a tight date filter** — Broad search, then filter posting dates or verify “still open” on the careers site during verification.
6. **Local language** — Apply [[sop-1-chro-statement]] Section **7.1a**; run careers and hiring vocabulary in the target language on the **official** jobs host when discoverable (e.g. French: `emploi`, `recrutement`, `offres`, `carrières`; German: `Stellenangebote`, `Karriere`, `Einstellung`).

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–6** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep.

### 7.3 Batching exception

Same rules as [[sop-1-chro-statement]] Section 7.3. **Division rows** often have **separate** career sites—do not assume one careers portal covers all rows without logging coverage.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch** the careers listing, announcement, or transcript—not only search snippets.
2. Confirm **dates** align with Section 6.
3. For **volume-based** claims: **count** qualifying postings (or capture a **screenshot / URL list** in the log), confirm roles map to Section 5 HR / workforce capability domains, and confirm **none** of the counted postings are **intern, graduate-only, early-careers pipeline, generic IT, or generic data / AI** roles excluded by Section 5.
4. For **statement-based** claims: confirm the speaker/channel is **company-official** or clearly attributed.
5. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated fetch fails (many ATS pages are script-heavy), use browser or human verification and log it. Apply **Section 8.3** where URLs are valid but fetchers fail.

### 8.2 Execution log (required for agent or delegated runs)

Include, in addition to the standard log fields:

- **Method used for trend proof** (count, statement citation, or program announcement)
- **If count-based:** list of **job titles or posting URLs** counted (can be appendix), and the **date of verification**

### 8.3 Fallback retrieval when the primary URL fails

Apply the same ordered fallback sequence as [[sop-1-chro-statement]] Section 8.3. ATS pages may require **human/browser** (step 7) earlier than other SOPs—log accordingly.

**Digest rule:** The digest entry must remain factual; **do not** invent counts—only report what was verified.

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
- Date (verification date for posting clusters, or publication date for statements)
- Source type (e.g. official careers portal, press release, earnings call, company blog)
- Source link(s)—**primary** careers search URL or announcement URL
- Signal description (1–3 sentences, factual): **theme, evidence type (count range or quote), geography if visible**
- For master digests, use [[sop-master-digest]] Section 8 fields: **What changed**, **Why it matters**, **Relevant stakeholder**, **Commercial hypothesis**, and **Score**

Example count phrasing: “As of [date], the public careers site listed [N] open roles in [theme], including titles such as [examples].”

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
Date: [Verification or publication date]  
Source: Official careers portal (filtered search)  
Link: [URL]  
Signal: On [date], [Company]’s careers site showed at least [N] active postings in [HR / workforce capability theme] across [regions if listed], including [2–3 example job titles].

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
- [[sop-3-transformation-initiative]] — Related signal: transformation initiatives
- [[sop-5-skills-gaps]] — Related signal: skills gaps
- [[run-manifest-template]] — Execution tracking template
