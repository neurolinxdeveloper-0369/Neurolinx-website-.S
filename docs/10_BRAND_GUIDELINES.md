# 10 — Brand Guidelines

## Purpose

Define Neurolinx brand personality, voice/tone, do/don't rules, and visual direction so designers and engineers ship a coherent **premium technology / engineering + e-commerce** experience.

**Related docs:** [00_PROJECT_VISION.md](./00_PROJECT_VISION.md) · [11_DESIGN_SYSTEM.md](./11_DESIGN_SYSTEM.md) · [12_COLOR_SYSTEM.md](./12_COLOR_SYSTEM.md) · [13_TYPOGRAPHY.md](./13_TYPOGRAPHY.md) · [17_IMAGE_GUIDELINES.md](./17_IMAGE_GUIDELINES.md) · [18_MOTION_DESIGN.md](./18_MOTION_DESIGN.md)

---

## Brand essence

**Corporate credibility + advanced technology + premium product design.**

Neurolinx should feel like a serious engineering company that also runs a refined product and commerce experience—not a startup landing page, not a consumer gadget store, and not a sci-fi demo.

---

## Brand personality

| Trait | Expression |
| --- | --- |
| Precise | Clear specs, disciplined layout, accurate claims |
| Confident | Direct headlines; no hype adjectives stacked |
| Innovative | Modern motion and 3D used purposefully |
| Reliable | Stable UX, readable typography, trustworthy CTAs |
| Industrial-tech | Charcoal/red brand materials, engineering photography, product truth |
| Premium | Quality materials in UI (spacing, type, imagery)—not luxury fashion cues |

---

## Voice and tone

### Voice (constant)

- Expert but accessible.
- Specific over vague.
- Calm authority; no exaggeration.

### Tone (situational)

| Context | Tone |
| --- | --- |
| Corporate / About | Formal, credible, concise |
| Product / PDP | Informative, specification-forward |
| Shop / checkout | Clear, reassuring, efficient |
| Error / empty states | Helpful, non-blaming |
| Admin | Operational, dense-but-scannable |

### Writing do / don't

| Do | Don't |
| --- | --- |
| Use concrete nouns (sensor, gateway, enclosure) | Use empty hype (“revolutionary,” “next-gen” without proof) |
| Prefer short sentences | Stack buzzwords (AI/IoT/synergy) |
| State benefits with evidence | Invent certifications or metrics |
| Use active voice | Overpromise SLAs or capabilities |

**Legal/marketing claims:** only approved copy. Unverified claims = **TBD / blocked**.

---

## Visual direction

### Desired look

- Premium, modern, professional, enterprise-grade, technology-focused.
- Clean surfaces with atmospheric depth (subtle gradients, materials, photography)—not flat monochrome slabs.
- Light-primary theme with optional dark mode ([12_COLOR_SYSTEM.md](./12_COLOR_SYSTEM.md)).
- Industrial palette: charcoal `#4c4d4d` + red `#cd2027` (logo-confirmed; see [ADR-011](./ADR/ADR-011-BRAND-COLORS.md)).

### Avoid

- Excessive futuristic neon, heavy glow, particle spam.
- Purple-on-white / indigo gradient clichés.
- Warm cream + terracotta “AI default” aesthetics.
- Dark-mode-first as the only identity.
- Dashboard clutter on marketing heroes.
- Decorative cards everywhere; cards only when they aid interaction.

### Composition rules (marketing surfaces)

1. **One composition** in the first viewport.
2. **Brand first**—product/company name as hero-level signal.
3. **Hero budget:** brand, one headline, one supporting sentence, one CTA group, one dominant visual.
4. **Full-bleed hero** by default on landing/promotional pages.
5. **No hero overlays:** no floating badges, chips, or sticker callouts on hero media.
6. **One job per section.**

---

## Logo and wordmark

| Topic | Guidance |
| --- | --- |
| Clear space | Maintain padding relative to logo height—exact multiples **TBD** with final logo kit |
| Minimum size | **TBD** from brand kit |
| Backgrounds | Prefer contrast-safe placements; use approved mono/reversed versions |
| Misuse | No stretch, recolor outside tokens, drop shadows, or effects |

If logo files/guidelines are incomplete, treat final lockups as **TBD** and use provisional wordmark styling via type tokens only.

---

## Photography & product presentation

Align with [17_IMAGE_GUIDELINES.md](./17_IMAGE_GUIDELINES.md):

- Prefer original Neurolinx photography and authentic engineering context.
- Product imagery should communicate materials, scale, and craftsmanship.
- Avoid generic stock when authentic assets exist.

---

## Motion personality

Motion is **presence and hierarchy**, not spectacle.

- Intentional, short, physics-light transitions.
- Respect `prefers-reduced-motion`.
- See [18_MOTION_DESIGN.md](./18_MOTION_DESIGN.md) and [19_MOUSE_INTERACTIONS.md](./19_MOUSE_INTERACTIONS.md).

---

## Functional requirements

| ID | Requirement |
| --- | --- |
| BRAND-F-01 | All public UI copy and visuals comply with these guidelines. |
| BRAND-F-02 | Design QA includes brand checklist for new pages. |

## Non-functional requirements

| ID | Requirement |
| --- | --- |
| BRAND-N-01 | Brand system remains implementable via design tokens—not one-off styles. |
| BRAND-N-02 | Accessibility and readability outrank decorative flourish. |

## Dependencies

- Final logo kit, photography library, approved messaging—**TBD** completeness.
- Color confirmation before production brand lock ([12_COLOR_SYSTEM.md](./12_COLOR_SYSTEM.md)).

## Constraints

- Do not invent taglines, slogans, or claim lines.
- Do not ship unapproved partner/certification marks.

## Acceptance criteria

- [ ] Marketing pages pass brand composition checklist.
- [ ] Tone samples reviewed by marketing stakeholder.
- [ ] Visual direction reflected in design system tokens and components.

---

## Brand checklist (quick)

- [ ] Could this first viewport belong to another brand if the nav were removed? If yes, branding is too weak.
- [ ] Is motion helping hierarchy or adding noise?
- [ ] Are claims evidenced and approved?
- [ ] Are colors/type from tokens?

---

## Summary

Neurolinx brand guidelines lock a **precise, premium industrial-tech** identity: credible corporate voice, disciplined visuals, purposeful motion, and authentic product imagery—without futuristic excess or AI-cliché aesthetics.
