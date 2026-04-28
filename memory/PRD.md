# Radha Madhav Wholesale Family Mart — Frontend Website

## Original Problem Statement
Build a premium, emotionally engaging, mobile-first frontend-only website for Radha Madhav Wholesale Family Mart (Gorakhpur). Site should feel grand, trusted, and family-friendly with strong emotional connect (Hindi/English mix), encouraging in-store visits (no online sales). Multipage site with bottom mobile nav, floating WhatsApp button, festive popup, countdown offer timer, reel-style scroll, animations.

## User Choices (confirmed)
- 1a — Frontend-only (forms open WhatsApp deep links, no backend)
- 2a — Stock images (Pexels Indian wedding photos)
- 3a — WhatsApp number 9151687774
- "Grand site look" aesthetic

## Architecture
- React 19 + react-router-dom v7 + Tailwind CSS (CRA + craco)
- No backend, no MongoDB. All forms `window.open(wa.me/919151687774?text=...)`.
- Assets: User-provided showroom image, logo, 4 reel videos at /app/frontend/public/assets/

## Pages Implemented (7)
- `/` Home — hero video, emotional connect, occasions, 3 collection groups, offers+countdown, membership strip, reels, trust/Yogi inauguration, gallery preview, testimonials, visit-store
- `/collections` — page banner, style suggestion tool (Gender/Occasion/Budget → WA), 11 filter chips, product grid (12 items, click → WA)
- `/offers` — 4 primary offers + countdown + 4 perks (free alteration etc.)
- `/membership` — 6 benefits + sign-up form (Name/Phone/City → WA + success state)
- `/gallery` — reels (3 videos) + masonry photo gallery + lightbox
- `/about` — story, 4 values, CTA
- `/contact` — 3 info cards, contact form (WA), embedded Google Map

## Design System
- Colors: Maroon `#6A1E2C`, Gold `#C9A646`, Cream `#F8F5F0`
- Fonts: Cinzel (royal), Playfair Display (display), Cormorant Garamond (italic accents), Tangerine (script), Poppins (body)
- Components: Royal cards w/ gold corner ornaments, gold dividers, mandala SVGs, paisley, shimmer text, marquee, parallax hero, scroll-reveal animations, hover-zoom, tilt cards.

## Cross-cutting Components
- `Layout.jsx` — top marquee strip, sticky-on-scroll glass nav, mobile hamburger drawer, mobile bottom nav (5 items), floating WhatsApp, sticky Visit Store, festive popup ("Shubh Vivah" — 5.5s delay, sessionStorage gate), footer.
- `CountdownTimer.jsx` — 7-day rolling countdown.
- `Ornaments.jsx` — SVG ornament, mandala, paisley.
- `useReveal.js` — IntersectionObserver-based scroll reveal.

## Test Report
Iteration 1: 30/30 frontend assertions passed (100%). All 7 routes resolve, navigation/forms/popup/lightbox/filters/stylist-tool/map/logo all functional. WhatsApp deep links contain `wa.me/919151687774`.

## What's Implemented (2025-12 → 2026-02)
- Full responsive multipage site (desktop + mobile)
- Premium royal aesthetic, hero video, animations
- All forms WhatsApp-integrated
- Festive popup, countdown timer, reel-style videos
- SEO meta + JSON-LD ClothingStore schema
- 70+ data-testid attributes for testability
- 2026-02-28: New gold-italic wordmark header logo (replaced white-pill PNG); existing logo retained in mobile drawer & footer.
- 2026-02-28: Category-accurate stock photos (verified Unsplash URLs) — Haldi clearly yellow, Wedding/Bridal clearly red+gold.
- 2026-02-28: Added "Artificial Jewellery" collection group (6 items) + new offer "Artificial Jewellery Bonanza".
- 2026-02-28: Final logo polish — header/footer use only PNG logo with gold drop-shadow glow (no white pill, no redundant text).
- 2026-02-28: Designated Partners section added to About page (Hari, Naveen, Nikunj, Rachit, Parth Agrawal); footer copyright row also lists them.
- 2026-02-28: Kids images replaced with category-accurate Indian kids ethnic wear photos; expanded family group to 6 items (Toddler Festive Outfit, Mother & Child Combo added).
- 2026-02-28: NEW Skintone Color Match Tool on Collections page — 4 skintones (Fair/Wheatish/Dusky/Deep) → 6 matched fashion colors per tone + WhatsApp CTA.

## Backlog / Next Tasks
- P1: Wire real Instagram embed if business token provided
- P1: Replace stock photos with actual showroom photoshoot when available
- P2: Add a small backend (FastAPI + Mongo) to capture membership/contact submissions instead of WhatsApp-only
- P2: Add multi-language toggle (Hindi/English)
- P2: Bulk-purchase quote calculator
- P2: Image optimisation / lazy-loading via next/image-style helper
