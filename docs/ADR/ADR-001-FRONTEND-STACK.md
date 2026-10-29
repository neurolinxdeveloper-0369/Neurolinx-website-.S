# ADR-001 — Frontend Stack

## Status

Accepted

## Decision

Neurolinx frontends use:

- **React** + **TypeScript** + **Vite**
- **React Router**
- **Tailwind CSS**
- **Three.js** + **React Three Fiber** + **Drei**
- **GSAP** + **Framer Motion** + **Lenis**
- **Zustand** + **TanStack Query**
- **Lucide** icons
- Monorepo layout: **`apps/web`**, **`apps/admin`**, **`packages/*`**
- Package manager: **pnpm workspaces**

E2E testing standard: **Playwright**.

## Context

The platform needs a premium public site (corporate + commerce + 3D) and a separate admin app, sharing design-system packages without shipping admin code in the public bundle.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Next.js SSR as primary | Master stack mandates Vite SPA; SEO via prerender/SSR can be revisited later (**TBD**) |
| Single React app with `/admin` routes | Admin blast-radius and bundle leakage risk |
| Redux / MobX | Heavier than needed; Zustand + TanStack Query cover UI + server state |
| Cypress | Playwright locked for CI consistency |

## Reason

Matches the master project specification, separates public vs admin deployables, and keeps motion/3D optional and code-split.

## Consequences

- Developers must use pnpm and the `apps/` + `packages/` layout.
- New UI libraries require documentation approval; do not add competing state or meta-frameworks.
- Related docs: [50_REACT_ARCHITECTURE.md](../50_REACT_ARCHITECTURE.md), [51_FRONTEND_FOLDER_STRUCTURE.md](../51_FRONTEND_FOLDER_STRUCTURE.md), [70_ADMIN_ARCHITECTURE.md](../70_ADMIN_ARCHITECTURE.md).
