# ADR-011 — Brand Color System (Logo Colors)

## Status

Accepted

## Decision

Neurolinx brand colors are locked to the official logo palette:

| Role | Hex | Usage |
| --- | --- | --- |
| Brand charcoal | `#4c4d4d` | Structure, secondary surfaces, typography authority |
| Brand red | `#cd2027` | Primary actions, accents, key brand emphasis |

The previous provisional **navy / teal** engineering palette is **superseded** for product UI.

## Context

Stakeholders confirmed logo colors. Design docs previously marked brand hex as TBD and used a provisional navy/steel/teal system to unblock engineering.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Keep navy/teal as primary | Conflicts with real brand identity |
| Red-only without charcoal neutrals | Weak structure; poor industrial credibility |
| Bright neon red treatments | Violates premium/enterprise motion rules |

## Reason

Brand identity must match the logo. Charcoal provides industrial credibility; red provides decisive CTAs without purple/teal clichés.

## Consequences

- Update [12_COLOR_SYSTEM.md](../12_COLOR_SYSTEM.md) and frontend tokens.
- Primary buttons, links, and focus treatments use the red scale.
- Error/status red remains semantically related but tokenized separately so status ≠ brand decoration everywhere.
- Dark theme uses deep charcoal surfaces with red accents (not a naive invert).

## Related

- [10_BRAND_GUIDELINES.md](../10_BRAND_GUIDELINES.md)
- [12_COLOR_SYSTEM.md](../12_COLOR_SYSTEM.md)
