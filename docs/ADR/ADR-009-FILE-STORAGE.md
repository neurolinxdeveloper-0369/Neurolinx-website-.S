# ADR-009 — File Storage

## Status

Accepted

## Decision

- Introduce a **`StorageService` port** with adapters:
  - **Local filesystem** for development
  - **S3-compatible** object storage for staging/production (AWS S3, MinIO, or equivalent — vendor **TBD**)
- Store **metadata and object keys in PostgreSQL**; binaries in object storage
- Optional **CDN** in front of public media URLs (**provider TBD**)
- Enforce upload security ([93_FILE_UPLOAD_SECURITY.md](../93_FILE_UPLOAD_SECURITY.md)) for images, video, documents, and GLB/GLTF

## Context

Products need images, videos, datasheets, manuals, and 3D models managed from admin without code deploys.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Blobs in PostgreSQL | Poor scalability and backup cost |
| Local disk only in production | Fragile on multi-node / container replace |
| Vendor SDK calls scattered in domain code | Tight coupling |

## Reason

Abstraction keeps domain code portable while supporting real media volumes.

## Consequences

- Switching local→S3 is configuration-only per environment.
- Related docs: [68_FILE_STORAGE.md](../68_FILE_STORAGE.md), [76_ADMIN_MEDIA_MANAGEMENT.md](../76_ADMIN_MEDIA_MANAGEMENT.md), [36_PRODUCT_MEDIA.md](../36_PRODUCT_MEDIA.md).
