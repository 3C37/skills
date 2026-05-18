# Examples & Patterns

Concrete examples of documentation clarity principles.

## 1. Eliminating Filler & Decorative Language

### Before (Conversational & Wordy)
"It is very important to make sure that you always check the database connection before you try to run any queries. If you don't do this, it might cause the application to crash unexpectedly."

### After (Concise & Direct)
"Verify database connection before executing queries to prevent application crashes."

---

## 2. Modularizing Reference Content

### Before (Bloated SKILL.md)
"Follow these steps: 1. Setup, 2. Run. Here is a list of all 50 possible error codes you might see: [Long list...]. Also, here are the historical reasons why we use this specific library: [Long explanation...]"

### After (Modular)
"Follow the core workflow: [Setup -> Run]. 
- For error code definitions, see [ERRORS.md](references/errors.md).
- For historical context, see [ARCHITECTURE_DECISIONS.md](references/decisions.md)."

---

## 3. Resolving Conflicts

### Before (Ambiguous)
"Rule A: Always use JSON. Rule B: Use XML for legacy systems." (Which one wins for a new feature in a legacy system?)

### After (Explicit)
"Standard: Use JSON for all new features.
Exception: Use XML only when integrating with legacy modules documented in [LEGACY.md]."
