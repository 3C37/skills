# Hallucination Red Flags (Detection)

## 1. Pattern Audit
- **Temporal Overconfidence:** Use of "latest", "current", "stable", "up-to-date".
- **Version Specifics:** Major version claims (e.g., "Node 18 is LTS").
- **Absence Claims:** "X not supported", "Y doesn't exist", "feature unavailable".
- **Volatile Facts:** Pricing, token limits, survey data, recent world events.

## 2. Cognitive Audit (Anti-Bias)
- **Certainty Risk:** Treat the feeling of "I am sure I know this" as a high-risk signal if the fact is temporal.
- **Identity Hallucination:** Internal knowledge of model version, cutoff, or capabilities is often inaccurate. Never claim these as fact without verification.
- **Outdated Best Practices:** Beware of recommending legacy patterns as current standards (e.g., Bootstrap 4, React Class Components).
