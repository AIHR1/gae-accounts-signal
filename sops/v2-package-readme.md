# AIHR Weekly Account Signals V2 — Final Replacement Package

## What this replaces

This package replaces the previous architecture of one master SOP plus six equal signal-category SOPs.

V2 uses four functional SOPs:

1. `sop-change-detection-v2.md`
2. `sop-evidence-enrichment-v2.md`
3. `sop-account-reasoning-relevance-v2.md`
4. `sop-master-digest-v2.md`

It also includes:

- `cursor-implementation-spec.md` — instructions for the Cursor/Slack orchestration layer
- `GAE_Top_Accounts_Context_23september.xlsx` — current account ownership and relevance context

## Core design

**External change → HR implication → implication for HR professionals → account fit → useful hypothesis**

The system searches broadly but reports narrowly.

Hiring, leadership appointments, HR technology, skills evidence, and leadership statements are evidence lenses. They are not six equal standalone signal lanes.

There is no Monitor category and no requirement to fill the digest.

## Account context

The workbook uses:

- Company name
- Rep's Name
- Q1 — Primary use case
- Q2 — Organizational scope
- Q3 — Highest meaningful HR access

`Rep's Name` is the account owner and routing key.

The current workbook contains 36 completed accounts:

- Max: 17
- Jessica: 10
- Filip: 9

## Delivery model

Run one shared weekly research/reasoning workflow across the full portfolio.

After Include/Suppress:

1. Group included insights by `Rep's Name`.
2. Render one digest per rep.
3. Send each digest to that rep's Slack destination.
4. Send nothing to a rep with zero qualifying insights.

Slack identities and credentials belong in the Cursor delivery configuration, not in the workbook or SOPs.

## Weekly review period

Use continuous weekly review windows with no gaps. A signal belongs to the period in which it is newly published or materially updated. Older evidence can enrich a new development but does not create a new signal by itself.

## Cutover order

1. Put the four V2 SOPs in place.
2. Use the included account-context workbook as the portfolio source of truth.
3. Configure Max/Jessica/Filip Slack routing in Cursor.
4. Follow `cursor-implementation-spec.md` to test ownership, isolation, suppression, weekly windows, and delivery.
5. Only then switch unattended weekly delivery on.

Do not maintain the old six signal SOPs alongside V2 as active decision-making logic; that would reintroduce the routing and noise problems V2 is designed to remove.
