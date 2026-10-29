# 35 — Product Comparison

## Purpose

Define how users compare attributes across multiple Neurolinx products to support evaluation for both engineering selection and purchase decisions.

## Related Documents

- [30_PRODUCT_ARCHITECTURE.md](./30_PRODUCT_ARCHITECTURE.md)
- [31_PRODUCT_LISTING.md](./31_PRODUCT_LISTING.md)
- [32_PRODUCT_DETAILS.md](./32_PRODUCT_DETAILS.md)
- [27_CONTACT_AND_ENQUIRY.md](./27_CONTACT_AND_ENQUIRY.md)
- [41_CART.md](./41_CART.md)

## Requirements

1. Allow selecting multiple products from listing/PDP to compare.
2. Compare only attributes flagged as `comparable`.
3. Present differences clearly on `/products/compare`.
4. Provide exit actions: view PDP, add to cart (if enabled), request quote.
5. Remain usable on mobile (horizontal scroll or stacked comparison — choose accessible pattern).

## Technical Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Max products | 3–4 — **TBD** exact cap (recommend 4) | Readability |
| Persistence | Session/local storage + URL ids `?ids=` | Shareable links |
| Attribute source | `AttributeDefinition.comparable = true` | Data-driven |
| Variants | Compare default variant or user-selected variant snapshot — **TBD** (recommend selected/default) |
| Empty cells | Show em dash / “—” | Avoid false zeros |
| Diff emphasis | Highlight differing rows | Faster scanning |

## UX Flow

```mermaid
flowchart LR
  L[Listing / PDP] -->|Add to compare| T[Compare tray]
  T --> C[/products/compare]
  C --> P[Attribute matrix]
  P --> A1[Open PDP]
  P --> A2[Add to Cart]
  P --> A3[Request Quote]
  P --> R[Remove product]
```

### Compare tray

- Persistent compact tray when ≥1 product selected.
- Shows thumbnails/names and count.
- CTA: Compare.
- Clear all action.

## Comparison Matrix

| Row type | Content |
|---|---|
| Header | Image, name, SKU, price/quote label, remove |
| Key CTAs | Per-column actions based on CTA config |
| Attributes | One row per comparable attribute |
| Media flags | Optional: Has 3D, Has datasheet |

### Rules

- Column order = selection order unless user reorders (**TBD** reorder).
- Category mismatch allowed (cross-category compare) unless business restricts — **TBD**.
- Specs use normalized units from attribute definitions.
- Do not invent “winner” scoring.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-CMP-01 | User can add/remove products up to the configured maximum. |
| FR-CMP-02 | Compare page renders matrix for selected published products. |
| FR-CMP-03 | Only comparable attributes appear as rows. |
| FR-CMP-04 | Differing values are visually distinguishable. |
| FR-CMP-05 | Per-product CTAs respect product CTA configuration. |
| FR-CMP-06 | Shareable URL restores selection when products still published. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-CMP-01 | Matrix usable with keyboard; sticky first column recommended on desktop. |
| NFR-CMP-02 | Mobile supports reviewing all columns without trapping scroll. |
| NFR-CMP-03 | Page is non-indexable or low-priority utility (see page inventory). |

## Dependencies

- Attribute metadata from catalog
- Listing/PDP entry points
- Cart and enquiry actions

## Constraints

- Exact max count and cross-category policy are **TBD**.
- Do not auto-select “best” product.

## Acceptance Criteria

- [ ] Selection, tray, matrix, and CTAs documented.
- [ ] Comparable-attribute rule defined.
- [ ] TBD items listed for cap/variant policy.
- [ ] Cross-links to listing and architecture present.
