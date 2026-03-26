# Project Plan: Car Supply Catalog (B2B) MVP

## Proposed Tech Stack
- **Framework:** Next.js (App Router) - modern file-based routing, SSR/CSR support
- **Styling:** Tailwind CSS utility classes - consistent UI, minimal CSS
- **Data:** Local JSON file for MVP product data - simple read-only storage
- **Build Tool:** npm scripts - standard Next.js workflow

## Architecture Overview
- `/app` - Next.js pages and API routes
- `/components` - reusable UI components (Landing, ProductCard, ContactForm)
- `/lib` - data fetching utilities and types
- `/public` - static assets (if any)
- `/styles` - Tailwind customizations (if needed)

## 3-Phase Development Plan

### Phase 1: MVP (Current Focus)
- Landing page with brand header and navigation
- Read‑only product catalog UI displaying products from JSON
- Simple contact form (no backend submission yet)
- Basic styling and responsive layout
- ✅ **Success criteria:** All pages render, catalog displays data, form shows input fields

### Phase 2: Data Integration
- Replace JSON with SQLite database
- Add data fetching with loading/error states
- Implement filtering/search (if requested later)
- Add basic analytics (page views)

### Phase 3: Polish & Launch
- Add backend API for contact form submissions
- Implement email notification (mocked initially)
- Add SEO meta tags and sitemap
- Prepare production build and deploy

## Folder Structure (Planned)
app/
  layout.tsx
  page.tsx            # Landing page
  catalog/
    page.tsx          # Product catalog UI
    [product]/page.tsx # Optional per‑product view
components/
  Landing.tsx
  ProductCard.tsx
  ContactForm.tsx
lib/
  products.json         # MVP data source
  utils.ts
styles/
  globals.css           # Tailwind base imports
```

## Data Model (MVP)
```json
[
  {
    "id": "1",
    "name": "Premium Floor Mats",
    "category": "Floor Protection",
    "price": "$199",
    "image": "/images/mats.jpg"
  },
  {
    "id": "2",
    "name": "LED Work Lights",
    "category": "Lighting",
    "price": "$89",
    "image": "/images/lights.jpg"
  }
  // Add up to 10 products for initial catalog
]
```

*All files will be TypeScript (.tsx) with explicit interfaces for props and data shapes.*