# ADR-008 — Caching

## Status

Accepted

## Decision

| Layer | Technology | Use |
| --- | --- | --- |
| Application cache / ephemeral | **Redis** | Product/CMS response cache, rate limits, refresh-session/blacklist support |
| HTTP / edge | Nginx (+ optional **CDN** TBD) | Hashed static assets; media URLs |
| Client | TanStack Query | UI server-state cache with invalidation |

PostgreSQL remains source of truth. Orders, payments, and inventory must not rely on Redis durability.

## Context

Catalog and CMS reads dominate traffic; auth abuse needs rate limiting; SPAs need coherent client caching.

## Alternatives

| Alternative | Why not |
| --- | --- |
| In-process only cache | Lost on multi-instance deploy |
| Redis as primary DB | Durability and query model risk |
| CDN-only without Redis | Does not solve API rate limits/session needs |

## Reason

Redis is in the mandated stack and fits cache + rate-limit + token support patterns.

## Consequences

- Admin writes must invalidate relevant Redis keys.
- Failure modes for Redis outage must be defined per use case (fail closed for admin auth abuse controls).
- Related docs: [67_REDIS_ARCHITECTURE.md](../67_REDIS_ARCHITECTURE.md), [102_PERFORMANCE_STANDARDS.md](../102_PERFORMANCE_STANDARDS.md).
