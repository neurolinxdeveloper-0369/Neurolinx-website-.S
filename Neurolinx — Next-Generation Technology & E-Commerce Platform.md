# Neurolinx — Next-Generation Technology & E-Commerce Platform

## Master Project Documentation & Development Specification

---

## 1. Project Overview

This project is the complete modernization and redevelopment of the **Neurolinx** digital platform.

The objective is to transform the existing Neurolinx website into a **high-end, enterprise-grade technology company and e-commerce platform** using modern web technologies, premium UI/UX, advanced animations, interactive 3D experiences, product visualization, engineering content, and scalable backend architecture.

The new platform must communicate:

- Technology leadership
- Engineering capability
- Innovation
- Reliability
- Premium product quality
- Industrial expertise
- Research & Development
- IoT and automation expertise
- Professional corporate identity
- E-commerce capability

The final experience should feel like a combination of:

- A premium global technology company
- A modern electronics/engineering company
- A high-end product showcase
- A professional B2B platform
- A modern B2C e-commerce platform
- An interactive 3D technology experience

The website must be professional enough for enterprise customers while remaining visually impressive and easy to use.

---

# 2. Primary Technology Stack

## Frontend

Use:

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- Framer Motion
- Lenis
- Zustand
- TanStack Query
- Lucide Icons

The frontend must be component-driven, scalable, responsive, accessible, and production-ready.

---

## Backend

Use:

- Java 21+
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- PostgreSQL
- Redis
- Flyway
- REST APIs
- OpenAPI
- Docker

The backend must use clean modular architecture and follow enterprise software engineering practices.

---

## Infrastructure

The platform should support:

- Docker
- Docker Compose
- Nginx
- HTTPS
- CI/CD
- Production VPS deployment
- Database backups
- Monitoring
- Logging
- Health checks
- Error tracking

Infrastructure documentation must be prepared before implementation.

---

# 3. Critical Instruction to Cursor

## Documentation First

**DO NOT start application development immediately.**

The first objective is to create the complete project documentation.

The `docs/` directory will become the **single source of truth** for the entire project.

Before implementing any feature, developers and AI agents must read the relevant documentation.

The documentation must define:

- Business requirements
- Product requirements
- User roles
- Website structure
- UI/UX
- Design system
- Components
- Animations
- 3D architecture
- Product architecture
- E-commerce
- React architecture
- Spring Boot architecture
- Database
- APIs
- Security
- Admin system
- SEO
- Accessibility
- Testing
- Deployment
- Monitoring

Do not create empty placeholder files.

Every Markdown file must contain useful, structured documentation.

---

# 4. Documentation Creation Rules

Create all required Markdown files listed in this README.

For every document:

1. Define its purpose.
2. Explain the relevant requirements.
3. Define technical decisions where applicable.
4. Define functional requirements.
5. Define non-functional requirements.
6. Define dependencies.
7. Define constraints.
8. Define acceptance criteria where applicable.
9. Include diagrams using Mermaid where useful.
10. Cross-reference related documentation.

Do not duplicate large sections unnecessarily.

If two documents depend on each other, reference the other document.

---

# 5. Documentation Structure

Create the following directory:

```text
docs/
```

Create all of the following files.

---

# 6. Project Vision & Requirements

```text
docs/
├── 00_PROJECT_VISION.md
├── 01_PROJECT_OBJECTIVES.md
├── 02_BUSINESS_REQUIREMENTS.md
├── 03_PRODUCT_REQUIREMENTS.md
└── 04_USER_ROLES.md
```

These documents define:

- Why the project exists
- Business goals
- Product goals
- Target users
- Customer journeys
- Business requirements
- Functional requirements
- Non-functional requirements
- User roles
- Permissions
- Success criteria

---

# 7. Brand & Design System

```text
docs/
├── 10_BRAND_GUIDELINES.md
├── 11_DESIGN_SYSTEM.md
├── 12_COLOR_SYSTEM.md
├── 13_TYPOGRAPHY.md
├── 14_SPACING_AND_LAYOUT.md
├── 15_COMPONENT_LIBRARY.md
├── 16_ICONOGRAPHY.md
├── 17_IMAGE_GUIDELINES.md
├── 18_MOTION_DESIGN.md
└── 19_MOUSE_INTERACTIONS.md
```

Define the complete Neurolinx visual language.

The design must be:

- Premium
- Modern
- Professional
- Enterprise-grade
- Technology-focused
- Clean
- Responsive
- Accessible

Avoid excessive futuristic effects that reduce usability.

The visual system should combine:

**Corporate credibility + advanced technology + premium product design.**

---

# 8. Website Architecture & UX

```text
docs/
├── 20_WEBSITE_INFORMATION_ARCHITECTURE.md
├── 21_PAGE_INVENTORY.md
├── 22_NAVIGATION.md
├── 23_HOMEPAGE_DESIGN.md
├── 24_COMPANY_PAGES.md
├── 25_TECHNOLOGY_PAGES.md
├── 26_INDUSTRY_PAGES.md
└── 27_CONTACT_AND_ENQUIRY.md
```

Define every public-facing page.

The website should include areas such as:

- Home
- About Neurolinx
- Products
- Solutions
- Technologies
- Industries
- Engineering
- R&D
- Projects
- Resources
- Blog
- Contact
- Enquiry
- Shop

The exact page architecture must be documented before implementation.

---

# 9. Product Architecture

```text
docs/
├── 30_PRODUCT_ARCHITECTURE.md
├── 31_PRODUCT_LISTING.md
├── 32_PRODUCT_DETAILS.md
├── 33_PRODUCT_3D_VIEWER.md
├── 34_PRODUCT_CONFIGURATOR.md
├── 35_PRODUCT_COMPARISON.md
└── 36_PRODUCT_MEDIA.md
```

Products must support:

- Product categories
- Product variants
- Specifications
- Images
- Videos
- Technical documents
- Datasheets
- Manuals
- 3D models
- Product galleries
- Pricing
- Stock
- Enquiry
- Add to cart
- Buy now
- Related products
- Product comparison

---

# 10. 3D Product Experience

The platform must support interactive 3D product experiences.

Technology:

- Three.js
- React Three Fiber
- Drei

Support:

- GLB
- GLTF

The 3D system should support:

- Rotation
- Zoom
- Pan
- Camera controls
- Lighting
- Material changes
- Product variants
- Exploded views
- Component highlighting
- Hotspots
- Technical annotations
- Interactive assembly
- Product configuration

3D assets must be optimized for web delivery.

Mobile devices must have optimized 3D experiences or suitable fallback experiences.

---

# 11. E-Commerce Architecture

```text
docs/
├── 40_ECOMMERCE_ARCHITECTURE.md
├── 41_CART.md
├── 42_CHECKOUT.md
├── 43_PAYMENT.md
├── 44_ORDER_MANAGEMENT.md
├── 45_CUSTOMER_ACCOUNT.md
├── 46_WISHLIST.md
├── 47_REVIEWS.md
└── 48_COUPONS.md
```

The e-commerce platform should support:

- Product discovery
- Search
- Filters
- Categories
- Product details
- Cart
- Wishlist
- Checkout
- Address management
- Payment
- Orders
- Order tracking
- Reviews
- Coupons
- Customer accounts
- Invoices
- Notifications

The architecture must also support future expansion.

---

# 12. React Frontend Architecture

```text
docs/
├── 50_REACT_ARCHITECTURE.md
├── 51_FRONTEND_FOLDER_STRUCTURE.md
├── 52_FRONTEND_STATE_MANAGEMENT.md
├── 53_FRONTEND_API_INTEGRATION.md
├── 54_FRONTEND_PERFORMANCE.md
└── 55_RESPONSIVE_DESIGN.md
```

Define:

- Application architecture
- Component architecture
- Folder structure
- Routing
- State management
- API communication
- Error handling
- Loading states
- Authentication state
- Caching
- Performance
- Responsive behavior

---

# 13. Spring Boot Backend Architecture

```text
docs/
├── 60_SPRING_BOOT_ARCHITECTURE.md
├── 61_BACKEND_FOLDER_STRUCTURE.md
├── 62_API_ARCHITECTURE.md
├── 63_AUTHENTICATION.md
├── 64_AUTHORIZATION_RBAC.md
├── 65_DATABASE_ARCHITECTURE.md
├── 66_DATABASE_SCHEMA.md
├── 67_REDIS_ARCHITECTURE.md
└── 68_FILE_STORAGE.md
```

Define a scalable modular backend.

Potential modules:

- Authentication
- Users
- Customers
- Products
- Categories
- Inventory
- Cart
- Orders
- Payments
- Shipping
- Reviews
- Coupons
- Enquiries
- Projects
- Content
- Media
- Notifications
- Administration
- Analytics

---

# 14. Admin Platform

```text
docs/
├── 70_ADMIN_ARCHITECTURE.md
├── 71_ADMIN_DASHBOARD.md
├── 72_ADMIN_PRODUCTS.md
├── 73_ADMIN_ORDERS.md
├── 74_ADMIN_CUSTOMERS.md
├── 75_ADMIN_CONTENT_MANAGEMENT.md
├── 76_ADMIN_MEDIA_MANAGEMENT.md
└── 77_ADMIN_ANALYTICS.md
```

The admin platform must allow authorized users to manage the entire platform without directly editing source code.

Admin functionality should include:

- Dashboard
- Products
- Categories
- Inventory
- Orders
- Customers
- Payments
- Enquiries
- Projects
- Content
- Media
- Blog
- Reviews
- Coupons
- Analytics
- Settings
- User management
- Audit logs

---

# 15. 3D Engineering Documentation

```text
docs/
├── 80_3D_ARCHITECTURE.md
├── 81_THREE_JS_STANDARDS.md
├── 82_3D_MODEL_GUIDELINES.md
├── 83_3D_PRODUCT_INTERACTIONS.md
└── 84_3D_PERFORMANCE.md
```

Define standards for:

- 3D models
- Polygon limits
- Materials
- Textures
- Lighting
- Cameras
- Animations
- Interaction
- Mobile optimization
- Loading
- Compression
- Fallbacks
- Accessibility

---

# 16. Security

```text
docs/
├── 90_SECURITY_ARCHITECTURE.md
├── 91_API_SECURITY.md
├── 92_DATA_SECURITY.md
├── 93_FILE_UPLOAD_SECURITY.md
└── 94_PAYMENT_SECURITY.md
```

Document:

- Authentication
- Authorization
- RBAC
- JWT
- Refresh tokens
- Password security
- API security
- Input validation
- XSS protection
- SQL injection protection
- CSRF where applicable
- Rate limiting
- File upload security
- Session security
- Admin security
- Audit logs
- Payment security

---

# 17. SEO, Accessibility & Performance

```text
docs/
├── 100_SEO_STRATEGY.md
├── 101_ACCESSIBILITY.md
├── 102_PERFORMANCE_STANDARDS.md
└── 103_ANALYTICS.md
```

Define standards for:

- SEO
- Structured data
- Product schema
- OpenGraph
- Sitemap
- Robots.txt
- Canonical URLs
- Semantic HTML
- WCAG accessibility
- Core Web Vitals
- Image optimization
- 3D optimization
- Analytics
- Conversion tracking

---

# 18. Testing

```text
docs/
├── 110_TESTING_STRATEGY.md
├── 111_FRONTEND_TESTING.md
├── 112_BACKEND_TESTING.md
├── 113_E2E_TESTING.md
└── 114_SECURITY_TESTING.md
```

Define:

- Unit testing
- Integration testing
- API testing
- Component testing
- E2E testing
- Authentication testing
- E-commerce testing
- Payment testing
- Security testing
- Responsive testing
- Browser testing
- Performance testing

---

# 19. DevOps & Production

```text
docs/
├── 120_DEPLOYMENT_ARCHITECTURE.md
├── 121_DOCKER_ARCHITECTURE.md
├── 122_NGINX_CONFIGURATION.md
├── 123_CI_CD.md
├── 124_BACKUP_AND_RECOVERY.md
└── 125_MONITORING_AND_LOGGING.md
```

Define:

- Development environment
- Staging
- Production
- Docker
- Docker Compose
- Nginx
- HTTPS
- Domain architecture
- CI/CD
- Database backups
- Disaster recovery
- Monitoring
- Logs
- Health checks
- Alerting

---

# 20. Visual Experience Requirements

The new website must include premium visual experiences where they improve the user experience.

Potential technologies:

```text
Three.js
React Three Fiber
GSAP
Framer Motion
Lenis
WebGL
SVG
CSS animations
```

Possible experiences:

- Interactive hero
- 3D products
- Scroll-driven animations
- Product rotations
- Exploded product views
- Animated technology diagrams
- Particle effects
- Interactive cards
- Magnetic buttons
- Custom cursor
- Hover transitions
- Image transitions
- Page transitions
- Section reveals
- Parallax effects

Animations must never compromise:

- Performance
- Accessibility
- Readability
- Navigation
- Mobile usability

---

# 21. Custom Mouse Experience

Implement a custom cursor system where appropriate.

Possible states:

```text
DEFAULT
LINK
BUTTON
VIEW
DRAG
ROTATE
ZOOM
IMAGE
3D
TEXT
```

Example:

```text
Default → small cursor
Button → interactive cursor
3D model → "Rotate"
Image → "View"
Draggable area → "Drag"
```

The cursor must automatically disable or simplify itself on:

- Touch devices
- Mobile devices
- Accessibility configurations
- Reduced-motion preferences

---

# 22. Image Strategy

Images are an important part of the Neurolinx brand.

Use high-quality imagery for:

- Products
- Engineering
- Manufacturing
- Electronics
- R&D
- Automation
- IoT
- Smart home
- Industrial systems
- Team
- Projects

Prefer:

- Original Neurolinx photography
- Professionally generated product imagery
- Optimized WebP/AVIF
- Responsive image sizes

Do not use random generic stock images when authentic Neurolinx imagery is available.

---

# 23. Product 3D Strategy

Each suitable physical product should eventually support:

```text
Product
│
├── Images
├── Video
├── 3D Model
├── Specifications
├── Variants
├── Technical Drawing
├── Datasheet
├── Manual
└── Accessories
```

The platform must be designed so that new 3D products can be added from the admin system.

---

# 24. Corporate Experience

The website must communicate Neurolinx as a serious engineering and technology company.

Important areas:

- Company
- R&D
- Engineering
- Technologies
- Industries
- Projects
- Certifications
- Manufacturing
- Innovation
- Careers
- Contact

The corporate experience should emphasize credibility rather than excessive visual effects.

---

# 25. E-Commerce Experience

The shop should feel like a premium electronics marketplace.

Include:

- Product discovery
- Intelligent search
- Filters
- Sorting
- Product comparison
- Product visualization
- Specifications
- Cart
- Checkout
- Payments
- Orders
- Customer accounts

The architecture must support both:

**B2C commerce**

and:

**B2B enquiry / quotation workflows.**

---

# 26. B2B Enquiry System

Products may support:

```text
Buy Now
Add to Cart
Request Quote
Contact Sales
Download Datasheet
```

Quotation workflows should support:

- Customer details
- Company
- Quantity
- Product
- Requirements
- Attachments
- Notes
- Sales status
- Admin assignment
- Follow-up

---

# 27. Future Expansion

The architecture must allow future integration with:

- IoT devices
- Smart home applications
- Device management
- MQTT
- Cloud platforms
- Mobile applications
- AI services
- Customer support
- CRM
- ERP
- Inventory systems
- Payment gateways
- Shipping providers

Do not tightly couple the architecture to one future integration.

---

# 28. Documentation Quality Standard

Every document must be:

- Professional
- Clear
- Structured
- Technical where necessary
- Understandable
- Implementation-ready
- Cross-referenced

Use:

- Markdown
- Tables
- Mermaid diagrams
- Code blocks where necessary
- Checklists
- Acceptance criteria

Avoid:

- Generic filler
- Repeated information
- Unsupported assumptions
- Ambiguous requirements

When a requirement is unknown, explicitly mark it:

```text
TBD
```

Do not invent business requirements.

---

# 29. Master Architecture Principle

The system should follow:

```text
                    NEUROLINX PLATFORM
                           │
             ┌─────────────┴─────────────┐
             │                           │
        PUBLIC PLATFORM             ADMIN PLATFORM
             │                           │
          React                       React
             │                           │
             └─────────────┬─────────────┘
                           │
                      REST API
                           │
                    Spring Boot
                           │
             ┌─────────────┼─────────────┐
             │             │             │
         PostgreSQL       Redis       Storage
```

The frontend and backend must remain cleanly separated.

---

# 30. Development Philosophy

Development must be incremental.

Do not attempt to build the entire application in one operation.

The intended development order is:

```text
Documentation
      ↓
Architecture
      ↓
Design System
      ↓
Frontend Foundation
      ↓
Backend Foundation
      ↓
Database
      ↓
Global UI
      ↓
Homepage
      ↓
Corporate Pages
      ↓
Products
      ↓
3D Engine
      ↓
Product 3D
      ↓
E-Commerce
      ↓
Authentication
      ↓
Customer Account
      ↓
Admin
      ↓
CMS
      ↓
Security
      ↓
SEO
      ↓
Testing
      ↓
Performance
      ↓
Deployment
```

---

# 31. Cursor Operating Rules

Cursor must follow these rules during development.

### Rule 1

Read the relevant documentation before coding.

### Rule 2

Do not create architecture that conflicts with the documentation.

### Rule 3

Do not silently change major architecture.

### Rule 4

Do not remove existing functionality without explicit approval.

### Rule 5

Do not introduce unnecessary dependencies.

### Rule 6

Do not duplicate components unnecessarily.

### Rule 7

Keep frontend and backend responsibilities separated.

### Rule 8

Security must be considered for every backend feature.

### Rule 9

Performance must be considered for every visual feature.

### Rule 10

Update documentation when an approved architecture change occurs.

---

# 32. Initial Cursor Task

## TASK 01 — CREATE COMPLETE PROJECT DOCUMENTATION

For the first task, do **not develop the React application**.

Do **not develop the Spring Boot application**.

Do **not create the database**.

Do **not create 3D models**.

Do **not implement e-commerce**.

Do **not implement authentication**.

Only create and populate the complete `docs/` structure defined in this README.

### Requirements

1. Create the `docs/` directory.
2. Create every Markdown file listed above.
3. Populate every file with meaningful documentation.
4. Add cross-references between related documents.
5. Use Mermaid diagrams where useful.
6. Avoid duplicate content.
7. Mark unknown requirements as `TBD`.
8. Do not invent unknown business rules.
9. Create `docs/README.md`.
10. Ensure the documentation is internally consistent.

After creating the documentation:

Create a documentation index in:

```text
docs/README.md
```

The index must link to every document.

---

# 33. Documentation Completion Criteria

Task 01 is complete only when:

- All required Markdown files exist.
- No file is empty.
- All documents contain useful content.
- All documents are internally consistent.
- The architecture is clearly defined.
- The frontend architecture is documented.
- The backend architecture is documented.
- Database architecture is documented.
- E-commerce architecture is documented.
- 3D architecture is documented.
- Design system is documented.
- Animation system is documented.
- Security is documented.
- SEO is documented.
- Accessibility is documented.
- Testing is documented.
- Deployment is documented.
- Admin architecture is documented.
- Documentation index exists.
- All files are linked from `docs/README.md`.

---

# 34. Do Not Start Implementation Yet

After completing Task 01, stop.

Do not automatically continue to React development.

Do not automatically continue to Spring Boot development.

Do not automatically generate the database.

Do not automatically create components.

Report:

```text
DOCUMENTATION COMPLETE

Files created: XX
Documentation sections: XX
Architecture status: COMPLETE
Missing/TBD items: XX

Ready for Task 02.
```

The next development task will only begin after the documentation has been reviewed and approved.

---

# 35. Final Vision

The final Neurolinx platform should become a **high-end digital technology platform**, not merely a redesigned website.

It should combine:

```text
                    NEUROLINX
                       │
       ┌───────────────┼────────────────┐
       │               │                │
    CORPORATE       TECHNOLOGY       E-COMMERCE
       │               │                │
    Company          IoT              Products
    R&D              AI               Cart
    Projects         Automation       Checkout
    Engineering      Embedded         Orders
       │               │                │
       └───────────────┼────────────────┘
                       │
                  3D EXPERIENCE
                       │
              Three.js / WebGL
                       │
               Premium Motion
                       │
                Global Platform
```

The target is a **professional, scalable, visually exceptional, secure, high-performance Neurolinx platform** capable of representing the company's technology, engineering, products, projects, and future digital ecosystem.

The design must be impressive enough to create a strong first impression while remaining professional, trustworthy, accessible, fast, and commercially usable.