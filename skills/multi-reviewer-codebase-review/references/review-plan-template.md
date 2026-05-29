# Review Plan Template

Use this template before reviewer dispatch. The Review Plan must be self-contained: it should define scope, available tools, dispatch availability, verification packet, and one complete Reviewer Definition block per selected role.

Repeat the `[REVIEWER_ROLE]` block once per selected reviewer role. Do not include this instruction in the rendered Review Plan.

Build this plan before creating any reviewer subagent. If the runtime can continue tool calls after user-facing text, print it before dispatch; otherwise keep it internal and print it as the first block of the final response. Never return only this plan when dispatch is available. Immediately dispatch reviewers unless dispatch is unavailable or the user explicitly requested an approval gate. Use repo-relative full paths for evidence scope entries; do not use ambiguous basenames when multiple files share the same name.

```markdown
## Review Plan

### Review Scope
- Target: [PATHS_OR_COMPONENTS]
- Out of scope: [BOUNDARIES]
- Review context: [TASK_SCOPE_REPOSITORY_CONTEXT]
- Evidence scope: [FILES_COMMANDS_LOGS_URLS]
- Verification packet: [CURRENT_TIME_FRESHNESS_CATEGORIES_REQUIRED_PRIMARY_SOURCES]

### Available Codebase Search Tools
| Tool | Status | How Checked |
|---|---|---|
| [TOOL] | [AVAILABLE|UNAVAILABLE] | [COMMAND_OR_METHOD] |

### Dispatch Readiness
- Dispatch tool: [TOOL_NAME_OR_N/A_WITH_REASON]
- Dispatch mode: [PARALLEL|SEQUENTIAL|BLOCKED]
- Dispatch status: [READY_TO_DISPATCH_NOW|BLOCKED_WITH_REASON]
- Plan delivery: [PRINTED_BEFORE_DISPATCH|DEFERRED_TO_FINAL_RESPONSE]
- Next action: [DISPATCH_SELECTED_REVIEWERS_NOW|STOP_WITH_BLOCKED_REASON]
- Role selection check: [WHY_THE_SELECTED_ROLES_MATCH_THE_TASK_AND_CI_CD_FOUR_ROLE_RULE_OR_N/A]

### Reviewer Definitions

#### [REVIEWER_ROLE]
- Review lens: [LENS]
- Responsibility: [RESPONSIBILITY]
- Decision scope: [DECISION_SCOPE]
- Primary codebase search tools: [TOOLS]
- Primary evidence: [EVIDENCE]
- Deep investigation focus: [NARROW_DEEP_FOCUS]
- Primary questions: [QUESTIONS]
- Evidence standard: [MINIMUM_PROOF]
- Out of scope: [BOUNDARY]
```
