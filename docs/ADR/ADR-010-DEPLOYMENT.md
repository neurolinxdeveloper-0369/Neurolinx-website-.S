# ADR-010 — Deployment

## Status

Accepted

## Decision

| Topic | Choice |
| --- | --- |
| Packaging | **Docker** images for web, admin, API |
| Local/staging orchestration | **Docker Compose** |
| Edge | **Nginx** reverse proxy, TLS termination, SPA routing, static assets |
| Environments | Development, Staging, Production |
| Target | Production **VPS** (or equivalent VM) initially |
| Data | PostgreSQL + Redis (+ media volume or S3-compatible) |
| Pipeline | CI build/test → deploy staging → promote production ([123_CI_CD.md](../123_CI_CD.md)) |
| Observability | Health checks, logging, error tracking, backups |

Exact domains, CDN vendor, and CI platform remain **TBD** but architecture above is locked.

## Context

The platform must be deployable as a professional production system with HTTPS, backups, and monitoring before feature sprawl.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Kubernetes from day one | Unnecessary ops overhead for initial VPS scale |
| PaaS-only without containers | Harder local parity with Compose |
| Serving SPA from Spring Boot static resources as long-term model | Couples release cadences; Nginx/static hosting preferred |

## Reason

Matches master infrastructure requirements and keeps frontend/backend deployables independent.

## Consequences

- Compose service set: nginx, web, admin, api, postgres, redis (+ optional workers later).
- Related docs: [120_DEPLOYMENT_ARCHITECTURE.md](../120_DEPLOYMENT_ARCHITECTURE.md), [121_DOCKER_ARCHITECTURE.md](../121_DOCKER_ARCHITECTURE.md), [122_NGINX_CONFIGURATION.md](../122_NGINX_CONFIGURATION.md).
