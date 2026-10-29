# ADR-004 — Frontend State Management

## Status

Accepted

## Decision

| Concern | Tool |
| --- | --- |
| Server state (products, orders, profile, etc.) | **TanStack Query** |
| Client/UI state (nav, modals, cursor mode, mirrors) | **Zustand** |
| Cart | Hybrid: Zustand UI mirror + API/Query as authority |
| Auth session | Zustand session mirror; tokens per ADR-006 |

Do **not** adopt Redux, MobX, Recoil, or duplicate large server lists into Zustand.

## Context

Public and admin SPAs need predictable caching, optimistic cart UX, and clear separation of remote vs ephemeral state.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Redux Toolkit | More boilerplate; Query already handles server cache |
| React Context for everything | Poor for high-frequency cart/UI updates |
| Only Zustand for server data | Reimplements caching, invalidation, retries |

## Reason

Matches master stack and keeps server truth on the backend.

## Consequences

- Feature hooks wrap API via TanStack Query.
- Checkout must revalidate server cart — Zustand is never checkout authority.
- Related docs: [52_FRONTEND_STATE_MANAGEMENT.md](../52_FRONTEND_STATE_MANAGEMENT.md), [41_CART.md](../41_CART.md).
