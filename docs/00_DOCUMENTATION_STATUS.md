# 00 — Documentation Status

## Purpose

Track Neurolinx documentation completeness after **Task 02 — Documentation Audit**. This file is the audit snapshot for go/no-go before Task 03 (implementation).

**Audit date:** 2026-08-11  
**Scope:** `docs/` only — no application code created.

---

## Summary

| Metric | Value |
| --- | --- |
| Total Markdown files in `docs/` (incl. ADR + this file) | See inventory below |
| Spec-required numbered docs (`00`–`125` excl. this status) | 87 content docs + README |
| ADR files | 10 + ADR README |
| Architecture status | **COMPLETE** (locked via ADRs) |
| Documentation quality | **Audit-pass with open TBDs** |
| Ready for implementation | **After stakeholder review of P0 TBDs** |

---

## Inventory

| Area | Status | Notes |
| --- | --- | --- |
| Project vision & requirements (`00`–`04`) | Complete | Vision, objectives, BR/PR IDs, roles |
| Documentation status (`00_DOCUMENTATION_STATUS`) | Complete | This file |
| Brand & design (`10`–`19`) | Complete | Premium/enterprise direction; final brand assets TBD |
| Website IA & UX (`20`–`27`) | Complete | Sitemap, homepage hero rules, enquiry |
| Product architecture (`30`–`36`) | Complete | Catalog, PDP, 3D viewer UX, media |
| E-commerce (`40`–`48`) | Complete | B2C + B2B dual mode; payment/shipping providers TBD |
| React frontend (`50`–`55`) | Complete | Monorepo `apps/web` + `apps/admin`, pnpm locked |
| Spring Boot backend (`60`–`68`) | Complete | Modular monolith; soft delete + audit clarified |
| Admin & CMS (`70`–`77`) | Complete | Manage without source edits |
| 3D engineering (`80`–`84`) | Complete | Engine / assets / UX separated |
| Security (`90`–`94`) | Complete | JWT + refresh cookie locked |
| SEO / a11y / perf / analytics (`100`–`103`) | Complete | Analytics vendor TBD |
| Testing (`110`–`114`) | Complete | Playwright locked |
| DevOps (`120`–`125`) | Complete | Domains/CDN/CI vendor TBD |
| ADRs (`ADR/`) | Complete | ADR-001 … ADR-010 Accepted |

---

## Architecture decisions (finalized)

| Decision | Locked choice | ADR |
| --- | --- | --- |
| Frontend stack | React, TS, Vite, RR, Tailwind, R3F, GSAP/FM/Lenis, Zustand, TanStack Query, Lucide | [ADR-001](./ADR/ADR-001-FRONTEND-STACK.md) |
| App topology | `apps/web` + `apps/admin` + `packages/*`, pnpm workspaces | ADR-001 |
| Backend stack | Java 21+, Spring Boot modular monolith, REST, OpenAPI, Docker | [ADR-002](./ADR/ADR-002-BACKEND-STACK.md) |
| Database | PostgreSQL + Flyway + soft delete + audit columns | [ADR-003](./ADR/ADR-003-DATABASE.md) |
| State management | Zustand (UI) + TanStack Query (server) | [ADR-004](./ADR/ADR-004-STATE-MANAGEMENT.md) |
| API | `/api/v1`, DTO + Bean Validation, problem errors | [ADR-005](./ADR/ADR-005-API-ARCHITECTURE.md) |
| Authentication | Bearer access JWT in memory; refresh HttpOnly cookie | [ADR-006](./ADR/ADR-006-AUTHENTICATION.md) |
| 3D | Three.js / R3F / Drei; GLB/GLTF; lazy + mobile fallback | [ADR-007](./ADR/ADR-007-3D-ENGINE.md) |
| Caching | Redis + Nginx/CDN optional; PG source of truth | [ADR-008](./ADR/ADR-008-CACHING.md) |
| File storage | StorageService port; local + S3-compatible | [ADR-009](./ADR/ADR-009-FILE-STORAGE.md) |
| Deployment | Docker Compose, Nginx, VPS, CI/CD | [ADR-010](./ADR/ADR-010-DEPLOYMENT.md) |
| E2E tool | Playwright | ADR-001 / testing docs |
| Commerce modes | Single catalog; B2C cart/checkout + B2B quote/enquiry | [40_ECOMMERCE_ARCHITECTURE.md](./40_ECOMMERCE_ARCHITECTURE.md) |

Platform shape (verified across docs):

```text
USER → React (corporate | products | ecommerce | account | admin)
    → REST API → Spring Boot modules
    → PostgreSQL + Redis + File/Media Storage
```

---

## Conflicts found & resolved (Task 02)

| Conflict | Resolution |
| --- | --- |
| Playwright vs Cypress as peer options | **Playwright locked**; Cypress not adopted |
| `admin/` vs `apps/admin` path ambiguity | **`apps/admin` locked** |
| pnpm vs npm workspaces TBD | **pnpm workspaces locked** |
| Access/refresh token storage TBD across auth docs | **Access in memory; refresh HttpOnly cookie** |
| Soft delete marked TBD without standard | **Soft delete standard** for catalog/CMS/media metadata |
| Broken link `123_BACKUP…` in DB architecture | Fixed → `124_BACKUP_AND_RECOVERY.md` |
| Broken link `122_MONITORING…` in Redis architecture | Fixed → `125_MONITORING_AND_LOGGING.md` |
| Shipping requirements scattered / thin | Consolidated shipping adapter section in ecommerce architecture |

No Redux/Next.js/MySQL/MongoDB/GraphQL-as-primary contradictions remained after audit.

---

## Missing requirements addressed in audit

| Gap | Action |
| --- | --- |
| Soft delete | Added to [65](./65_DATABASE_ARCHITECTURE.md) + [66](./66_DATABASE_SCHEMA.md) |
| Entity auditing / `audit_logs` columns | Specified minimum schema |
| Exception handling / DTO / validation depth | Expanded in [62_API_ARCHITECTURE.md](./62_API_ARCHITECTURE.md) |
| Shipping module clarity | Section added in [40_ECOMMERCE_ARCHITECTURE.md](./40_ECOMMERCE_ARCHITECTURE.md) |
| Auth transport consistency | Locked in auth, security, state, API security docs + ADR-006 |
| ADRs | Created `docs/ADR/` |

Coverage checklist (post-audit): Frontend, Backend, Database, Ecommerce, 3D, Admin, Security, SEO, Performance, Testing, DevOps — **Covered**. Remaining gaps are business **TBD**s, not missing architecture topics.

---

## Duplication policy

| Topic | Source of truth | Others should |
| --- | --- | --- |
| Stack libraries | ADRs + master README stack table | Link, do not redefine |
| Roles/permissions | [04_USER_ROLES.md](./04_USER_ROLES.md), [64_AUTHORIZATION_RBAC.md](./64_AUTHORIZATION_RBAC.md) | Reference matrix |
| Auth token transport | ADR-006 + [63](./63_AUTHENTICATION.md) | Reference only |
| Product domain model | [30_PRODUCT_ARCHITECTURE.md](./30_PRODUCT_ARCHITECTURE.md) | Link from commerce/admin |
| 3D engine vs assets vs UX | `80`/`81` vs `82` vs `33`/`83` | Keep separation |
| Payment security | [94_PAYMENT_SECURITY.md](./94_PAYMENT_SECURITY.md) | Link from payment feature docs |
| Performance budgets | [102](./102_PERFORMANCE_STANDARDS.md) + [54](./54_FRONTEND_PERFORMANCE.md) | FE-specific detail in 54 |

---

## Documents requiring clarification (stakeholder)

| Priority | Topic | Owner needed |
| --- | --- | --- |
| P0 | Payment provider, currency, tax | Commerce / finance |
| P0 | Shipping carriers / rate rules | Ops |
| P0 | Guest checkout policy | Product |
| P0 | Pricing & stock visibility (public vs login) | Product |
| P0 | B2B quote eligibility / approval / conversion rules | Sales |
| P1 | Final brand colors, logo, licensed fonts | Brand |
| P1 | Domains (www / admin / api), CDN, CI vendor | Infra |
| P1 | Analytics tool & conversion events | Marketing |
| P1 | Admin MFA mandate; password complexity | Security |
| P2 | Multi-tenancy | Product |
| P2 | SSR/prerender for SEO | Engineering |
| P2 | Notification channels (email provider) | Ops |
| P2 | RPO/RTO numeric targets | Ops |

---

## Open TBD themes (grouped)

Business: tax, currency, regions, returns, warranty copy, legal pages, careers ATS.  
Commerce: coupon stacking, review eligibility, invoice format, COD.  
Security: token TTLs, lockout thresholds, malware scanning vendor.  
Ops: backup cadence, error-tracking vendor, log retention.  
Content: exact industry list, technology page inventory depth, CMS vs coded pages.

Unknowns remain marked **TBD** in feature docs — **not invented**.

---

## Design direction verification

Documentation consistently defines Neurolinx as:

**Premium · Professional · Technology-focused · Enterprise-grade · Modern · High-end · Responsive · Accessible**

Visual language = corporate credibility + technology/engineering + premium product presentation + **subtle** advanced motion.  
Docs explicitly reject gaming-style / excessive futuristic UX. 3D and motion must not block usability, a11y, or performance.

---

## Link health (post-fix)

| Check | Result |
| --- | --- |
| Relative `.md` links among numbered docs | Validated; 2 broken links fixed |
| ADR links from status/README | Present |

---

## Acceptance for Task 02

- [x] Full documentation set audited
- [x] Stack contradictions resolved
- [x] Critical missing requirements filled
- [x] ADRs created (001–010)
- [x] Status file created
- [x] No application/code implementation performed

**Next:** Stakeholder review → then Task 03 only after approval.
