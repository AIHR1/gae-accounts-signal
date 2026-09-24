# Account context

`GAE_Top_Accounts_Context_23september.xlsx`, sheet `Account Context`, is the portfolio source of truth for V2.

Required columns:

- Company name
- Rep's Name
- Q1 — Primary use case
- Q2 — Organizational scope
- Q3 — Highest meaningful HR access

`account-context-snapshot-2026-09-23.json` is a derived copy of the 36 populated rows for the 15–21 September 2026 test. If the workbook changes, regenerate the snapshot from the workbook. Do not edit the snapshot by hand and treat it as newer than the workbook.

## Q2 label mismatch — do not “fix” this in the SOP

The column header says organizational scope. The hidden `Dropdown Lists` sheet offers geographic values: Single function/team, Business unit, Country, Multi-country or regional, Global, Unclear.

The 36 filled Q2 cells do not use those geographic values. They use the reach categories in `sop-account-reasoning-relevance-v2.md`: Specific HR function, Multiple HR functions, Most / all of the HR organization, Small group within HR, and Unclear.

Runs reason on the filled cell as **breadth of AIHR reach within HR**. That matches the relevance SOP and the actual cell contents. The header and dropdown were not rewritten, because the workbook is Max's file and stays as he sent it.

`v1-archived/accounts-in-scope.md` is the retired V1 account table. It is a different list and must not be used for V2 ownership or relevance.
