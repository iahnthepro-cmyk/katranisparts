# TODO.md - Phase 1 MVP Tasks

- [x] Set up Next.js project with Tailwind CSS
- [x] Create landing page (`app/page.tsx`) with header and basic layout
- [x] Implement product catalog UI (`app/catalog/page.tsx`) that reads from `lib/products.json`
- [x] Create `ProductCard` component to display product name, category, price, and image
- [x] Add simple contact form page (`app/contact/page.tsx`) with name, email, message fields
- [x] Style all components with Tailwind utility classes
- [x] Ensure responsiveness for desktop and mobile views
- [x] Test that all pages render without errors
- [x] Update `TODO.md` to mark completed tasks

## Phase 2: Data Integration (Completed)
- [x] Replace JSON with SQLite database (better-sqlite3)
- [x] Create data-access layer (`lib/db.ts`) with `getAllProducts()`
- [x] Update catalog to use DB with loading/error states
- [x] Add database seeding

## Phase 3: Polish & Launch (Next)
- [x] Add backend API for contact form submissions
- [x] Implement email notification (mocked)
- [x] Add SEO meta tags and sitemap
- [x] Prepare production build and deploy
