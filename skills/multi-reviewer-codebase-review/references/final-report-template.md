# Final Report Template

Use this template after reviewer outputs return. The Final Report must be self-contained: it should include scope, dispatch evidence, reviewer output summaries, conflict resolution, cross-review analysis, synthesis, and validation notes without relying on previous messages.

Print the complete Final Report in chat. A persisted copy in an artifact, memory file, or scratch file is allowed, but it must not replace, shorten, or be the only location for the inline Final Report.

Repeat the `[REVIEWER_ROLE]` block once per selected reviewer role. Preserve reviewer finding IDs. Do not include this instruction in the rendered Final Report.

Before printing, run a final preflight and revise internally until all checks pass:

- No unresolved template placeholders, bracket placeholders, or internal citation tokens remain.
- No partial-progress commentary, wait messages, or pre-validation reviewer summaries appear.
- No artifact path, memory/brain link, or "see full report in file" message replaces or shortens any required inline section.
- Evidence uses repo-relative full paths when basenames are ambiguous.
- Rejected findings appear only in Conflict Resolution, Reviewer Output Summaries, or Validation Notes, not as live Synthesis defects.
- Verification Log cells contain exact source-supported facts, not generic statuses.
- External current-state defects include official primary-source URLs.
- Tables remain readable. Keep table cells concise; put detailed reasoning in Cross-Reviewer Insights, Conflict Resolution, or Validation Notes instead of adding new sections.
- Validation Notes summarize decisions already detailed in Conflict Resolution. Do not repeat full reasoning.

```markdown
## Final Report

### Review Scope
- Target: [PATHS_OR_COMPONENTS]
- Out of scope: [BOUNDARIES]
- Review context: [TASK_SCOPE_REPOSITORY_CONTEXT]
- Evidence scope: [FILES_COMMANDS_LOGS_URLS]
- Verification packet: [CURRENT_TIME_FRESHNESS_CATEGORIES_REQUIRED_PRIMARY_SOURCES]
- Reviewer roles: [SELECTED_REVIEWER_ROLES]

### Dispatch Evidence
| Reviewer Role | Dispatch Mode | Tool | Identifier | Status |
|---|---|---|---|---|
| [REVIEWER_ROLE] | [PARALLEL|SEQUENTIAL] | [TOOL] | [ID] | [RETURNED] |

### Reviewer Output Summaries

#### [REVIEWER_ROLE]
- Evidence inspected: [PATHS_COMMANDS_URLS]
- Deep investigation focus: [NARROW_DEEP_FOCUS]
- Findings: [ID -> Severity -> Confidence -> Evidence -> Finding]
- Verification log: [CLAIM] -> [LOCAL_EVIDENCE] -> [PRIMARY_SOURCE_URL_OR_N/A] -> [CHECKED_AT] -> [SOURCE_SUPPORTED_RESULT]
- Inferences: [INFERENCE -> SUPPORTING_EVIDENCE_OR_N/A]
- Reviewer self-check: [PASSED_OR_FAILED_WITH_REASON]
- Open questions: [QUESTIONS]

### Conflict Resolution
| Item | Reviewer Finding IDs | Conflict or Validation Issue | Decision | Evidence |
|---|---|---|---|---|
| [ITEM] | [IDS] | [CONFLICT_SOURCE_RESULT_MISMATCH_TARGETED_AUDIT_OR_N/A] | [KEEP|MERGE|DOWNGRADE|REJECT|QUESTION] | [LOCAL_EVIDENCE_AND_PRIMARY_SOURCE_URL_OR_N/A] |

### Cross-Reviewer Insights
- Root cause clusters: [CLUSTER -> FINDING_IDS -> SHARED_CAUSE]
- Missing links connected: [LINK -> FINDING_IDS -> WHY_IT_MATTERS]
- System-level risks: [RISK -> SUPPORTING_FINDING_IDS -> IMPACT]
- Compensating controls or gaps: [CONTROL_OR_GAP -> SUPPORTING_EVIDENCE]

### Synthesis
| Priority | Finding IDs | Synthesized Finding | Severity | Confidence | Evidence | Verification Log | Action | Trade-off |
|---|---|---|---|---|---|---|---|---|
| [P0|P1|P2|P3] | [REVIEWER_FINDING_IDS] | [ROOT_CAUSE_OR_CONTROL_GAP_NOT_RAW_REPETITION] | [LEVEL] | [LEVEL] | [REPO_RELATIVE_PATHS_OR_COMMANDS_OR_URLS] | [CLAIM] -> [LOCAL_EVIDENCE] -> [PRIMARY_SOURCE_URL_OR_N/A] -> [CHECKED_AT] -> [SOURCE_SUPPORTED_RESULT] | [ACTION] | [TRADE_OFF] |

### Validation Notes
- Rejected findings: [FINDING_ID -> SHORT_REASON_OR_N/A]
- Downgraded findings: [FINDING_ID -> SHORT_REASON_OR_N/A]
- Unverified claims kept as questions: [CLAIM -> REASON_OR_N/A]
- Targeted checks performed by main agent: [CLAIM_OR_FINDING -> REASON_FOR_CHECK -> SOURCE_OR_COMMAND -> RESULT_OR_N/A]

### Final Conclusion
[CONCLUSION_WITH_PRIORITIZED_INSIGHTS_NOT_A_RELISTING]
```
