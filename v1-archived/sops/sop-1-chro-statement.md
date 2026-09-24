# SOP Signal 1

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

**Signal Type Name:** CHRO / Chief People Officer Public Statements *(digest tag remains `[chro-statement]`; scope includes VP-level and equivalent senior people-leadership voices below)*

**What to Look For:** Any direct statement, quote, or articulated viewpoint from a **CHRO, Chief People Officer, or equivalent senior HR / people / talent / learning leader** **first published or first substantially updated during the active review period**, in:

- Interviews (written or video)
- Podcasts
- Articles or media features (including **trade press** and conference recaps when the **speaker’s role and attributed voice** are explicit)
- Official company communications (press releases, earnings calls where HR leadership speaks)

**Equivalent senior HR leader** includes:

- Executive Vice President of Human Resources, Group Human Capital Executive, or **regional / division CHRO** where the content clearly reflects enterprise or division people strategy—not only the global title
- **Vice President** (or SVP) titles when the remit is **strategic people work**: e.g. VP Human Resources, VP People, **VP Talent / Talent Management**, **VP Learning / L&D / Learning Excellence**, VP Workforce / People Experience / Organizational Effectiveness, or clearly equivalent **head-of-function** titles at the same band **when** the piece attributes **their** viewpoint (not only journalist inference)

**Precision inclusion rule:** If the speaker sits in the **VP band or above** in HR, talent, learning, workforce, or people transformation and the content meets the topic bar below, include only when the statement has a clear strategic workforce or capability implication. When the speaker is not the global CHRO/CPO, state their **exact title** in the digest entry.

Exclude pure employer-brand slogans with no concrete priority. **Do not** exclude solely because the outlet is external (e.g. From Day One, conference blog) if Section 8.1 attribution checks pass.

**The statement must explicitly reference at least one of:**

- Skills gaps or capability gaps
- Upskilling, reskilling, or learning strategy
- Leadership development or management capability
- HR transformation, HR operating model change, or people analytics
- Workforce strategy shifts, organizational change, or talent architecture changes
- AI / automation impact on the workforce, roles, skills, or HR function

**Why It Matters:** These statements reflect top-down strategic intent and priorities, often signaling where budget, focus, and transformation efforts will follow.

**What a Strong Signal Looks Like:**

- CHRO states the organization is prioritizing reskilling to support AI adoption
- CHRO highlights leadership capability gaps as a barrier to growth
- CHRO outlines a shift toward a skills-based organization model

**What to Ignore (Noise):**

- Generic statements such as “our people are our greatest asset”
- General “talent is important” messaging with no specific workforce strategy, capability gap, or learning implication
- Employer branding, awards, culture marketing, career events, campus recruitment, or early-career promotion unless the attributed statement clearly discusses one of the qualifying topics above
- Recycled or previously published quotes without new context
- Third-party articles about HR programmes **with no attributed quote or clear paraphrase of** the CHRO/CPO, VP-level people leader, or equivalent senior HR leader (awards round-ups, vendor content, etc.)
- Investor or company strategy language quoted by an HR leader only in broad terms, with no explicit workforce / capability implication

---

## 6. Review period

**Default:** The seven calendar days ending on the run date (inclusive).

**Custom:** The requester may specify a different window (e.g. a calendar month). The active review period must be stated at the top of the digest and in the execution log.

**Date rule:** Use the **publication date of the piece** (article, press release, podcast episode, transcript posting), not the date of an event mentioned inside it, unless the requester’s window is explicitly event-based. If only “updated” metadata exists, note that in the log and judge whether the content is meaningfully new for the window.

---

## 7. Discovery standard (mandatory)

Thoroughness is part of compliance. **A single generic web query per account is insufficient** unless all core families below (1–3), plus the name-specific pass when applicable (4), were satisfied in that one query (rare); normally you will run **multiple queries per row**.

### 7.1 Minimum query families per account row

For **each** row in [[accounts-in-scope]], run at least **three distinct discovery attempts** from families **1–3** before concluding “no qualifying signal.” Each attempt must use a **different query shape** (not trivial word-order changes). Recommended families:

1. **Named account + HR leadership titles** — Include the **exact account name** from the table. Example pattern: `"{Account name}" (CHRO OR "Chief People Officer" OR "Chief Human Resources Officer" OR VP AND (Human Resources OR Talent OR Learning OR Workforce OR People))` plus optional topic terms (skills, interview, podcast, AI). Adjust for regional title conventions.
2. **Domain-constrained** — Use the **domain** from the table: `site:{domain}` combined with leadership/topic terms, or the organisation’s careers/newsroom keywords. If the table domain is generic (e.g. group domain for several brands), still include the **account name** in the query.
3. **Interview / audio / long-form** — e.g. `"{Account name}" (interview OR podcast OR fireside) (HR OR talent OR people OR workforce)`.
4. **Name-specific (mandatory when publicly resolvable)** — When the **current** CHRO, CPO, **or** a **VP-level or above** HR / talent / learning leader’s **full name** can be confirmed from **public** sources only (e.g. company leadership or management page, official appointment announcement, annual report or investor **management** section), run **at least one** additional query that includes the **person’s name** together with the **account name** and/or `site:{domain}`, plus optional topic or format terms (talent, workforce, skills, interview, podcast). Tie common names to the company or domain so results are not ambiguous. If the named individual cannot be established without guesswork, or role recency is unclear, **skip** this family and log **“named pass skipped — identity not established publicly (or ambiguous).”**

**Additional families when warranted (not optional if 1–3 return nothing useful):**

1. **Retry without a tight date filter in the query string** — Search broader, then **manually filter** hits to the active review period. Many indexes omit or mis-handle date operators.
2. **Local language** — Apply **Section 7.1a** (mandatory cases). For other rows, if English does not clearly dominate official careers and newsroom surfaces, run at least one query in the primary operating language with equivalent HR titles and signal terms.
3. **Alternate spellings and subsidiaries** — Legal name variants, “Group,” “Holdings,” or a known division name **for that row** if the table row is division-specific.

### 7.1a Mandatory local language (headquarters and primary disclosure)

When the **listed parent / group headquarters** is in a **non-English-primary** jurisdiction, or **regulated and investor materials** for that row are routinely published in another language first, **family 6 is mandatory for that row** — not merely an “extended pass” after empty English results. Log **ISO 639-1 language code** and the **full query string** for each non-English attempt.

**French (illustrative — e.g. Orange Group, Orange SA, Orange Business, ENGIE, Pierre Fabre):** Combine the account name or `site:{domain}` with leadership and media terms such as `direction des ressources humaines`, `DRH`, `directeur` OR `directrice` `des ressources humaines`, `talents`, `compétences`, `formation`, `interview`, `podcast`, `communiqué de presse`. **Division rows** on English domains (e.g. Orange Business) still warrant **at least one** French query using the **group** or French legal name when the parent is French.

**German (illustrative — e.g. METRO AG, Phoenix Contact, Bertelsmann):** e.g. `Personal`, `Personalvorstand`, `HR`, `Transformation`, `Kompetenzen`, `Weiterbildung`, `Interview`, `Pressemitteilung` with the account name or `site:{domain}`.

**Other jurisdictions:** Apply the same rule (e.g. Arabic, Japanese, Dutch) using titles and HR vocabulary appropriate to that market.

### 7.2 Empty or weak results

If the first three families yield no candidate sources, **do not stop**: run families **5–7** at minimum and record “extended pass” in the log. If this row is being executed as part of a [[sop-master-digest]] run, the operator must also have completed that note’s **Section 7.2** trade-media sweep for the same review period before concluding “no qualifying signal,” unless **RF-WAIVER** documents skipping the sweep. If results are only directory pages or org charts with **no** dated statement in-period, that row still concludes as “no signal” after the extended pass.

### 7.3 Batching exception

Batching multiple table rows into one query is **discouraged**. If used to save redundant effort, the log must list **each row ID or name**, the **shared query(ies)**, and **why** batching is valid (e.g. identical employer of record and single public HR narrative). **Division-specific rows** (e.g. separate DHL or Orange entities) generally **do not** qualify for batching unless each division name appears explicitly in the query set.

---

## 8. Verification, tooling, and execution log

### 8.1 Verify before digest inclusion

For every candidate signal:

1. **Open or fetch the primary source** (not only the search snippet).
2. Confirm **publication date** falls in the active review period (Section 6).
3. Confirm the **speaker’s role** matches Section 5 (CHRO/CPO, **VP-level or above** in strategic HR / talent / learning / workforce, or equivalent senior HR leader per Section 5).
4. Confirm the content includes a **quotable or clearly attributed** viewpoint on the topics in Section 5—not only journalist summary with no HR leader voice.
5. Confirm the candidate passes [[sop-master-digest]] Section **4.1** if it will be included in a master digest: it must identify the AIHR-relevant capability need, stakeholder, and commercial hypothesis, and score **18/25** or higher.

If automated HTTP fetch returns empty, paywalled, or script-heavy pages, **use another method** and note **every** attempt in the log. See **Section 8.3** for the standard fallback sequence.

### 8.2 Execution log (required for agent or delegated runs)

Whenever this SOP is executed by an agent, contractor, or anyone other than the requester doing ad-hoc spot checks, maintain an **execution log** for that run, including:

- Active review period and run date
- **Every discovery query** (full string) and tool/channel used
- **Every source URL** retrieved or opened for verification, with outcome (success, partial, timeout, paywall)
- **Inclusion/exclusion notes** for near-misses (wrong month, wrong speaker tier, no quote, etc.)

The digest and the log may be separate files. The digest remains executive-facing; the log is for auditability and improving the next run.

### 8.3 Fallback retrieval when the primary URL fails

Some origins (certain corporate CDNs, bot mitigation, or HTTP/2 edge faults) return **timeouts, empty bodies, or protocol errors** to default automated fetchers even though the page loads in a normal browser. When the **primary URL** cannot be verified on first attempt, apply the following **in order**, logging each channel and outcome (success, partial, failure). Stop when you have sufficient text to apply Section 8.1 checks.

1. **Same URL, different client** — Retry via shell `curl` with a common browser **User-Agent**, or force **HTTP/1.1** (e.g. `curl --http1.1`) if the default client used HTTP/2 and the server returns stream errors. Increase timeout once before abandoning.
2. **Official mirror of the same release** — Many groups publish the identical press release on a **divisional**, **regional**, or **investor** hostname (e.g. group newsroom vs `www.{brand}.{tld}/…/press/…`). Prefer mirrors that declare the same **canonical** URL or the same headline and date. Use the mirror for verification text; cite the **original** URL in the digest if it is the authoritative permalink, and note which URL was actually retrieved.
3. **Wire / syndicated copy** — If the announcement is a **GlobeNewswire**, **Business Wire**, or similar distribution, the same quotes and date often appear on the wire site or reputable republishers; treat as secondary confirmation when the corporate HTML is blocked, not as a substitute for the official release unless the corporate site remains inaccessible after step 2.
4. **Linked PDF** — If the HTML page lists a **press release PDF**, fetch the PDF directly (often a different host or path and less brittle than the SPA shell).
5. **Readability / extraction proxy (last resort before human)** — Services that fetch the URL server-side and return **markdown or plain text** (e.g. `https://r.jina.ai/http://` or `https://r.jina.ai/https://` prepended to the target URL) can unblock verification when direct TLS/HTTP fails. **Requirements:** log that a **third-party** fetcher was used; prefer steps 1–4 first; do not send authenticated or sensitive URLs through external proxies; comply with your org’s policy on external tools.
6. **Archived copy** — If the page is historical and indexed, **Internet Archive** or similar may hold a static snapshot.
7. **Human or browser tooling** — If automated options fail, use an in-browser read (e.g. editor MCP, local browser) or ask the requester to confirm; record **manual verification** in the log.

**Digest rule:** Signals may be included only when Section 8.1 is satisfied using text obtained through any of the channels above; the log must show **which channel** produced the verifiable quote and date.

---

## 9. Execution workflow

1. **Confirm review period** with the requester if not default; record it in the log and digest header.
2. **Iterate accounts** per Section 3 and **discovery minimums** per Section 7 (including family **4** when the CHRO/CPO **or** a qualifying VP+ people leader’s name is publicly resolvable).
3. **Filter to signal type** only (Section 5); discard noise.
4. **Verify** each candidate per Section **8.1** and, if needed, **8.3** fallback retrieval.
5. **Write digest entries** per Section 10 (format). Omit accounts with no qualifying signal.
6. **Complete the execution log** per Section 8.2.

---

## 10. Entry format and quality standard

### 10.1 Each digest entry must include

- Account name (table row)
- Date of publication (or signal date per Section 6)
- Source type (e.g. interview, article, press release, earnings call)
- Source link (mandatory if available)
- Signal description (1–3 sentences, factual, no interpretation), including **speaker name and exact title**
- For master digests, use [[sop-master-digest]] Section 8 fields: **What changed**, **Why it matters**, **Relevant stakeholder**, **Commercial hypothesis**, and **Score**

If a source link is not available, include enough source detail for verification.

### 10.2 Quality standard

A high-quality digest:

- Contains only relevant, high-signal information
- Strictly adheres to the defined signal type
- Avoids repetition and generic information
- Surfaces only meaningful developments or statements
- Enables fast scanning and immediate usability

---

## 11. Example entry format

Account: Schneider Electric  
Date: 12 March 2026  
Source: Conference recap (media article)  
Link: [URL]  
Signal: [Speaker name and title] stated that [specific workforce/skills/talent priority in reported speech or clear attribution].

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
- [[sop-2-leadership-appointment]] — Related signal: leadership changes
- [[run-manifest-template]] — Execution tracking template