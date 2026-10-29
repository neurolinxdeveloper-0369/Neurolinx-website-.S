# ADR-003 — Database

## Status

Accepted

## Decision

- System of record: **PostgreSQL**
- ORM: **Hibernate** via Spring Data JPA
- Migrations: **Flyway** only in shared environments (`ddl-auto` validate/none in prod)
- Soft delete (`deleted_at`) for catalog/CMS/media metadata entities
- Audit columns on mutable tables; append-only `audit_logs` for privileged actions
- Money as `numeric` + currency code
- Multi-tenancy: **not required for v1**; single-tenant deployment assumed until product says otherwise

## Context

Commerce, inventory, orders, RBAC, enquiries, and CMS need transactional integrity and evolvable schema.

## Alternatives

| Alternative | Why not |
| --- | --- |
| MySQL / MariaDB | Spec locks PostgreSQL |
| MongoDB as primary store | Poor fit for relational orders/inventory/RBAC |
| Hibernate auto-DDL in prod | Unsafe drift; Flyway is source of truth |

## Reason

PostgreSQL + Flyway provides durable OLTP storage with controlled evolution.

## Consequences

- Redis must never be the source of truth for orders/payments/inventory.
- Soft-deleted rows need partial unique indexes where SKUs/slugs/emails apply.
- Related docs: [65_DATABASE_ARCHITECTURE.md](../65_DATABASE_ARCHITECTURE.md), [66_DATABASE_SCHEMA.md](../66_DATABASE_SCHEMA.md).
