# ADR-006 — Authentication

## Status

Accepted

## Decision

| Topic | Choice |
| --- | --- |
| Access token | Short-lived **JWT**, sent as `Authorization: Bearer` |
| Access storage (SPA) | **In-memory only** (not `localStorage`) |
| Refresh token | Rotatable; stored server-side (DB/Redis hashed/session) |
| Refresh delivery to SPA | **HttpOnly + Secure + SameSite cookie** |
| Password storage | Spring Security `PasswordEncoder` — **Argon2id preferred**, BCrypt acceptable |
| CSRF | Required for cookie-authenticated refresh/logout endpoints |
| Social login / OAuth / OIDC | **Not required for v1** — future **TBD** |
| Admin MFA | Recommended; mandate **TBD** |

Guest cart may exist without login ([41_CART.md](../41_CART.md)); guest checkout policy remains **TBD**.

## Context

Stateless API nodes need scalable auth while limiting XSS token theft for SPAs.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Access + refresh both in JSON body / localStorage | Higher XSS impact |
| Cookie-only session for all API calls | Heavier CSRF surface; less flexible for pure Bearer tooling |
| OAuth-only from day one | Provider and product requirements unspecified |

## Reason

Balances SPA UX with XSS mitigation; aligns Spring Security practices.

## Consequences

- Frontends call auth/refresh with `credentials: 'include'`.
- CORS must allowlist web/admin origins with credentials where needed.
- Related docs: [63_AUTHENTICATION.md](../63_AUTHENTICATION.md), [90_SECURITY_ARCHITECTURE.md](../90_SECURITY_ARCHITECTURE.md), [91_API_SECURITY.md](../91_API_SECURITY.md).
