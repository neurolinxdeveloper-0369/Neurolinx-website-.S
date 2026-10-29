# ADR-005 — API Architecture

## Status

Accepted

## Decision

- Style: **resource-oriented REST** over HTTPS
- Versioning: **`/api/v1`** (breaking changes → `/api/v2`)
- Format: JSON; multipart for uploads
- Docs: **OpenAPI 3** via springdoc
- Admin operations: **`/api/v1/admin/**`**
- Errors: shared RFC 7807-inspired problem payload via `@ControllerAdvice`
- Controllers expose **DTOs** only; Bean Validation on inputs
- Pagination: `page` / `size` / `sort` envelope

GraphQL is out of scope for v1.

## Context

Two React clients need a stable, documented contract with consistent errors and security boundaries.

## Alternatives

| Alternative | Why not |
| --- | --- |
| GraphQL | Extra complexity; not in master stack |
| Unversioned `/api` | Harder breaking-change management |
| Returning JPA entities | Leaks persistence model; mass-assignment risk |

## Reason

REST + OpenAPI aligns with Spring Boot strengths and frontend codegen/manual clients.

## Consequences

- Frontend must not invent alternate error shapes.
- Related docs: [62_API_ARCHITECTURE.md](../62_API_ARCHITECTURE.md), [53_FRONTEND_API_INTEGRATION.md](../53_FRONTEND_API_INTEGRATION.md), [91_API_SECURITY.md](../91_API_SECURITY.md).
