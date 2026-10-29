# Neurolinx Platform

Next-generation technology company and e-commerce platform foundation.

This repository contains the **production-grade project foundation** for Neurolinx. Feature development (homepage, products, cart, 3D viewer, admin modules, etc.) is intentionally deferred until later tasks.

The complete product and architecture specification lives in [`docs/`](./docs/README.md). Do not contradict those documents when implementing features.

## Architecture

```text
USER
  │
  ▼
React frontends
  ├── frontend/   (public: corporate + shop + account)  → docs apps/web
  └── admin/      (admin platform)                      → docs apps/admin
  │
  ▼
REST API  (/api, /api/v1)
  │
  ▼
Spring Boot (backend/)
  │
  ├── PostgreSQL
  ├── Redis
  └── File / media storage (later)
```

## Technology stack

| Layer | Stack |
| --- | --- |
| Public & Admin UI | React, TypeScript, Vite, React Router, Tailwind CSS |
| State | Zustand + TanStack Query |
| Motion / 3D (public) | GSAP, Framer Motion, Lenis, Three.js, R3F, Drei |
| Icons | Lucide |
| API | Java 21, Spring Boot 3.4, Spring Security, JPA, Flyway, OpenAPI |
| Data | PostgreSQL 16, Redis 7 |
| Local infra | Docker Compose (Postgres + Redis) |

> Naming note: Task 03 uses top-level `frontend/` and `admin/`. These map 1:1 to the documented `apps/web` and `apps/admin` boundaries (ADR-001).

## Repository structure

```text
├── frontend/           Public React application
├── admin/              Admin React application
├── backend/            Spring Boot API
├── docs/               Single source of truth (requirements + ADRs)
├── infrastructure/     Docker, Nginx, DB, monitoring templates
├── scripts/            Developer helper scripts
├── 3d-assets/          3D source assets (gitignored binaries)
├── media/              Local media placeholder
├── tests/              Cross-cutting E2E/API test homes
├── .github/            CI workflows
├── docker-compose.yml  Postgres + Redis for local development
├── .env.example        Environment placeholders (no secrets)
└── README.md
```

## Prerequisites

- Node.js 22+ and npm
- Java 21 (Temurin recommended)
- Docker Desktop (for Postgres + Redis)

## Environment configuration

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env
```

Leave `VITE_API_BASE_URL` empty in local development to use the Vite `/api` proxy to `http://localhost:8080`.

Never commit real credentials. Never commit a populated `.env`.

## Infrastructure startup

```bash
docker compose up -d
docker compose config   # validate compose file
docker compose ps
```

## Backend startup

```bash
cd backend
./mvnw spring-boot:run
# Windows:
.\mvnw.cmd spring-boot:run
```

Health checks:

- `GET http://localhost:8080/api/health` → `{ "status": "UP" }`
- `GET http://localhost:8080/api/v1/health` → `{ "status": "UP" }`

Useful Maven commands:

```bash
./mvnw test
./mvnw -DskipTests package
```

## Frontend startup (public)

```bash
cd frontend
npm install
npm run dev
```

Other commands:

```bash
npm run lint
npm run typecheck
npm run build
```

## Admin startup

```bash
cd admin
npm install
npm run dev
```

Admin runs on port **5174** by default (public on **5173**).

## Documentation

| Start here | Path |
| --- | --- |
| Docs index | [docs/README.md](./docs/README.md) |
| Vision | [docs/00_PROJECT_VISION.md](./docs/00_PROJECT_VISION.md) |
| Audit status | [docs/00_DOCUMENTATION_STATUS.md](./docs/00_DOCUMENTATION_STATUS.md) |
| ADRs | [docs/ADR/README.md](./docs/ADR/README.md) |
| Master specification | `Neurolinx — Next-Generation Technology & E-Commerce Platform.md` |

## Foundation scope

Included now:

- App shells, routing foundations, theme tokens
- API client + health check wiring
- Auth session integration points (no auth UI yet)
- Backend health API, security baseline, exception handler, Flyway baseline
- Docker Compose for Postgres + Redis

Not included yet (later tasks):

- Homepage / marketing pages
- Product catalog & database schema
- Cart, checkout, payments
- Authentication UI
- Admin CRUD modules
- 3D product viewer experiences
