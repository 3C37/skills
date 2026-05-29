---
name: multi-reviewer-codebase-review
description: Use when a user asks to review, audit, analyze, investigate, profile, or improve a software repository, codebase area, architecture, CI/CD pipeline, build system, deployment flow, security posture, dependency set, test coverage, performance risk, refactoring plan, or unfamiliar project.
author: 3C37
version: 1.0.0
---

# Multi-Reviewer Codebase Review

Run a read-only, persona-based repository review. Dispatch one independent reviewer subagent per selected role, use each reviewer as the owner of its evidence and verification log, then synthesize a cross-review analysis. The final answer must add judgment beyond concatenating reviewer outputs.

## Mandatory Rules

- Use read-only repository tools only. Do not patch, stage, commit, push, or modify the reviewed repository.
- Auxiliary persistence such as brain, memory, notes, scratch files, or report artifacts is allowed when useful for runtime continuity, but it must never replace, shorten, or be the only location for the required Review Plan and Final Report. Return the complete Review Plan and Final Report inline in chat.
- Print only two user-facing blocks: the Review Plan and the Final Report. Do not print delegation prompts, partial reviewer summaries, waiting commentary, or unvalidated findings.
- Do not narrate progress while preparing, dispatching, waiting, validating, or synthesizing. Tool calls are enough.
- Do not use scheduling, reminder, or artifact tools as a substitute for inline reporting. Any user-facing summary emitted by those tools does not count as the Review Plan, reviewer output, or Final Report.
- Use the templates in `references/` exactly. Each filled template must be self-contained. Replace every placeholder or write `N/A` with a reason.
- Dispatch one reviewer per selected role. Do not replace the reviewer set with one generic reviewer.
- Treat reviewer verification logs as the primary evidence record when they are complete and source-supported. Do not redo reviewer work by default.
- Main-agent validation checks structure, conflicts, and obvious source-result mismatches; subagents own detailed claim verification.
- Do not dispatch any reviewer before the Review Plan is complete and the Review Plan gate passes.
- In runtimes that allow tool calls after user-facing text, print the Review Plan before dispatch. In runtimes where user-facing text ends the turn, keep the Review Plan internal until the final response, then print it as the first block before the Final Report.
- Never return only the Review Plan when dispatch is available. The Review Plan is a checkpoint, not the final response. Continue immediately to Dispatch in the same turn/tool cycle.
- Do not ask the user for approval to dispatch unless the user explicitly requested an approval gate.
- Use repo-relative full paths for evidence. Do not use ambiguous basenames such as `action.yml` or `Fastfile` when multiple matching files exist.

## Workflow

### 1. Prepare

1. Identify available codebase search tools.
2. Identify available independent reviewer dispatch tools.
3. Scan only enough repository context to define target scope, evidence scope, and exclusions.
4. Build a shared verification packet: current time, freshness-sensitive claim categories, required primary-source types, and zero-trust source rules.
5. Select three task-relevant roles from `references/reviewer-roles.md`; add a fourth only for material cross-functional risk. For CI/CD or deployment reviews with secrets, signing, permissions, or supply-chain risk, select exactly these four roles unless the user specified roles: SRE / DevOps Engineer, QA Engineer, Lead Developer, Security Engineer.
6. Build the Review Plan using `references/review-plan-template.md`, then immediately continue to Dispatch. Print it before dispatch only when the runtime can continue tool calls after user-facing text; otherwise print it later as the first Final Report block.

Review Plan gate:

- Required template headings are present verbatim.
- Every selected role has a complete Reviewer Definition block.
- Available codebase search tools are listed with status and check method.
- Independent reviewer dispatch tool availability is listed with status, tool name, and intended dispatch mode.
- CI/CD or deployment reviews with material secrets, signing, permissions, or supply-chain risk include SRE / DevOps Engineer, QA Engineer, Lead Developer, and Security Engineer unless the user specified roles.
- Verification context includes the shared verification packet.
- No reviewer has been dispatched before the Review Plan is complete and this gate passes.
- The Review Plan states the next action is immediate dispatch, not waiting for user approval.

### 2. Dispatch

1. Load `references/delegation-template.md` only after the Review Plan gate passes. In interleaved runtimes this is after printing the Review Plan; in final-response-only runtimes this is after completing the internal Review Plan. Fill it once per reviewer.
2. Pass the same review context, evidence scope, verification packet, available codebase search tools, and complete `## Zero Trust Source Rules` section to every reviewer.
3. Give each reviewer a role-specific deep investigation focus.
4. Apply the Dispatch Availability Rules.
5. If the runtime supports tool calls after user-facing text, call the reviewer dispatch tool immediately after printing the Review Plan. Otherwise, dispatch after the gated internal Review Plan and print the Review Plan as the first block of the final response.

Delegation prompt gate:

- The filled reviewer prompt contains the complete `## Zero Trust Source Rules` section verbatim.
- The prompt includes the reviewer-specific scope, primary evidence, evidence standard, and out-of-scope boundaries.
- The prompt requires repo-relative full paths for inspected evidence and findings.
- If any required section is missing or paraphrased, fix the prompt before dispatch.

#### Dispatch Availability Rules

- If independent subagent dispatch is available, dispatch all reviewers in the same execution wave.
- If only sequential independent dispatch is available, dispatch reviewers sequentially and record `Dispatch Mode: SEQUENTIAL`.
- If no independent reviewer dispatch is available, print the Review Plan with `Dispatch Status: BLOCKED`, then stop with `BLOCKED: sub-agent dispatch unavailable`.
- If the only blocker is that user-facing text would end the turn, do not block. Use the internal-plan path: complete the Review Plan gate, dispatch reviewers, then print the Review Plan as the first block of the final response.
- Record one dispatch identifier per selected reviewer. A grouped dispatch is valid only if the tool returns a distinct identifier or result channel for every reviewer.
- Never simulate independent reviewers inside the main agent and call it dispatch.

### 3. Validate Reviewer Outputs

1. Verify dispatch evidence. If invalid, stop with `BLOCKED: sub-agent dispatch unavailable`.
2. Validate every reviewer output against `## Invalid Reviewer Output`.
3. Treat tool notifications, schedule summaries, "key findings" summaries, or truncated agent recaps as invalid reviewer output. Reviewer output must match the delegation template's `## Output` shape and include evidence inspected, finding fields, verification log, inferences, self-check, and open questions.
4. Request one retry for invalid output by asking that reviewer for the full structured output only. If still invalid, stop with `BLOCKED: invalid reviewer output`.
5. Build an evidence ledger from all findings: local evidence, external claims, source URLs, confidence, and reviewer IDs.
6. Perform targeted validation, not full re-verification. Re-check only claims with missing verification, reviewer disagreement, source-result mismatch, unsupported severity, or unclear local evidence.
7. Resolve conflicts before prioritizing. Conflicts include reviewer disagreement, source-result mismatch, unsupported severity, and local evidence that does not prove the stated impact. If a cited source supports the opposite result, reject or downgrade the finding and record the source-supported result.
8. Treat `Reviewer self-check: PASSED` as invalid when its verification log is vague, generic, source-unsupported, contradicted by the cited source, or absent from the full structured output.

### 4. Synthesize

1. Cluster duplicate or related findings by root cause, failure mode, or control gap. Do not merge mutually exclusive findings until conflict resolution decides which claims survive.
2. Connect missing links across reviewers: preconditions, downstream impact, shared dependencies, and compensating controls.
3. Derive insights only from combined evidence. Do not repeat reviewer findings as the only synthesis.
4. Treat repository search as proof of local repository usage only.
5. Treat unverified external current-state claims as questions, not defects.
6. Do not state claims more strongly than evidence supports.
7. Every synthesis row must cite reviewer finding IDs.
8. Load `references/final-report-template.md` only after reviewer outputs return. Draft the Final Report from that template.
9. Run the Final Report Preflight before printing. Revise internally until it passes.
10. Print exactly two blocks in chat: the complete Review Plan, then the complete Final Report. A persisted copy is allowed, but a file, memory entry, artifact, or link must never replace either inline block.

Final Report gate:

- Required template headings are present verbatim.
- Dispatch Evidence exists for every selected reviewer.
- The Final Report is printed completely in chat, whether or not a copy is also persisted.
- Reviewer output summaries preserve finding IDs, severity, confidence, evidence, verification logs, inferences, self-checks, and open questions before synthesis.
- Conflict Resolution records every rejected, downgraded, contradicted, or targeted-audit finding.
- Cross-Reviewer Insights contains at least one evidence-backed insight, or `N/A` with a reason when reviewers found no findings.
- Every synthesized finding cites reviewer finding IDs.
- External current-state claims cite official primary-source URLs in reviewer-owned verification logs.
- A finding is rejected or downgraded if targeted validation shows the cited source does not support the logged result.
- Evidence paths are repo-relative full paths when a basename is ambiguous.

Final Report Preflight:

- No unresolved placeholders remain, including bracket placeholders like `[SOURCE]`, internal citation tokens like `%JETSKI_CCI_70%`, or template alternatives like `P0/P1/P2`.
- No progress commentary, waiting status, or partial reviewer-result summary appears outside the required template sections.
- No artifact path, memory/brain link, or "see full report in file" replaces or shortens the required inline chat report.
- The chat response includes the complete Review Plan block before the Final Report block.
- No reviewer output summary was accepted from a tool notification, schedule summary, key-finding recap, or truncated agent recap.
- No verification result is only `VERIFIED`, `checked`, `supported`, or another generic status without the exact source-supported fact.
- No external current-state defect uses `N/A` as the primary-source URL.
- No synthesis row cites a rejected finding as a live defect.

## Invalid Reviewer Output

Reviewer output is invalid if any item is true:

- Missing reviewer role heading.
- Missing evidence inspected.
- Finding lacks ID, severity, confidence, evidence, impact, or recommendation.
- Finding omits trade-off or cost/risk.
- Finding cites no file, command, URL, or verification source.
- Output is only a notification, schedule summary, key-finding recap, truncated recap, or prose summary instead of the required structured reviewer output.
- Evidence uses only an ambiguous basename when multiple repo files share that basename.
- External current-state claim about version, platform support, runner availability, deprecation, pricing, vulnerability, package availability, or vendor behavior lacks an official primary-source URL.
- Verification result contradicts the cited primary source, overstates it, or uses an unread/irrelevant source.
- Verification result is generic rather than an exact source-supported fact, for example `VERIFIED`, `supported`, or `GitHub Actions supported runner list check`.
- Negative availability claims such as `unsupported`, `missing`, or `invalid` are stated as defects without a primary source that directly supports that negative result.
- Reviewer reviewed out-of-scope areas.
- Reviewer modified files or ran commands that modify workspace state.

## References

- `references/reviewer-roles.md`: Load during preparation to select roles.
- `references/review-plan-template.md`: Load during preparation to print the Review Plan.
- `references/delegation-template.md`: Load after the Review Plan gate passes, immediately before dispatch.
- `references/final-report-template.md`: Load only after reviewer outputs return.
