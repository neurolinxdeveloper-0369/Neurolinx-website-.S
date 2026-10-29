# 51 — Frontend Folder Structure

## Purpose

Provide a detailed, implementation-ready folder tree for the Neurolinx Vite + React + TypeScript frontend monorepo (`apps/web`, `apps/admin`, shared packages), consistent with [50_REACT_ARCHITECTURE.md](./50_REACT_ARCHITECTURE.md).

## Related documents

- [50_REACT_ARCHITECTURE.md](./50_REACT_ARCHITECTURE.md)
- [52_FRONTEND_STATE_MANAGEMENT.md](./52_FRONTEND_STATE_MANAGEMENT.md)
- [53_FRONTEND_API_INTEGRATION.md](./53_FRONTEND_API_INTEGRATION.md)
- [80_3D_ARCHITECTURE.md](./80_3D_ARCHITECTURE.md)
- [61_BACKEND_FOLDER_STRUCTURE.md](./61_BACKEND_FOLDER_STRUCTURE.md) — naming discipline alignment

---

## Requirements

1. Structure must scale for corporate pages, commerce, account, 3D, and admin.
2. Feature modules should be discoverable without deep coupling.
3. Shared design system and API client must not be duplicated across apps.
4. Test and story locations should be conventional (**exact test runner TBD**).

---

## Technical decisions

| Decision | Choice |
| --- | --- |
| Layout | Monorepo `apps/*` + `packages/*` |
| Public app name | `apps/web` |
| Admin app name | `apps/admin` |
| Alias | `@/` → `src/` within each app |
| Feature colocation | Hooks/components/api per feature folder |

---

## Repository tree

```text
neurolinx/
├── apps/
│   ├── web/                          # Public platform
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.ts
│   │   ├── public/
│   │   │   ├── favicon.svg
│   │   │   ├── robots.txt            # final SEO ownership TBD
│   │   │   └── og/                   # static social images TBD
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── app/
│   │       │   ├── App.tsx
│   │       │   ├── providers/
│   │       │   │   ├── AppProviders.tsx
│   │       │   │   ├── QueryProvider.tsx
│   │       │   │   └── MotionProvider.tsx
│   │       │   ├── router/
│   │       │   │   ├── index.tsx
│   │       │   │   ├── routes.tsx
│   │       │   │   └── guards.tsx
│   │       │   └── layouts/
│   │       │       ├── RootLayout.tsx
│   │       │       ├── ShopLayout.tsx
│   │       │       ├── CheckoutLayout.tsx
│   │       │       └── AccountLayout.tsx
│   │       ├── pages/                # route entry compositions
│   │       │   ├── home/
│   │       │   ├── corporate/        # about, tech, industries, etc.
│   │       │   ├── shop/
│   │       │   ├── product/
│   │       │   ├── cart/
│   │       │   ├── checkout/
│   │       │   ├── account/
│   │       │   ├── enquiry/
│   │       │   └── errors/
│   │       ├── features/
│   │       │   ├── auth/
│   │       │   ├── catalog/
│   │       │   ├── cart/
│   │       │   ├── checkout/
│   │       │   ├── orders/
│   │       │   ├── wishlist/
│   │       │   ├── quotes/
│   │       │   ├── reviews/
│   │       │   ├── coupons/
│   │       │   ├── search/
│   │       │   ├── cursor/           # custom cursor states
│   │       │   └── notifications/
│   │       ├── widgets/              # composed site blocks
│   │       │   ├── site-header/
│   │       │   ├── site-footer/
│   │       │   ├── product-gallery/
│   │       │   └── mega-menu/
│   │       ├── entities/             # optional domain units
│   │       │   ├── product/
│   │       │   └── order/
│   │       ├── shared/
│   │       │   ├── ui/               # app-local primitives if not in packages/ui
│   │       │   ├── lib/
│   │       │   ├── hooks/
│   │       │   ├── config/
│   │       │   └── types/
│   │       ├── stores/               # Zustand stores
│   │       │   ├── cart-store.ts
│   │       │   ├── ui-store.ts
│   │       │   └── session-store.ts
│   │       ├── services/             # API wrappers if not solely in packages/api-client
│   │       │   └── http/
│   │       ├── styles/
│   │       │   ├── index.css
│   │       │   └── tokens.css
│   │       └── assets/
│   │           ├── images/
│   │           └── models/           # only small/demo GLBs; CDN preferred
│   │
│   └── admin/                        # Admin platform
│       ├── index.html
│       ├── vite.config.ts
│       ├── tsconfig.json
│       ├── tailwind.config.ts
│       └── src/
│           ├── main.tsx
│           ├── app/
│           ├── pages/
│           ├── features/
│           │   ├── products/
│           │   ├── orders/
│           │   ├── customers/
│           │   ├── content/
│           │   ├── media/
│           │   ├── reviews/
│           │   ├── coupons/
│           │   ├── enquiries/
│           │   └── analytics/
│           ├── stores/
│           ├── shared/
│           └── styles/
│
├── packages/
│   ├── ui/                           # design system
│   │   ├── src/
│   │   │   ├── button/
│   │   │   ├── input/
│   │   │   ├── dialog/
│   │   │   └── index.ts
│   │   └── package.json
│   ├── api-client/
│   │   ├── src/
│   │   │   ├── client.ts
│   │   │   ├── generated/            # OpenAPI output TBD
│   │   │   └── index.ts
│   │   └── package.json
│   ├── three-utils/                  # optional shared R3F helpers
│   │   └── src/
│   ├── config/
│   │   ├── eslint/
│   │   ├── typescript/
│   │   └── tailwind/
│   └── tsconfig/                     # base tsconfigs
│
├── docs/                             # project documentation (this tree)
├── package.json                      # workspaces root
└── README.md
```

Feature folder convention (example `features/cart/`):

```text
features/cart/
├── components/
├── hooks/
├── api/
├── model/          # types, mappers
├── lib/
└── index.ts        # public exports only
```

---

## 3D / motion placement

| Concern | Location |
| --- | --- |
| Product R3F viewer | `features/catalog` or `widgets/product-viewer` + `packages/three-utils` |
| Hero WebGL | `pages/home` feature island, lazy imported |
| GSAP timelines | colocated with the feature that owns the animation |
| Lenis | provider under `app/providers` |
| Framer page transitions | router/layout level sparingly |

Heavy 3D code must be dynamically imported — see [54_FRONTEND_PERFORMANCE.md](./54_FRONTEND_PERFORMANCE.md).

---

## Functional requirements

| ID | Requirement |
| --- | --- |
| FR-FS-01 | Repo contains `apps/web` and `apps/admin`. |
| FR-FS-02 | Shared UI and API client live under `packages/`. |
| FR-FS-03 | Commerce features are isolated under `features/*`. |
| FR-FS-04 | Zustand stores live in a dedicated `stores/` (or feature-local) location consistently. |
| FR-FS-05 | Route entries in `pages/` stay thin. |

## Non-functional requirements

| ID | Requirement |
| --- | --- |
| NFR-FS-01 | Folder names are kebab-case; React components PascalCase filenames as team convention (**confirm TBD**). |
| NFR-FS-02 | No circular imports across features; shared code moves down to `shared` or packages. |
| NFR-FS-03 | Admin and web source trees are not importable into each other directly. |

## Dependencies

- Workspace tooling (**TBD**)
- Tailwind presets package
- OpenAPI generation pipeline

## Constraints

1. Do not place secrets in `src/` or `public/`.
2. Do not commit large unoptimized GLB/texture binaries; prefer object storage/CDN.
3. Do not mix admin pages into `apps/web`.

## Open questions (TBD)

- Exact workspace tool and CI caching
- Storybook location (`apps/storybook` vs `packages/ui`)
- Whether `entities/` layer is used or folded into `features/`

## Acceptance criteria

- [ ] Full tree documents web, admin, and packages.
- [ ] Feature colocation convention is specified.
- [ ] 3D/motion placement guidance is included.
- [ ] Aligns with recommended architecture in doc 50.
