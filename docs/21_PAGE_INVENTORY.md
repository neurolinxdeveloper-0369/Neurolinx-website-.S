# 21 — Page Inventory

## Purpose

Inventory every public (and key authenticated customer) page with purpose, primary CTA, SEO focus, and auth requirements. Used for routing implementation, content planning, SEO, and QA coverage.

## Related Documents

- [20_WEBSITE_INFORMATION_ARCHITECTURE.md](./20_WEBSITE_INFORMATION_ARCHITECTURE.md)
- [22_NAVIGATION.md](./22_NAVIGATION.md)
- [23_HOMEPAGE_DESIGN.md](./23_HOMEPAGE_DESIGN.md)
- [27_CONTACT_AND_ENQUIRY.md](./27_CONTACT_AND_ENQUIRY.md)
- [31_PRODUCT_LISTING.md](./31_PRODUCT_LISTING.md)
- [32_PRODUCT_DETAILS.md](./32_PRODUCT_DETAILS.md)
- [100_SEO_STRATEGY.md](./100_SEO_STRATEGY.md)

## Requirements

1. Cover all IA routes with a consistent metadata schema.
2. Distinguish public, authenticated, and mixed pages.
3. Identify primary conversion CTA per page.
4. Flag SEO indexability.

## Technical Decisions

| Field | Definition |
|---|---|
| Auth | `Public` / `Optional` (guest OK, account enhances) / `Required` |
| Index | `Yes` / `No` / `Conditional` (e.g. product must be published) |
| Primary CTA | Dominant conversion action above the fold or end of hero/section |

## Page Inventory Table

| Route | Page | Purpose | Primary CTA | SEO focus | Auth | Index |
|---|---|---|---|---|---|---|
| `/` | Home | Brand first impression; route to products, tech, shop, contact | Shop / Explore Products / Contact Sales (**TBD** final label set) | Brand + technology leadership keywords | Public | Yes |
| `/about` | About Neurolinx | Company story, positioning, credibility | Contact / Careers | Company entity, about brand | Public | Yes |
| `/about/team` | Team | Leadership/engineering people (**TBD** roster) | Careers / Contact | Team / expertise | Public | Yes |
| `/about/certifications` | Certifications | Trust signals (**TBD** exact certs) | Download / Contact | Compliance / quality | Public | Yes |
| `/about/manufacturing` | Manufacturing | Capability narrative | Contact Sales / Projects | Manufacturing capability | Public | Yes |
| `/about/innovation` | Innovation | Innovation/R&D narrative bridge | R&D / Technologies | Innovation | Public | Yes |
| `/careers` | Careers | Hiring presence (**TBD** openings CMS) | Apply / Contact HR | Careers employer brand | Public | Yes |
| `/products` | Products hub | Engineering-led product discovery | Browse categories / Shop | Product category keywords | Public | Yes |
| `/products/:categorySlug` | Product category | Filtered category listing | View product | Category SEO | Public | Conditional |
| `/products/:categorySlug/:productSlug` | Product detail (PDP) | Specs, media, 3D, commerce/enquiry CTAs | Buy Now / Add to Cart / Request Quote | Product name + specs | Public | Conditional |
| `/products/compare` | Product comparison | Side-by-side attributes | Add to Cart / Request Quote | Low priority / utility | Public | No or low |
| `/products/.../configure` | Configurator | Variant/config selection | Add configured product / Quote | Utility | Public | No |
| `/solutions` | Solutions hub | Outcome-oriented solution overview | Contact / Explore solution | Solutions keywords | Public | Yes |
| `/solutions/:slug` | Solution detail | Problem → approach → products | Enquire / Related products | Solution SEO | Public | Conditional |
| `/technologies` | Technologies hub | Capability overview | Explore area / Contact | Technology leadership | Public | Yes |
| `/technologies/iot` | IoT | IoT capability page | Related products / Enquire | IoT | Public | Yes |
| `/technologies/automation` | Automation | Automation capability | Related products / Enquire | Automation | Public | Yes |
| `/technologies/embedded` | Embedded | Embedded systems capability | Related products / Enquire | Embedded systems | Public | Yes |
| `/technologies/ai` | AI | AI capability (**TBD** depth) | Related products / Enquire | AI | Public | Yes |
| `/industries` | Industries hub | Market vertical overview | Select industry | Industry keywords | Public | Yes |
| `/industries/:slug` | Industry landing | Vertical value + products/solutions | Contact Sales / View products | Industry + Neurolinx | Public | Conditional |
| `/engineering` | Engineering | Engineering practice & quality | Projects / Careers / Contact | Engineering capability | Public | Yes |
| `/rd` | R&D | Research & development narrative | Innovation / Contact | R&D | Public | Yes |
| `/projects` | Projects | Case studies / portfolio | View project / Contact | Projects / case studies | Public | Yes |
| `/projects/:slug` | Project detail | Story, outcomes, related tech | Enquire / Related products | Project SEO | Public | Conditional |
| `/resources` | Resources hub | Documents, guides, downloads | Browse documents | Resources / support | Public | Yes |
| `/resources/documents` | Document library | Datasheets, manuals index | Download | Technical docs | Public | Yes |
| `/resources/:slug` | Resource detail | Single resource page | Download / Related products | Topic SEO | Public | Conditional |
| `/blog` | Blog index | Thought leadership / news | Read article | Blog / topics | Public | Yes |
| `/blog/:slug` | Blog article | Long-form content | CTA in post (products/contact) | Article keywords | Public | Conditional |
| `/contact` | Contact | General contact channels & form | Send message | Contact Neurolinx | Public | Yes |
| `/enquiry` | Enquiry hub | B2B lead / sales enquiry | Submit enquiry | Contact sales / quote | Public | Yes |
| `/enquiry/quote` | Request quote | Product-linked quotation | Submit quote request | Quote / B2B | Optional | No |
| `/shop` | Shop catalog | Commerce discovery | Add to Cart / View | Shop / buy products | Public | Yes |
| `/shop/:categorySlug` | Shop category | Commerce category listing | Add to Cart | Category commerce | Public | Conditional |
| `/shop/:categorySlug/:productSlug` | Shop PDP | Commerce-focused PDP (or redirect to Products PDP — **TBD**) | Buy Now / Add to Cart | Product commerce | Public | Conditional |
| `/cart` | Cart | Review cart contents | Checkout | Utility | Optional | No |
| `/checkout` | Checkout start | Begin purchase | Continue | Utility | Optional/Required (**TBD** guest checkout) | No |
| `/checkout/shipping` | Shipping | Address & shipping method | Continue to payment | Utility | Optional/Required | No |
| `/checkout/payment` | Payment | Pay for order | Pay now | Utility | Optional/Required | No |
| `/checkout/confirmation` | Order confirmation | Success state + order ref | View order / Continue shopping | Utility | Required or tokenized link | No |
| `/account/sign-in` | Sign in | Authenticate customer | Sign in | Utility | Public | No |
| `/account/register` | Register | Create customer account | Create account | Utility | Public | No |
| `/account` | Account dashboard | Account overview | View orders | Utility | Required | No |
| `/account/orders` | Orders list | Order history | View order | Utility | Required | No |
| `/account/orders/:orderId` | Order detail | Status, items, invoice access | Track / Download invoice | Utility | Required | No |
| `/account/addresses` | Addresses | Manage shipping/billing | Save address | Utility | Required | No |
| `/account/wishlist` | Wishlist | Saved products | Add to Cart | Utility | Required | No |
| `/account/enquiries` | My enquiries | Customer quote/enquiry status | View enquiry | Utility | Required | No |
| `/account/settings` | Profile settings | Profile, password, preferences | Save | Utility | Required | No |
| `/legal/privacy` | Privacy policy | Legal disclosure | — | Compliance | Public | Yes |
| `/legal/terms` | Terms of use/sale | Legal terms | — | Compliance | Public | Yes |
| `/legal/cookies` | Cookie policy | Cookie disclosure | Manage preferences | Compliance | Public | Yes |

## System / Utility Pages

| Route | Purpose | Auth | Index |
|---|---|---|---|
| `/404` (or SPA fallback) | Not found | Public | No |
| `/maintenance` | Planned downtime | Public | No |
| `/search` | Global search results (**TBD** dedicated page vs overlay) | Public | No |

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-PI-01 | Every IA route must appear in this inventory before implementation. |
| FR-PI-02 | Indexable pages must define title/description templates in SEO docs. |
| FR-PI-03 | Auth-required pages must redirect unauthenticated users to sign-in with return URL. |
| FR-PI-04 | Conditional index pages must only be crawlable when published/active. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-PI-01 | Inventory must stay synchronized with React Router config. |
| NFR-PI-02 | CTA labels must align with brand voice guidelines (`10_BRAND_GUIDELINES.md`). |

## Dependencies

- IA (`20`), Navigation (`22`), Product listing/details (`31`, `32`), Enquiry (`27`), Account/checkout ecommerce docs (`40`–`45`)

## Constraints

- Exact CTA label set, industry slugs, and product categories are **TBD** until product/content catalogs are approved.
- Guest checkout policy is **TBD**.

## Acceptance Criteria

- [ ] All public IA pages listed with purpose, primary CTA, SEO focus, auth, indexability.
- [ ] Account/cart/checkout included.
- [ ] Legal and utility pages included.
- [ ] Cross-references to IA and SEO docs present.
