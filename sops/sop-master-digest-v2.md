# SOP — Master Weekly Account Signals V2

## Purpose

Orchestrate the weekly AIHR account-intelligence workflow from account selection through Slack delivery.

The system should search broadly, reason carefully, and report narrowly. Its purpose is not to summarize company news. Its purpose is to give each AIHR Account Manager a small number of genuinely useful, account-specific external signals that improve customer conversations.

## Required inputs

### Account-context workbook

Use the current account-context workbook as the source of truth for the portfolio.

Required columns:

- Company name
- Rep's Name
- Q1 — Primary use case
- Q2 — Organizational scope
- Q3 — Highest meaningful HR access

`Rep's Name` is the routing owner. It identifies which Account Manager should receive an included insight for that account.

Do not infer or overwrite account ownership from external sources.

### SOP components

Run the workflow using:

1. `sop-change-detection-v2.md`
2. `sop-evidence-enrichment-v2.md`
3. `sop-account-reasoning-relevance-v2.md`
4. This Master SOP

## Weekly review window

Each successful weekly run must cover one continuous review period with no gaps between runs.

A development gets one normal opportunity to enter the workflow in the weekly period in which it is newly published or materially updated.

Do not extend the review period merely to make the digest fuller.

Older evidence may be used to understand or corroborate a new in-period development, but old evidence alone does not create a new weekly signal.

If an older development receives a genuinely material new update in the current review period, assess the new update as the candidate change.

## Workflow

### 1. Load the account portfolio

Read every populated account row in the workbook.

For each row retain:

- Exact company name
- Rep's Name
- Primary use case
- Organizational scope
- Highest meaningful HR access

Treat each account independently.

### 2. Detect meaningful external change

Apply `sop-change-detection-v2.md`.

The discovery stage should be broad enough to identify:

- Material organizational events
- Strategic shifts
- New evidence of changing expectations

Do not promote hiring clusters, appointments, HR technology, or generic leadership commentary merely because they are easy to find.

### 3. Enrich promising candidates

Apply `sop-evidence-enrichment-v2.md`.

Use the old signal categories as evidence lenses, not as equal output lanes.

Separate:

- Facts
- Explicit implications
- Inferred implications / hypotheses
- Scope limitations
- Confidence and gaps

### 4. Apply account-specific reasoning

Apply `sop-account-reasoning-relevance-v2.md`.

The required reasoning chain is:

**External change → HR implication → implication for HR professionals → current account fit → useful hypothesis**

A signal can be important company news and still be irrelevant to the current AIHR relationship.

### 5. Make the final Include / Suppress decision

Include only when the signal is useful enough that the Account Manager should see it.

There is no Monitor category.

There is no minimum number of insights per account, per rep, or per week.

There is no maximum number either. Quality and relevance determine volume.

Silent accounts do not appear in the rep-facing digest.

### 6. Assign one action label

Every included insight receives exactly one:

- **Proactive outreach** — there is a credible reason to contact the customer because of the new development and current relationship fit.
- **Use in conversation** — the intelligence should shape an existing or future customer conversation but does not justify standalone outreach.

### 7. Build the rep-facing insight

For each included item use this structure:

**[Account] — [Action label]**

**What changed**  
A concise factual description of the new development.

**Why this matters for this relationship**  
Explain the specific connection between the development, likely HR/people implications, and the current AIHR relationship.

**Hypothesis to test**  
State the uncertain implication as a hypothesis, not as customer fact.

**Suggested move**  
Give the Account Manager a practical question or conversation angle. Prefer hypothesis testing over pitching.

**Evidence**  
Provide the strongest 1–3 sources needed to support the item.

Keep each item concise. Do not expose research logs, rejected candidates, QA notes, source failures, or exclusion lists to the Account Manager.

## Ownership and Slack distribution

Distribution happens only after all account-level Include / Suppress decisions are complete.

### Routing rule

For every included insight:

1. Read `Rep's Name` from that account's workbook row.
2. Group included insights by exact `Rep's Name`.
3. Build one weekly Slack digest per rep containing only that rep's included accounts.
4. Send the digest to the Slack recipient mapped to that rep in the delivery configuration.

Example logic:

- Account owned by Max → Max's digest → Max's Slack recipient
- Account owned by Jessica → Jessica's digest → Jessica's Slack recipient
- Account owned by Filip → Filip's digest → Filip's Slack recipient

The workbook owns **account ownership**.

The delivery configuration owns **Slack identity/routing**.

Do not store Slack user IDs, webhook URLs, tokens, or other delivery credentials in the account-context workbook or these SOPs.

### Zero-insight rule

If a rep has zero included insights for the week, do not send that rep an empty digest or a "nothing happened" message.

The execution log should still record that the rep was processed successfully with zero included insights.

### Ownership changes

If an account moves to another Account Manager, updating `Rep's Name` in the workbook should be sufficient to change future digest routing. The research SOPs should not need to change.

## Slack digest format

Use one message per rep per weekly run.

Start with:

**Weekly Account Signals — [review period]**

Then show included items, strongest/actionable first.

Do not add a generic executive summary unless it adds information beyond the included items.

Do not show accounts with no qualifying signal.

Do not combine different reps' accounts in the same rep-facing Slack message.

## Internal execution record

Keep a compact internal record sufficient to verify the workflow ran correctly. It may contain:

- Review period
- Run timestamp
- Accounts processed
- Rep ownership used
- Included items
- Suppressed candidates and concise reasons
- Source/retrieval failures
- Delivery status by rep

This internal record is operational QA. It is not part of the Account Manager digest.

## Failure handling

### Missing account context

If Company name or Rep's Name is missing, do not guess. Flag the row in the execution record and do not route an insight until ownership is known.

If Q1, Q2, or Q3 is missing, do not silently invent it. Apply the strictest reasonable relevance standard and flag the missing context internally.

### Research failure

A failed search or inaccessible source is not evidence that no signal exists. Record material research failures internally.

### Delivery failure

Research results must not be rerouted to another rep merely because Slack delivery fails.

Record the failed delivery and retry through the orchestration layer according to the implementation's normal retry policy.

## Final quality check

Before delivery verify:

- The development is new or materially updated in the active review period.
- The factual claim is supported.
- Fact and hypothesis are clearly separated.
- The HR-professional implication is specific.
- The account-context connection is credible.
- The suggested move is consultative.
- The action label is appropriate.
- The item is assigned to the rep in `Rep's Name`.
- The Slack digest contains no other rep's accounts.
- No suppressed or silent accounts appear in the rep-facing output.

The final standard is simple:

**Would this insight help this Account Manager have a better, more relevant customer conversation now or in the next meaningful interaction?**

If not, suppress it.
