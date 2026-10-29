# ADR-002 — Backend Stack

## Status

Accepted

## Decision

Neurolinx backend is a **modular Spring Boot monolith** using:

- **Java 21+**
- **Spring Boot** (3.x line at implementation time)
- **Spring Security**
- **Spring Data JPA** + **Hibernate**
- **PostgreSQL**
- **Redis**
- **Flyway**
- **REST** + **OpenAPI** (springdoc)
- **Docker** packaging

No GraphQL and no WebFlux-as-primary for v1.

## Context

One API must serve public commerce, B2B enquiries, CMS/content, media, and admin operations with enterprise security and clear module boundaries.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Microservices from day one | Premature ops complexity |
| GraphQL primary API | Master spec mandates REST; dual contracts increase cost |
| Node/Nest or other backends | Stack mandate is Java/Spring |

## Reason

Fits relational commerce/RBAC domains, mature security ecosystem, and the documented modular package structure.

## Consequences

- Domain modules communicate via application services/events, not cross-module repository access.
- Schema changes only via Flyway.
- Related docs: [60_SPRING_BOOT_ARCHITECTURE.md](../60_SPRING_BOOT_ARCHITECTURE.md), [61_BACKEND_FOLDER_STRUCTURE.md](../61_BACKEND_FOLDER_STRUCTURE.md).
