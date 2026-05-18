# Verification Heuristics (Zero-Trust)

## 1. Zero-Trust Policy
- **48-Hour Rule:** If query concerns events/status within last **48 hours**, assume internal knowledge is STALE.
- **Search Mandatory:** Use **External Search** or **Source of Truth (SoT)** for all time-sensitive or "latest" claims.
- **No-Absence Rule:** Never state an event "has not occurred" without verifying via external tools.

## 2. Implementation Tactics
Prioritize **Source of Truth (SoT)** and high-efficiency tools over general search:
- **Software:** Check package registries (npm, PyPI), GitHub API/CLI, or official docs.
  - *API:* `curl -s https://api.github.com/repos/[owner]/[repo]/releases/latest | jq -r .tag_name`
  - *CLI:* `gh release view -R [owner]/[repo] --json tagName`
  - *Local:* `npm outdated`, `bundle outdated`, `flutter pub outdated`.
- **Services:** Check official status or pricing pages.
- **Events:** Check primary official organization statements.

## 3. Anti-Bias Protocol
- **Seek Disproof:** Actively search for sources that *contradict* internal knowledge.
- **Multi-Source:** Cross-reference ≥2 independent sources for high-stakes facts.
- **Verification Date:** Confirm search results post-date your suspected knowledge cutoff.

## Verification Template
- **Fact:** [Claim]
- **Source:** [URI/Tool]
- **Status:** [Confirmed/Corrected/Updated]
- **Note:** [Brief explanation]
