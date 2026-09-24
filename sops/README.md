# Procedure SOPs

Active decision logic is the V2 workflow:

- `sop-change-detection-v2.md`
- `sop-evidence-enrichment-v2.md`
- `sop-account-reasoning-relevance-v2.md`
- `sop-master-digest-v2.md`

The four SOPs are unchanged from the package that arrived on 24 September 2026. `v2-package-readme.md` is the package note, with a status block that says where this repository differs. The human cutover checklist is `../cursor-implementation-spec.md`. It is not an SOP.

Rep-level routing is off. Until it is on, `../AGENTS.md` overrides the per-rep delivery section of `sop-master-digest-v2.md`: one combined digest goes to Max.

The portfolio source of truth is `account-context/GAE_Top_Accounts_Context_23september.xlsx`.

Retired V1 material is in `v1-archived/` at the repository root: the old SOPs, account table, agents, and templates. Do not use that folder to decide what reaches an Account Manager.

Each execution’s digest and logs live under `runs/{run-id}/`.
