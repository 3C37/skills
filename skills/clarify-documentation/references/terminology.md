# Domain Terminology

Precise technical terms for agent documentation.

| Generic / Conversational | Precise / Technical | Context |
| :--- | :--- | :--- |
| "Do the same thing twice without side effects" | **Idempotent** | API / State operations |
| "Make it look the same everywhere" | **Normalized** | Schemas / Formatting |
| "A way to handle things later" | **Asynchronous** | Processing |
| "Hidden from the user" | **Abstracted** / **Encapsulated** | Code architecture |
| "Works even if parts break" | **Resilient** | System design |
| "Changing code without changing behavior" | **Refactoring** | Development |
| "The starting point" | **Baseline** / **Entry point** | Workflow |
| "Only what is needed" | **Minimal viable** / **Surgical** | Scope |

## Instruction Weighting

| Term | Definition | Agent Impact |
| :--- | :--- | :--- |
| **MUST** / **SHALL** | Mandatory requirement. | Non-negotiable; violation is a failure. |
| **SHOULD** / **PREFER** | Recommended practice. | Default behavior; adapt only with rationale. |
| **MAY** / **OPTIONAL** | Permitted action. | Discretionary; use based on specific context. |
| **NEVER** / **PROHIBIT** | Forbidden action. | Hard constraint; do not execute. |

## Prohibited Phrases (Filler)

- "It is important to note..." (State the fact directly)
- "Please make sure that..." (Use direct imperative: "Verify...", "Check...")
- "Ensure..." (Often redundant; use direct imperative)
- "In order to..." (Use "To...")
- "A variety of..." (Use "Multiple" or "Diverse")
- "Essentially..." / "Basically..." (Redundant)
- "I think..." / "It seems..." (Avoid subjectivity)
