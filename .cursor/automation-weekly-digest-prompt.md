# Paste into Cursor Automations → prompt

Replace the saved weekly prompt with the block below. This file does not change an automation that is already saved in the Cursor UI. The cloud run only sees files that are committed and pushed on the branch the automation checks out.

Rep-level Slack routing is not part of this prompt. One combined digest still goes to the existing destination.

---

You are running the **weekly Account Signals** digest for **gae-accounts-signal**.

1. Read **`AGENTS.md`** at the repository root and follow it. Research logic is V2 only:
   - **`sops/sop-change-detection-v2.md`**
   - **`sops/sop-evidence-enrichment-v2.md`**
   - **`sops/sop-account-reasoning-relevance-v2.md`**
   - **`sops/sop-master-digest-v2.md`**
   The portfolio source of truth is **`account-context/GAE_Top_Accounts_Context_23september.xlsx`**.
   Do not use **`accounts-in-scope.md`**, **`sops/v1-archived/`**, **`.cursor/agents/digest-orchestrator.md`**, **`.cursor/agents/digest-verifier.md`**, or **`.cursor/agents/signal-sop-runner.md`**. Do not run six signal lanes. There is no Monitor category and no minimum number of insights.

2. Set the review window to the Monday–Sunday week that has just ended in Europe/Amsterdam. Name the **`run-id`** from those dates, for example `2026-09-15-to-2026-09-21`. Write the working files under **`runs/{run-id}/`** only.
   Do not look in git for an earlier run. **`runs/`** is gitignored, so a fresh checkout will not contain one. Do not lengthen the window to produce more insights, and do not backfill older weeks.
   A development counts only if it was newly published or materially updated inside the window. Open the source and record the date you saw. If the date is unclear, do not include it. Older material may explain an in-window change. It does not create a signal by itself.

3. Load every populated account row. Require Company name and Rep's Name. Read Q1 as the primary use case, the filled Q2 value as breadth of AIHR reach within HR, and Q3 as the highest meaningful HR access. Do not guess a missing owner or a missing Q1–Q3 value. Research each account independently. Hiring volume, a bare leadership appointment, an HR-system go-live, an award, or generic leadership commentary is not a signal on its own.

4. For each account, run Change Detection, then Evidence Enrichment only for promising candidates, then Account Relevance. Separate fact from hypothesis. Include an item only when the external change, the HR implication, the people-level implication, and this account’s Q1–Q3 context all support a useful conversation. Suppress otherwise. A quiet account or a quiet week is a valid result.

5. Write two files:
   - **`runs/{run-id}/master-digest-{run-id}.md`** — included items only, in the structure in **`sops/sop-master-digest-v2.md`**. Put Rep's Name on each item. No suppressed accounts and no research log.
   - **`runs/{run-id}/execution-record-{run-id}.md`** — accounts processed, queries, candidates, suppress reasons, source failures, and delivery status.

6. If at least one item is included, send **one** combined Slack message with **`slack_send_message`**. Set **`channel_id`** from the Cloud secret **`MAX_SLACK_CHANNEL_ID`**. Do not use Cursor’s built-in Send to Slack action. Do not message Jessica or Filip separately.
   Name the review period, then each included item in plain language: account, owner, what changed, why it matters for this relationship, the hypothesis to test, the suggested move, and the source link. Do not pitch an AIHR product. Split into several messages if the text is too long.
   If nothing is included, send no Slack message. Record that in the execution record.

7. Do not commit, push, or open a pull request. **`runs/`** is gitignored, so those files will not be in git. The Slack message is the delivery. Do not commit other files either.

If you cannot finish, stop with a checkpoint that names the unfinished accounts. Do not mark those accounts silent, and do not send Slack.
