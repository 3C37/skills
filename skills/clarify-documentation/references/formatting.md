# Formatting & Structure

Agent-optimized documentation standards.

## 1. Placeholder Standards
Standardize variable inputs to prevent parsing ambiguity.
- **Standard**: `[UPPER_SNAKE_CASE]` (e.g., `[PROJECT_ROOT]`, `[API_KEY]`)
- **Avoid**: `<variable>`, `{variable}`, or `variable`.

## 2. Context Anchoring
Specify environment or technical scope at the start of files or sections.
- **Syntax**: `Context: [ENVIRONMENT] | [VERSION]`
- **Example**: `Context: React 18+ | Node.js 20 | TypeScript`

## 3. Visual Parsability
Use structural elements over prose to increase parsing speed and accuracy.
- **Decision Tables**: Use for complex conditional logic.
- **Task Lists**: Use for actionable sequences.
- **Nested Lists**: Use for hierarchical dependencies.

## 4. Constraint Weighting
Use consistent prefixes for mandates vs. preferences.
- **Mandate**: `[MUST]` or `[SHALL]`
- **Preference**: `[SHOULD]` or `[PREFER]`
- **Option**: `[MAY]` or `[OPTIONAL]`

## 5. Planning & Roadmap Structure
Standardize status and dependencies for actionable artifacts.
- **Status Tags**: Use fixed-vocabulary tags: `[TODO]`, `[IN_PROGRESS]`, `[DONE]`, `[BLOCKED]`, `[CANCELLED]`.
- **Dependency Mapping**: Explicitly link related tasks using `Depends on: [TASK_ID]`.
- **Milestone Definition**: Group tasks under clear, outcome-based milestones.
