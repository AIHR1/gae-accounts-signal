# Cursor Implementation Spec — Weekly Account Signals V2

Human checklist for turning on rep-level Slack routing. This is not an SOP, and Cursor does not load it. Active run instructions are `AGENTS.md`, the four files in `sops/`, and `.cursor/rules/gae-accounts-signal-execution.mdc`.

## Goal

Implement the V2 SOP package as one weekly portfolio workflow that researches all accounts once, then distributes included insights to the Account Manager who owns each account.

Do not create separate research logic for Max, Jessica, and Filip.

## Inputs

### 1. Account context

Current workbook: `GAE_Top_Accounts_Context_23september.xlsx`

Read the first worksheet and require these columns:

- `Company name`
- `Rep's Name`
- `Q1 — Primary use case`
- `Q2 — Organizational scope`
- `Q3 — Highest meaningful HR access`

The workbook is the source of truth for account ownership and account-specific relevance context.

### 2. SOPs

Use the four V2 SOP files in this package.

### 3. Delivery mapping

Maintain rep-to-Slack routing outside the workbook and outside the SOP text.

Example configuration shape only:

```yaml
rep_slack_routes:
  Max: "<MAX_SLACK_USER_OR_DESTINATION>"
  Jessica: "<JESSICA_SLACK_USER_OR_DESTINATION>"
  Filip: "<FILIP_SLACK_USER_OR_DESTINATION>"
```

Use the Slack identifier/destination type supported by the existing Cursor → Slack connection.

Do not commit Slack tokens, webhook secrets, or credentials into the SOP repository.

## Run sequence

1. Determine the active weekly review period.
2. Load all populated account rows.
3. Validate that each account has a `Rep's Name`.
4. For every account, execute Change Detection.
5. Enrich only promising candidates.
6. Apply Account Reasoning & Relevance using that account's Q1–Q3 context.
7. Keep only `Include` items.
8. Assign `Proactive outreach` or `Use in conversation`.
9. Group included items by `Rep's Name`.
10. Render one Slack digest per rep.
11. Send each digest to the rep's mapped Slack destination.
12. If a rep has zero included items, send nothing.
13. Write the internal execution record and delivery status.

## Important separation of concerns

### Research/reasoning layer

Knows:

- Company
- Rep's Name
- Account context
- External evidence
- Include/Suppress
- Action label
- Insight content

It should not know Slack credentials.

### Delivery layer

Knows:

- Rep's Name
- Slack destination
- Final rendered digest

It should not change research conclusions or account ownership.

## Suggested intermediate output

Before Slack rendering, produce structured results with fields equivalent to:

```json
{
  "account": "Example Company",
  "rep_name": "Max",
  "decision": "Include",
  "action_label": "Use in conversation",
  "what_changed": "...",
  "why_relationship_relevant": "...",
  "hypothesis_to_test": "...",
  "suggested_move": "...",
  "sources": ["..."]
}
```

Suppressed candidates may be retained in the internal run log but must not enter Slack rendering.

## Grouping logic

Conceptually:

```text
included = all_results where decision == "Include"

for each rep_name in included:
    rep_items = included where Rep's Name == rep_name
    sort rep_items by actionability/relevance
    render one digest
    send to mapped Slack destination

if rep_items is empty:
    do not send a message
```

Do not duplicate the same account insight across multiple reps unless the workbook itself contains intentionally separate account rows with different ownership.

## Weekly-window rule

Use continuous weekly review periods with no gaps.

Do not broaden the window to fill a quiet digest.

Historical evidence outside the window may enrich a new in-window development.

If the scheduling implementation can fail or skip a run, the orchestrator should detect the missed period and recover the uncovered dates rather than silently creating a gap.

## Validation before production

Run these tests before replacing the current workflow:

1. **Ownership test** — confirm one known Max, Jessica, and Filip account routes to the correct bucket.
2. **Isolation test** — confirm Max's Slack payload contains no Jessica/Filip accounts, and vice versa.
3. **Zero-insight test** — confirm no Slack message is sent for a rep with zero included items.
4. **Context test** — confirm Q1–Q3 values from the correct account row reach the reasoning stage.
5. **Suppression test** — confirm suppressed candidates never appear in Slack.
6. **Window test** — confirm adjacent weekly runs cover continuous dates without gaps.
7. **Delivery-failure test** — confirm a Slack failure is logged/retried and never rerouted to another rep.
8. **Secret-handling test** — confirm Slack credentials are not stored in the workbook, SOPs, or committed logs.

## Cutover

Once the tests pass:

- Replace the old signal-category SOP workflow with the V2 four-stage workflow.
- Point the workflow at the current account-context workbook.
- Configure the rep-to-Slack routing map.
- Keep the existing Cursor → Slack connection if it supports rep-specific destinations.
- Run one controlled weekly cycle and inspect the three rep payloads before enabling unattended delivery.

The research logic should remain shared. Only the final delivery is split by rep.
