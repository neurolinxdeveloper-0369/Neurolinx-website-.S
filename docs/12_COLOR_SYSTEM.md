# 12 — Color System

## Purpose

Define the Neurolinx color system: logo-based brand palette, CSS variable names, light + dark themes, semantic colors, and accessibility contrast notes.

**Status:** Brand colors **confirmed** from official logo.

**Logo colors:** `#4c4d4d` (charcoal) · `#cd2027` (red)

**Related docs:** [10_BRAND_GUIDELINES.md](./10_BRAND_GUIDELINES.md) · [11_DESIGN_SYSTEM.md](./11_DESIGN_SYSTEM.md) · [ADR-011-BRAND-COLORS.md](./ADR/ADR-011-BRAND-COLORS.md) · [101_ACCESSIBILITY.md](./101_ACCESSIBILITY.md)

---

## Design intent

| Prefer | Avoid |
| --- | --- |
| Charcoal structure + decisive red accent | Purple-on-white / indigo gradient clichés |
| Light-primary surfaces with crisp type | Cream + terracotta “AI default” look |
| Industrial precision | Neon glow / gaming red treatments |
| Premium dark theme (optional toggle) | Dark-mode-first as sole identity |

---

## Primitive palette

### Charcoal (logo `#4c4d4d` — authority / structure)

| Token | Value | Usage |
| --- | --- | --- |
| `--nl-color-charcoal-950` | `#141414` | Darkest surfaces |
| `--nl-color-charcoal-900` | `#1f1f1f` | Inverse / dark page |
| `--nl-color-charcoal-800` | `#2e2e2e` | Elevated dark surfaces |
| `--nl-color-charcoal-700` | `#4c4d4d` | **Logo charcoal** — primary text / chrome |
| `--nl-color-charcoal-600` | `#636464` | Secondary text |
| `--nl-color-charcoal-500` | `#7a7b7b` | Muted / icons |
| `--nl-color-charcoal-400` | `#949595` | Placeholders |
| `--nl-color-charcoal-300` | `#b0b1b1` | Strong borders |
| `--nl-color-charcoal-200` | `#d0d1d1` | Default borders |
| `--nl-color-charcoal-100` | `#e8e8e8` | Dividers / washes |
| `--nl-color-charcoal-50` | `#f5f5f5` | Muted panels |

### Red (logo `#cd2027` — action / brand accent)

| Token | Value | Usage |
| --- | --- | --- |
| `--nl-color-red-900` | `#7a1014` | Pressed / dark emphasis |
| `--nl-color-red-800` | `#a0181e` | Primary hover |
| `--nl-color-red-700` | `#cd2027` | **Logo red** — primary action |
| `--nl-color-red-600` | `#e02a31` | Bright hover (dark theme) |
| `--nl-color-red-500` | `#e84a50` | Highlights |
| `--nl-color-red-100` | `#fce8e9` | Soft selected / tint |
| `--nl-color-red-50` | `#fdf2f2` | Tint surfaces |

### Supporting neutrals

| Token | Value | Usage |
| --- | --- | --- |
| `--nl-color-white` | `#ffffff` | Elevated surfaces |
| `--nl-color-black` | `#0a0a0a` | Rare absolute black |
| `--nl-color-focus` | `#cd2027` | Focus ring (with offset) |

---

## Semantic tokens

### Light theme (`:root`)

| Token | Maps to | Purpose |
| --- | --- | --- |
| `--nl-color-bg-page` | `#f7f7f7` | Page background |
| `--nl-color-bg-elevated` | `var(--nl-color-white)` | Elevated surfaces |
| `--nl-color-bg-muted` | `var(--nl-color-charcoal-50)` | Muted sections |
| `--nl-color-bg-inverse` | `var(--nl-color-charcoal-700)` | Inverse bands / footers |
| `--nl-color-text-primary` | `var(--nl-color-charcoal-700)` | Body/headings |
| `--nl-color-text-secondary` | `var(--nl-color-charcoal-600)` | Supporting copy |
| `--nl-color-text-muted` | `var(--nl-color-charcoal-500)` | Meta |
| `--nl-color-text-inverse` | `#f7f7f7` | On inverse |
| `--nl-color-border-subtle` | `var(--nl-color-charcoal-200)` | Default borders |
| `--nl-color-border-strong` | `var(--nl-color-charcoal-300)` | Emphasized borders |
| `--nl-color-action-primary` | `var(--nl-color-red-700)` | Primary CTA fill |
| `--nl-color-action-primary-hover` | `var(--nl-color-red-800)` | Hover |
| `--nl-color-action-primary-text` | `#ffffff` | Text on primary |
| `--nl-color-action-secondary-border` | `var(--nl-color-charcoal-700)` | Secondary outline |
| `--nl-color-link` | `var(--nl-color-red-800)` | Inline links |
| `--nl-color-focus-ring` | `var(--nl-color-focus)` | `:focus-visible` |

### Dark theme (`[data-theme="dark"]`)

| Token | Value |
| --- | --- |
| `--nl-color-bg-page` | `#141414` |
| `--nl-color-bg-elevated` | `#1f1f1f` |
| `--nl-color-bg-muted` | `#2e2e2e` |
| `--nl-color-bg-inverse` | `#f5f5f5` |
| `--nl-color-text-primary` | `#f0f0f0` |
| `--nl-color-text-secondary` | `#c4c4c4` |
| `--nl-color-text-muted` | `#9a9a9a` |
| `--nl-color-text-inverse` | `#1f1f1f` |
| `--nl-color-border-subtle` | `#3a3a3a` |
| `--nl-color-border-strong` | `#525252` |
| `--nl-color-action-primary` | `var(--nl-color-red-700)` |
| `--nl-color-action-primary-hover` | `var(--nl-color-red-600)` |
| `--nl-color-link` | `var(--nl-color-red-500)` |
| `--nl-color-focus-ring` | `var(--nl-color-red-500)` |

---

## Semantic status colors

| Token | Light value | Usage |
| --- | --- | --- |
| `--nl-color-success` | `#1f7a4c` | Success text/icon |
| `--nl-color-success-bg` | `#e6f5ed` | Success surface |
| `--nl-color-warning` | `#9a6b12` | Warning text/icon |
| `--nl-color-warning-bg` | `#fff6e5` | Warning surface |
| `--nl-color-error` | `#b42318` | Error text/icon (distinct from logo red usage) |
| `--nl-color-error-bg` | `#fdeceb` | Error surface |
| `--nl-color-info` | `#1769a5` | Info text/icon |
| `--nl-color-info-bg` | `#e7f3fb` | Info surface |

Brand red is for **actions and brand emphasis**. Form/validation errors use `--nl-color-error*` so status is not confused with marketing CTAs when both appear.

---

## Accessibility & contrast

| Pairing | Requirement |
| --- | --- |
| `text-primary` (`#4c4d4d`) on `bg-page` | WCAG AA ≥ 4.5:1 |
| `action-primary-text` on `action-primary` (`#cd2027`) | ≥ 4.5:1 (white on logo red) |
| Focus ring | 2px+ offset; visible on light and dark |
| Charts / 3D | Never encode critical info by color alone |

---

## Functional requirements

| ID | Requirement |
| --- | --- |
| COL-F-01 | All UI colors reference semantic CSS variables. |
| COL-F-02 | Theme switch remaps semantic tokens only. |
| COL-F-03 | Logo charcoal `#4c4d4d` and red `#cd2027` are the brand primitives. |

## Constraints

- Do not hard-code competing palettes per page.
- Do not reintroduce teal/navy as primary brand colors.
- Do not use neon/glow treatments on red accents.

## Acceptance criteria

- [x] Token sheet committed and imported.
- [x] Brand logo colors locked via ADR-011.
- [ ] Contrast verified in implementation QA.

---

## Summary

Neurolinx uses **charcoal `#4c4d4d` + red `#cd2027`** as the logo-based industrial system, with light-primary semantics, a premium dark theme, and separate status colors. See [ADR-011-BRAND-COLORS.md](./ADR/ADR-011-BRAND-COLORS.md).
