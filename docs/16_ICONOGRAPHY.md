# 16 — Iconography

## Purpose

Standardize icon usage for Neurolinx using **Lucide Icons** as the default icon set: sizing, stroke, alignment, and accessibility rules.

**Related docs:** [11_DESIGN_SYSTEM.md](./11_DESIGN_SYSTEM.md) · [15_COMPONENT_LIBRARY.md](./15_COMPONENT_LIBRARY.md) · [12_COLOR_SYSTEM.md](./12_COLOR_SYSTEM.md)

---

## Standard

| Decision | Choice |
| --- | --- |
| Library | [Lucide](https://lucide.dev) (`lucide-react`) |
| Style | Outline, consistent stroke |
| Custom icons | Only when Lucide lacks a needed metaphor; must match stroke/size |
| Emoji | Not used as UI icons |

---

## Why Lucide

- Tree-shakeable React components.
- Neutral, technical aesthetic fitting industrial brand.
- Broad coverage for commerce, admin, and media actions.

---

## Sizing scale

| Token | Px | Use |
| --- | --- | --- |
| `--nl-icon-xs` | 12 | Rare dense meta |
| `--nl-icon-sm` | 16 | Inline with sm text, table actions |
| `--nl-icon-md` | 20 | Default UI (buttons, inputs) |
| `--nl-icon-lg` | 24 | Nav, emphasized actions |
| `--nl-icon-xl` | 32 | Empty states (sparingly) |

Default interactive control icon: **20px**.  
Do not scale icons via random Tailwind sizes outside this scale.

---

## Stroke

| Token | Value |
| --- | --- |
| `--nl-icon-stroke` | `1.75` (default) |
| `--nl-icon-stroke-bold` | `2` (optional emphasis) |

Rules:

- Keep stroke consistent within a view.
- Do not mix filled and outline metaphors in the same control group unless Lucide provides a purposeful pair.
- Prefer `currentColor` so icons inherit text/action colors.

```tsx
import { ShoppingCart } from "lucide-react";

<ShoppingCart size={20} strokeWidth={1.75} aria-hidden="true" />
```

---

## Color

| Context | Color |
| --- | --- |
| Default | `currentColor` → `text-secondary` or control text |
| On primary button | Inverse (`action-primary-text`) |
| Destructive | `error` semantic |
| Disabled | Muted steel |

Do not apply multi-color brand gradients to icons.

---

## Usage rules

1. **Meaning first** — icons support labels; critical actions need visible text (icon-only allowed for compact toolbars with `aria-label`).
2. **Metaphors** — use conventional Lucide names (`search`, `cart`, `user`, `settings`, `file-text`, `box`, `cpu`).
3. **Alignment** — optically center with adjacent text; gap `--nl-space-2`.
4. **Touch** — icon-only hit area ≥ 44px on mobile (padding expands target).
5. **Admin density** — sm/md sizes preferred; avoid xl icon rows as decoration.
6. **Marketing** — avoid large icon feature grids as a substitute for real imagery ([10_BRAND_GUIDELINES.md](./10_BRAND_GUIDELINES.md)).

---

## Common mappings

| Action | Lucide icon (suggested) |
| --- | --- |
| Search | `Search` |
| Cart | `ShoppingCart` |
| Account | `User` |
| Wishlist | `Heart` |
| Download datasheet | `FileDown` / `FileText` |
| External link | `ExternalLink` |
| Filters | `SlidersHorizontal` |
| 3D / view | `Box` / `View` |
| Success | `Check` / `CircleCheck` |
| Warning | `TriangleAlert` |
| Error | `CircleX` |
| Menu | `Menu` |
| Close | `X` |

Final mapping can be centralized in an `icons.ts` map—implementation detail.

---

## Accessibility

| Case | Requirement |
| --- | --- |
| Decorative | `aria-hidden="true"` |
| Icon-only control | Accessible name via `aria-label` or visually hidden text |
| Adjacent label | Do not duplicate announcement; hide icon from AT |
| Status icons | Pair with text (“In stock”), not color alone |

---

## Functional requirements

| ID | Requirement |
| --- | --- |
| ICON-F-01 | Public and Admin apps depend on `lucide-react` as standard. |
| ICON-F-02 | Icon sizes/strokes use shared tokens or wrapper component. |

## Non-functional requirements

| ID | Requirement |
| --- | --- |
| ICON-N-01 | Import icons per-name to keep bundles small. |
| ICON-N-02 | No entire-library barrel imports. |

## Dependencies

- [15_COMPONENT_LIBRARY.md](./15_COMPONENT_LIBRARY.md)
- Color tokens for `currentColor` contexts

## Constraints

- Do not mix Font Awesome / Material / Heroicons casually alongside Lucide.
- Do not use emoji as status indicators in product UI.

## Acceptance criteria

- [ ] Shared `Icon` wrapper or documented Lucide props defaults.
- [ ] Nav, cart, and form validation icons comply with a11y rules.
- [ ] Bundle analysis shows tree-shaken imports.

---

## Summary

Neurolinx standardizes on **Lucide** outline icons with a fixed size/stroke scale, `currentColor` theming, and strict accessibility rules—supporting a clean industrial UI without decorative icon clutter.
