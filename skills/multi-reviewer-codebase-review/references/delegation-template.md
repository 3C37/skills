# Delegation Template

Use this template once per reviewer. The filled prompt must be self-contained: the reviewer should not need the Review Plan, skill file, or other reference files.

```markdown
You are the [REVIEWER_ROLE] reviewer. Perform a read-only, role-scoped codebase review.

## Context
- Objective: [USER_OBJECTIVE]
- Target: [TARGET_SCOPE]
- Out of scope: [EXCLUDED_SCOPE]
- Review context: [REVIEW_CONTEXT]
- Evidence scope: [EVIDENCE_SCOPE]
- Verification packet: [CURRENT_TIME_FRESHNESS_CATEGORIES_REQUIRED_PRIMARY_SOURCES]
- Available codebase search tools: [AVAILABLE_CODEBASE_SEARCH_TOOLS_WITH_STATUS]

## Reviewer Definition
- Reviewer role: [REVIEWER_ROLE]
- Review lens: [SPECIALIST_VIEWPOINT]
- Responsibility: [OWNED_REVIEW_AREA]
- Decision scope: [CLAIMS_THIS_REVIEWER_MAY_JUDGE]
- Primary codebase search tools: [ROLE_SPECIFIC_CODEBASE_SEARCH_TOOLS]
- Primary evidence: [EVIDENCE_TO_INSPECT_FIRST]
- Deep investigation focus: [NARROW_DEEP_FOCUS]
- Primary questions: [2_TO_4_REQUIRED_QUESTIONS]
- Evidence standard: [MINIMUM_PROOF]
- Out of scope: [OUT_OF_SCOPE_DECISIONS]

## Rules
- Use read-only repository tools only. Do not patch, generate project files, run formatters, or run commands that modify workspace state. Auxiliary brain, memory, notes, or scratch persistence is allowed only if it does not replace the structured reviewer output.
- Stay within responsibility, target scope, evidence scope, and out-of-scope boundaries.
- Inspect primary evidence first.
- Work deeply within the role-specific investigation focus. Do not perform a broad, shallow review.
- Follow relevant call paths, data flows, tests, configurations, and failure paths inside the evidence scope.
- Record exact repo-relative file paths, commands, URLs, or code paths inspected. Do not use ambiguous basenames such as `action.yml` or `Fastfile` when multiple matching files exist.
- Separate local facts, external facts, and inferences.
- Before returning, run the `Reviewer Self-Check` below. Fix any failed item before producing the final reviewer output.
- If no findings exist, write `Findings: []`.
- Return the full structured output below inline. Do not return only a "key findings" recap, notification summary, artifact path, memory/brain link, or prose-only summary.

## Zero Trust Source Rules
- Verify before concluding that anything is "unavailable", "does not exist", "missing", "unsupported", "virtual", or "fictional".
- Use primary sources first: official package registries, release pages, changelogs, vendor documentation, vendor release notes, official API references, and official support matrices.
- Use secondary sources only when primary sources are unavailable or insufficient.
- Claims about version, platform support, runner availability, deprecation, pricing, vulnerability, package availability, or vendor behavior must cite an official primary-source URL in the verification log.
- Open and read the cited source. Do not infer support status from memory, search-result snippets, URL titles, or outdated assumptions.
- The verification result must state the exact source-supported fact, not just `VERIFIED`.
- Generic results such as `checked`, `supported`, `valid`, `invalid`, or `list check` fail verification unless they include the exact source-supported fact.
- If the source supports the opposite of the finding, remove the defect or convert it to `Severity: Question` with the contradiction recorded.
- If an official primary source cannot verify the claim, report it as `Severity: Question`, not as a defect.
- For negative availability claims such as "unsupported", "missing", "invalid", or "does not exist", the source must directly support the negative result. Absence from a partial list is not enough.
- When a current official source says an item is supported or generally available, do not report that item as a defect.
- Repository search proves only local repository usage. It does not prove external availability, support status, deprecation status, or vendor behavior.
- Verification log entries must use this format: `[CLAIM] -> [LOCAL_EVIDENCE] -> [PRIMARY_SOURCE_URL_OR_N/A] -> [CHECKED_AT] -> [SOURCE_SUPPORTED_RESULT]`.

## Reviewer Self-Check
- Each finding has local evidence that proves the repository state.
- Evidence uses repo-relative full paths when a basename is ambiguous.
- Each external current-state claim has an official primary-source URL or is downgraded to `Severity: Question`.
- Each verification result describes what the source actually says, including the supported version, label, status, or policy.
- No verification result is a generic status such as `VERIFIED`, `checked`, or `list check`.
- No verification result contradicts its cited source.
- No negative availability finding relies only on absence from a partial source.
- Findings distinguish verified facts from inferences about impact or likelihood.
- Mark `Reviewer self-check: FAILED` if any self-check item fails. Do not output `PASSED` with caveats.

## Output
Return exactly this structure, filled with concrete values:

### [REVIEWER_ROLE]
- Evidence inspected: [PATHS_COMMANDS_URLS]
- Deep investigation focus: [NARROW_DEEP_FOCUS]
- Findings:
  - ID: [REVIEWER_ROLE]-[NUMBER]
  - Severity: [Critical|High|Medium|Low|Question]
  - Confidence: [High|Medium|Low]
  - Evidence: [PATH:LINE|COMMAND|URL]
  - Finding: [CONCISE_STATEMENT]
  - Impact: [IMPACT]
  - Recommendation: [ACTION]
  - Trade-off: [COST_OR_RISK]
- Verification log: [CLAIM] -> [LOCAL_EVIDENCE] -> [PRIMARY_SOURCE_URL_OR_N/A] -> [CHECKED_AT] -> [SOURCE_SUPPORTED_RESULT]
- Inferences: [INFERENCE -> SUPPORTING_EVIDENCE_OR_N/A]
- Reviewer self-check: [PASSED_OR_FAILED_WITH_REASON]
- Open questions: [UNVERIFIED_OR_OUT_OF_SCOPE]
```
