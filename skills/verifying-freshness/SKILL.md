---
name: verifying-freshness
description: Verifies the freshness of real-time information and prevents hallucinations. Mandates external search for events within the last 24-48 hours, versions, pricing, and temporal claims like 'now', 'today', or 'latest'.
version: 1.0.0
author: 3C37
---

# Verifying Freshness & Hallucination Prevention

## Zero-Trust Workflow

1. **Trigger:** Detect signal words (latest, current, today, recently, since, version, pricing).
2. **Evaluate:** Run `scripts/getting-current-time.cjs` to anchor current time.
3. **Analyze:** Consult `references/red_flags.md` for cognitive and pattern audits.
4. **Verify:** Apply Zero-Trust heuristics in `references/verification.md`. **Mandatory search** for events within last **48 hours**.
5. **Report:** Use template in `references/verification.md`.

## Tools & Resources

- **Time Check:** `node scripts/getting-current-time.cjs`
- **Audit:** Read `references/red_flags.md`
- **Heuristics:** Read `references/verification.md`
