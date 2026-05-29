# Reviewer Role Catalog

Use this file to select reviewer roles. It is a role-selection catalog, not a complete Review Plan. Expand each selected role into a complete Reviewer Definition block using the task scope, repository evidence, and the rules below.

## Selection Rules

- Default count: three task-relevant reviewer roles from the catalog. Do not use a fixed default trio when the task clearly needs different expertise.
- Add one extra reviewer role only when that role owns a material cross-functional risk.
- Use five or more reviewer roles only when the user explicitly requests that count.
- Use custom reviewer roles only when the user explicitly names them.
- For CI/CD or deployment reviews, use SRE / DevOps Engineer, QA Engineer, and Lead Developer. Add Security Engineer as a fourth role when secrets, signing, permissions, or supply-chain risk is material. Do not omit Lead Developer from CI/CD or deployment reviews unless the user explicitly excludes it.

## Role Expansion Rules

For each selected role, define these fields in the Review Plan:

- Decision scope: Claims the reviewer may judge. Keep it inside the role focus and target scope.
- Primary evidence: Files, directories, commands, or URLs the reviewer must inspect first. Use only known or discoverable evidence.
- Evidence standard: Minimum proof required for a finding, such as `PATH:LINE`, command output, official URL, or reproducible failure path.
- Out of scope: Claims, files, or decisions the reviewer must not review.

Do not invent primary evidence, tools, or boundaries. If the repository does not reveal them during preparation, write `N/A` with a reason or keep the item as an open question.

## Reviewer Roles

| Reviewer Role | Use When | Review Lens | Default Decision Scope |
|---|---|---|---|
| Lead Developer | Implementation, refactor, feature, bugfix, API, code quality | Correctness, maintainability, edge cases, integration seams, testability | Code behavior, maintainability, local integration, and implementation risk |
| QA Engineer | Test strategy, release readiness, regression risk, unclear acceptance criteria | Coverage gaps, negative paths, flaky tests, fixtures, reproducibility | Test adequacy, quality gates, regression risk, and release readiness |
| Software Architect | Architecture, system boundaries, data flow, scalability, platform choices | Coupling, cohesion, extensibility, resilience, trade-offs | System structure, boundaries, dependency flow, and architectural trade-offs |
| Security Engineer | Auth, permissions, secrets, network boundaries, untrusted input, dependencies | Threat model, abuse paths, privilege boundaries, secure defaults, vulnerability evidence | Security controls, trust boundaries, secrets handling, and vulnerability evidence |
| SRE / DevOps Engineer | CI/CD, deployment, observability, runtime, migrations, reliability | Build determinism, rollback, monitoring, failure modes, operational toil | Delivery reliability, runtime operations, deploy safety, and recovery paths |
| Product Manager | User-facing behavior, prioritization, roadmap fit, requirements ambiguity | User impact, scope, success metrics, trade-offs, sequencing | Product impact, prioritization, scope fit, and success criteria |
| Product Owner | Acceptance criteria, domain rules, workflow completeness, release scope | Requirement gaps, business rules, user journeys, definition of done | Acceptance criteria, domain correctness, workflow completeness, and release scope |
| Performance Engineer | Latency, throughput, memory, concurrency, data volume, cost hot spots | Bottlenecks, measurement quality, complexity, resource use, scaling limits | Performance risk, measurement validity, resource use, and scalability constraints |
| Data Engineer | ETL, analytics, schema changes, data quality, migrations | Data contracts, lineage, consistency, backfills, idempotency, observability | Data correctness, contracts, migration safety, lineage, and operational data quality |
| Accessibility Engineer | UI, interaction, design system, frontend changes | Keyboard flow, semantics, contrast, screen reader behavior, inclusive UX | Accessibility behavior, semantic structure, keyboard interaction, and inclusive UX risk |
