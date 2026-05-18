---
name: clarify-documentation
description: Guidelines for optimizing all AI-facing documentation and project artifacts (SKILLS, AGENTS, PLAN, ROADMAP, PRD). Use when writing, reviewing, or auditing instructions, specifications, and plans to eliminate conversational filler, ensure domain precision, and maximize signal-to-noise ratio for AI agent efficiency.
author: 3C37
version: 1.0.0
---

# Clarify Documentation

AI agent documentation and planning optimization guidelines.

## Core Principles

1.  **English Only**: Maintain consistency and prevent ambiguity via exclusive English usage.
2.  **Concise & Direct**: Eliminate decorative language, preambles, and conversational filler.
3.  **Modular Architecture**: Maintain lean core files. Relocate specifications, edge cases, and lists to `references/`.
4.  **Deduplication**: Merge redundant instructions into a single authoritative source.
5.  **Conflict Resolution**: Define precedence or exception cases for overlapping rules.
6.  **Domain Precision**: Prioritize field-specific technical terminology over generic descriptions.
7.  **Instruction Weighting**: Explicitly distinguish mandates (Must) from preferences (Should).
8.  **Structural Integrity**: Use standardized placeholders and visual elements (Tables/Lists).
9.  **Systematic Consistency**: Apply clarity standards across all project artifacts (Plans, Roadmaps, Specs) to ensure a unified agent-optimized workspace.


## Writing Workflow

1.  **Draft**: Define core procedural steps.
2.  **Sift**: Relocate reference material (lists, schemas, context) to `references/`.
3.  **Surgical Edit**: Remove non-functional phrases (e.g., "Note that," "Try to," or soft imperatives like "Ensure").
4.  **Format**: Apply standard placeholders and anchors from `references/formatting.md`.
5.  **Verify**: Confirm consistent and accurate use of technical terms and weighting.

## Reference Materials

- **[Examples & Patterns](references/patterns.md)**: Before/After clarity comparisons.
- **[Domain Terminology](references/terminology.md)**: Precise terms and weighting definitions.
- **[Formatting & Structure](references/formatting.md)**: Standards for placeholders, anchors, and visual structure.

