# Neurolinx Platform Documentation

**Single source of truth** for the Neurolinx next-generation technology and e-commerce platform.

Before implementing any feature, read the relevant documents in this directory. Documentation is created **before** application development.

**Audit status:** [00_DOCUMENTATION_STATUS.md](./00_DOCUMENTATION_STATUS.md) · **ADRs:** [ADR/README.md](./ADR/README.md)

---

## How to use this documentation

1. Start with [00_PROJECT_VISION.md](./00_PROJECT_VISION.md) and [01_PROJECT_OBJECTIVES.md](./01_PROJECT_OBJECTIVES.md).
2. Read [00_DOCUMENTATION_STATUS.md](./00_DOCUMENTATION_STATUS.md) for audit results, locked decisions, and P0 TBDs.
3. Confirm requirements in [02_BUSINESS_REQUIREMENTS.md](./02_BUSINESS_REQUIREMENTS.md) and [03_PRODUCT_REQUIREMENTS.md](./03_PRODUCT_REQUIREMENTS.md).
4. Check roles and permissions in [04_USER_ROLES.md](./04_USER_ROLES.md) and [64_AUTHORIZATION_RBAC.md](./64_AUTHORIZATION_RBAC.md).
5. Follow brand and design system docs (`10`–`19`) before building UI.
6. Treat [ADR/](./ADR/README.md) as locked architecture; do not contradict Accepted ADRs.
7. Mark unknowns as **TBD** in tickets; do not invent business rules.

### Stack context

| Layer | Technologies |
| --- | --- |
| Public & Admin frontend | React, TypeScript, Vite, React Router, Tailwind CSS (`apps/web`, `apps/admin`, pnpm) |
| Motion & UX | GSAP, Framer Motion, Lenis |
| 3D | Three.js, React Three Fiber, Drei (GLB/GLTF) |
| State | Zustand (UI) + TanStack Query (server) |
| Icons | Lucide |
| Backend | Java 21+, Spring Boot, Spring Security, Spring Data JPA |
| Data | PostgreSQL, Redis, Flyway |
| Ops | Docker, Nginx, CI/CD, monitoring |
| E2E | Playwright |

Locked decisions: [ADR-001](./ADR/ADR-001-FRONTEND-STACK.md) … [ADR-010](./ADR/ADR-010-DEPLOYMENT.md).

---

## Documentation governance

| Document | Description |
| --- | --- |
| [00_DOCUMENTATION_STATUS.md](./00_DOCUMENTATION_STATUS.md) | Audit status, conflicts resolved, TBD priorities |
| [ADR/README.md](./ADR/README.md) | Architecture Decision Records index |

---

## 6. Project Vision & Requirements

| Document | Description |
| --- | --- |
| [00_PROJECT_VISION.md](./00_PROJECT_VISION.md) | Why Neurolinx exists; target experience; architecture principle |
| [01_PROJECT_OBJECTIVES.md](./01_PROJECT_OBJECTIVES.md) | Business/product goals; phased success criteria |
| [02_BUSINESS_REQUIREMENTS.md](./02_BUSINESS_REQUIREMENTS.md) | Business requirements with BR IDs |
| [03_PRODUCT_REQUIREMENTS.md](./03_PRODUCT_REQUIREMENTS.md) | Product/feature requirements with PR IDs |
| [04_USER_ROLES.md](./04_USER_ROLES.md) | Roles, permissions matrix, auth cross-refs |

---

## 7. Brand & Design System

| Document | Description |
| --- | --- |
| [10_BRAND_GUIDELINES.md](./10_BRAND_GUIDELINES.md) | Brand personality, voice, visual direction |
| [11_DESIGN_SYSTEM.md](./11_DESIGN_SYSTEM.md) | Design system overview and token philosophy |
| [12_COLOR_SYSTEM.md](./12_COLOR_SYSTEM.md) | Color tokens, themes, contrast |
| [13_TYPOGRAPHY.md](./13_TYPOGRAPHY.md) | Font stacks, type scale, usage |
| [14_SPACING_AND_LAYOUT.md](./14_SPACING_AND_LAYOUT.md) | Spacing, grid, breakpoints, rhythm |
| [15_COMPONENT_LIBRARY.md](./15_COMPONENT_LIBRARY.md) | Component inventory, variants, states |
| [16_ICONOGRAPHY.md](./16_ICONOGRAPHY.md) | Lucide Icons standards |
| [17_IMAGE_GUIDELINES.md](./17_IMAGE_GUIDELINES.md) | Photography, formats, responsive images |
| [18_MOTION_DESIGN.md](./18_MOTION_DESIGN.md) | GSAP, Framer Motion, Lenis; a11y |
| [19_MOUSE_INTERACTIONS.md](./19_MOUSE_INTERACTIONS.md) | Custom cursor states and disable rules |

---

## 8. Website Architecture & UX

| Document | Description |
| --- | --- |
| [20_WEBSITE_INFORMATION_ARCHITECTURE.md](./20_WEBSITE_INFORMATION_ARCHITECTURE.md) | Site IA and content hierarchy |
| [21_PAGE_INVENTORY.md](./21_PAGE_INVENTORY.md) | Full public page inventory |
| [22_NAVIGATION.md](./22_NAVIGATION.md) | Primary/secondary/mobile navigation |
| [23_HOMEPAGE_DESIGN.md](./23_HOMEPAGE_DESIGN.md) | Homepage composition and sections |
| [24_COMPANY_PAGES.md](./24_COMPANY_PAGES.md) | About, careers, corporate pages |
| [25_TECHNOLOGY_PAGES.md](./25_TECHNOLOGY_PAGES.md) | Technologies, engineering, R&D |
| [26_INDUSTRY_PAGES.md](./26_INDUSTRY_PAGES.md) | Industry solutions pages |
| [27_CONTACT_AND_ENQUIRY.md](./27_CONTACT_AND_ENQUIRY.md) | Contact, enquiry, quotation flows |

---

## 9. Product Architecture

| Document | Description |
| --- | --- |
| [30_PRODUCT_ARCHITECTURE.md](./30_PRODUCT_ARCHITECTURE.md) | Product domain model and capabilities |
| [31_PRODUCT_LISTING.md](./31_PRODUCT_LISTING.md) | Catalog listing, filters, search |
| [32_PRODUCT_DETAILS.md](./32_PRODUCT_DETAILS.md) | PDP structure and media |
| [33_PRODUCT_3D_VIEWER.md](./33_PRODUCT_3D_VIEWER.md) | Product 3D viewer requirements |
| [34_PRODUCT_CONFIGURATOR.md](./34_PRODUCT_CONFIGURATOR.md) | Variants and configuration UX |
| [35_PRODUCT_COMPARISON.md](./35_PRODUCT_COMPARISON.md) | Compare products |
| [36_PRODUCT_MEDIA.md](./36_PRODUCT_MEDIA.md) | Images, video, docs, 3D assets |

---

## 10. 3D Product Experience (cross-ref)

Interactive 3D standards live primarily under section 15 (`80`–`84`), with product-facing requirements in `33`–`34`. Decision record: [ADR-007](./ADR/ADR-007-3D-ENGINE.md).

---

## 11. E-Commerce Architecture

| Document | Description |
| --- | --- |
| [40_ECOMMERCE_ARCHITECTURE.md](./40_ECOMMERCE_ARCHITECTURE.md) | Commerce domain overview (B2C + B2B + shipping adapter) |
| [41_CART.md](./41_CART.md) | Cart behavior and persistence |
| [42_CHECKOUT.md](./42_CHECKOUT.md) | Checkout flow |
| [43_PAYMENT.md](./43_PAYMENT.md) | Payment providers and flows |
| [44_ORDER_MANAGEMENT.md](./44_ORDER_MANAGEMENT.md) | Orders, tracking, invoices |
| [45_CUSTOMER_ACCOUNT.md](./45_CUSTOMER_ACCOUNT.md) | Customer account area |
| [46_WISHLIST.md](./46_WISHLIST.md) | Wishlist |
| [47_REVIEWS.md](./47_REVIEWS.md) | Product reviews moderation |
| [48_COUPONS.md](./48_COUPONS.md) | Coupons and promotions |

---

## 12. React Frontend Architecture

| Document | Description |
| --- | --- |
| [50_REACT_ARCHITECTURE.md](./50_REACT_ARCHITECTURE.md) | Frontend application architecture |
| [51_FRONTEND_FOLDER_STRUCTURE.md](./51_FRONTEND_FOLDER_STRUCTURE.md) | Folder and module layout |
| [52_FRONTEND_STATE_MANAGEMENT.md](./52_FRONTEND_STATE_MANAGEMENT.md) | Zustand, TanStack Query, auth state |
| [53_FRONTEND_API_INTEGRATION.md](./53_FRONTEND_API_INTEGRATION.md) | API client patterns |
| [54_FRONTEND_PERFORMANCE.md](./54_FRONTEND_PERFORMANCE.md) | Frontend performance budgets |
| [55_RESPONSIVE_DESIGN.md](./55_RESPONSIVE_DESIGN.md) | Responsive behavior standards |

---

## 13. Spring Boot Backend Architecture

| Document | Description |
| --- | --- |
| [60_SPRING_BOOT_ARCHITECTURE.md](./60_SPRING_BOOT_ARCHITECTURE.md) | Modular backend architecture |
| [61_BACKEND_FOLDER_STRUCTURE.md](./61_BACKEND_FOLDER_STRUCTURE.md) | Package and module layout |
| [62_API_ARCHITECTURE.md](./62_API_ARCHITECTURE.md) | REST/OpenAPI conventions |
| [63_AUTHENTICATION.md](./63_AUTHENTICATION.md) | Auth, JWT, sessions |
| [64_AUTHORIZATION_RBAC.md](./64_AUTHORIZATION_RBAC.md) | RBAC model and policies |
| [65_DATABASE_ARCHITECTURE.md](./65_DATABASE_ARCHITECTURE.md) | PostgreSQL architecture |
| [66_DATABASE_SCHEMA.md](./66_DATABASE_SCHEMA.md) | Schema and Flyway strategy |
| [67_REDIS_ARCHITECTURE.md](./67_REDIS_ARCHITECTURE.md) | Caching, sessions, rate limits |
| [68_FILE_STORAGE.md](./68_FILE_STORAGE.md) | Media and document storage |

---

## 14. Admin Platform

| Document | Description |
| --- | --- |
| [70_ADMIN_ARCHITECTURE.md](./70_ADMIN_ARCHITECTURE.md) | Admin app architecture |
| [71_ADMIN_DASHBOARD.md](./71_ADMIN_DASHBOARD.md) | Dashboard KPIs and widgets |
| [72_ADMIN_PRODUCTS.md](./72_ADMIN_PRODUCTS.md) | Product/admin catalog ops |
| [73_ADMIN_ORDERS.md](./73_ADMIN_ORDERS.md) | Order operations |
| [74_ADMIN_CUSTOMERS.md](./74_ADMIN_CUSTOMERS.md) | Customer management |
| [75_ADMIN_CONTENT_MANAGEMENT.md](./75_ADMIN_CONTENT_MANAGEMENT.md) | CMS / content ops |
| [76_ADMIN_MEDIA_MANAGEMENT.md](./76_ADMIN_MEDIA_MANAGEMENT.md) | Media library |
| [77_ADMIN_ANALYTICS.md](./77_ADMIN_ANALYTICS.md) | Admin analytics views |

---

## 15. 3D Engineering Documentation

| Document | Description |
| --- | --- |
| [80_3D_ARCHITECTURE.md](./80_3D_ARCHITECTURE.md) | 3D system architecture |
| [81_THREE_JS_STANDARDS.md](./81_THREE_JS_STANDARDS.md) | Three.js / R3F coding standards |
| [82_3D_MODEL_GUIDELINES.md](./82_3D_MODEL_GUIDELINES.md) | Model prep, poly limits, assets |
| [83_3D_PRODUCT_INTERACTIONS.md](./83_3D_PRODUCT_INTERACTIONS.md) | Rotate, explode, hotspots, etc. |
| [84_3D_PERFORMANCE.md](./84_3D_PERFORMANCE.md) | 3D performance and fallbacks |

---

## 16. Security

| Document | Description |
| --- | --- |
| [90_SECURITY_ARCHITECTURE.md](./90_SECURITY_ARCHITECTURE.md) | Security architecture overview |
| [91_API_SECURITY.md](./91_API_SECURITY.md) | API hardening |
| [92_DATA_SECURITY.md](./92_DATA_SECURITY.md) | Data protection and privacy |
| [93_FILE_UPLOAD_SECURITY.md](./93_FILE_UPLOAD_SECURITY.md) | Upload validation and storage |
| [94_PAYMENT_SECURITY.md](./94_PAYMENT_SECURITY.md) | PCI-aware payment security |

---

## 17. SEO, Accessibility & Performance

| Document | Description |
| --- | --- |
| [100_SEO_STRATEGY.md](./100_SEO_STRATEGY.md) | SEO, schema, sitemaps |
| [101_ACCESSIBILITY.md](./101_ACCESSIBILITY.md) | WCAG and inclusive UX |
| [102_PERFORMANCE_STANDARDS.md](./102_PERFORMANCE_STANDARDS.md) | Core Web Vitals budgets |
| [103_ANALYTICS.md](./103_ANALYTICS.md) | Analytics and conversion tracking |

---

## 18. Testing

| Document | Description |
| --- | --- |
| [110_TESTING_STRATEGY.md](./110_TESTING_STRATEGY.md) | Overall test strategy |
| [111_FRONTEND_TESTING.md](./111_FRONTEND_TESTING.md) | Component and frontend tests |
| [112_BACKEND_TESTING.md](./112_BACKEND_TESTING.md) | Unit/integration/API tests |
| [113_E2E_TESTING.md](./113_E2E_TESTING.md) | End-to-end journeys (Playwright) |
| [114_SECURITY_TESTING.md](./114_SECURITY_TESTING.md) | Security test coverage |

---

## 19. DevOps & Production

| Document | Description |
| --- | --- |
| [120_DEPLOYMENT_ARCHITECTURE.md](./120_DEPLOYMENT_ARCHITECTURE.md) | Environments and deployment |
| [121_DOCKER_ARCHITECTURE.md](./121_DOCKER_ARCHITECTURE.md) | Docker / Compose |
| [122_NGINX_CONFIGURATION.md](./122_NGINX_CONFIGURATION.md) | Reverse proxy and TLS |
| [123_CI_CD.md](./123_CI_CD.md) | Continuous integration/delivery |
| [124_BACKUP_AND_RECOVERY.md](./124_BACKUP_AND_RECOVERY.md) | Backups and DR |
| [125_MONITORING_AND_LOGGING.md](./125_MONITORING_AND_LOGGING.md) | Observability and alerts |

---

## 20. Architecture Decision Records

| Document | Description |
| --- | --- |
| [ADR/README.md](./ADR/README.md) | ADR index |
| [ADR-001-FRONTEND-STACK.md](./ADR/ADR-001-FRONTEND-STACK.md) | Frontend stack |
| [ADR-002-BACKEND-STACK.md](./ADR/ADR-002-BACKEND-STACK.md) | Backend stack |
| [ADR-003-DATABASE.md](./ADR/ADR-003-DATABASE.md) | Database |
| [ADR-004-STATE-MANAGEMENT.md](./ADR/ADR-004-STATE-MANAGEMENT.md) | State management |
| [ADR-005-API-ARCHITECTURE.md](./ADR/ADR-005-API-ARCHITECTURE.md) | API architecture |
| [ADR-006-AUTHENTICATION.md](./ADR/ADR-006-AUTHENTICATION.md) | Authentication |
| [ADR-007-3D-ENGINE.md](./ADR/ADR-007-3D-ENGINE.md) | 3D engine |
| [ADR-008-CACHING.md](./ADR/ADR-008-CACHING.md) | Caching |
| [ADR-009-FILE-STORAGE.md](./ADR/ADR-009-FILE-STORAGE.md) | File storage |
| [ADR-011-BRAND-COLORS.md](./ADR/ADR-011-BRAND-COLORS.md) | Brand logo colors (#4c4d4d / #cd2027) |

---

## Documentation completeness checklist

| Range | Topic | Status |
| --- | --- | --- |
| Status + ADR | Governance | Complete (Task 02) |
| `00`–`04` | Vision & requirements | Complete |
| `10`–`19` | Brand & design | Complete |
| `20`–`27` | Website UX | Complete |
| `30`–`36` | Products | Complete |
| `40`–`48` | E-commerce | Complete |
| `50`–`55` | React frontend | Complete |
| `60`–`68` | Spring Boot backend | Complete |
| `70`–`77` | Admin | Complete |
| `80`–`84` | 3D engineering | Complete |
| `90`–`94` | Security | Complete |
| `100`–`103` | SEO / a11y / perf | Complete |
| `110`–`114` | Testing | Complete |
| `120`–`125` | DevOps | Complete |

---

## Conventions

- Prefer relative links between docs.
- Use Mermaid for architecture and flow diagrams where useful.
- Mark unresolved business decisions as **TBD**.
- Do not invent pricing rules, tax jurisdictions, payment providers, or legal copy without stakeholder confirmation.
- Keep tone: premium technology / engineering company + e-commerce.
- Accepted ADRs override informal wording elsewhere when conflict arises — update both ADR and feature doc together.

---

## Related root specification

Master project specification (source outline): repository root file  
`Neurolinx — Next-Generation Technology & E-Commerce Platform.md`
