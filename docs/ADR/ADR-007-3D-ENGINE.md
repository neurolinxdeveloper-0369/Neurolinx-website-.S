# ADR-007 — 3D Engine

## Status

Accepted

## Decision

| Layer | Ownership |
| --- | --- |
| Engine | **Three.js** + **React Three Fiber** + **Drei** in `apps/web` (lazy-loaded islands) |
| Formats | **GLB** preferred; **GLTF** supported |
| Product UX | Rotate, zoom, pan, lighting, materials, variants, exploded views, hotspots, annotations, configuration |
| Assets | Optimized for web; compression (Draco/meshopt) as pipeline matures |
| Mobile | Optimized path or **poster / fallback** — never block PDP |
| Admin | Attach 3D assets via media/product admin without code changes |

Documentation separation (mandatory):

1. Engine architecture → [80_3D_ARCHITECTURE.md](../80_3D_ARCHITECTURE.md), [81_THREE_JS_STANDARDS.md](../81_THREE_JS_STANDARDS.md)
2. Asset creation → [82_3D_MODEL_GUIDELINES.md](../82_3D_MODEL_GUIDELINES.md)
3. Product UX / interactions → [33_PRODUCT_3D_VIEWER.md](../33_PRODUCT_3D_VIEWER.md), [83_3D_PRODUCT_INTERACTIONS.md](../83_3D_PRODUCT_INTERACTIONS.md)
4. Performance → [84_3D_PERFORMANCE.md](../84_3D_PERFORMANCE.md)

## Context

Premium product visualization must enhance engineering credibility without harming performance or accessibility.

## Alternatives

| Alternative | Why not |
| --- | --- |
| Babylon.js | Outside mandated stack |
| Always-on full-page WebGL heroes | Conflicts with performance and brand usability rules |
| Native plugin viewers | Poor web/mobile fit |

## Reason

Matches master stack and allows progressive enhancement.

## Consequences

- 3D JS must be code-split from core PDP.
- Custom cursor/3D modes disable on touch and `prefers-reduced-motion`.
- Related docs as listed above.
