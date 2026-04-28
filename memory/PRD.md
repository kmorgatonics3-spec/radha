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

## What's Implemented (2025-12)
- Full responsive multipage site (desktop + mobile)
- Premium royal aesthetic, hero video, animations
- All forms WhatsApp-integrated
- Festive popup, countdown timer, reel-style videos
- SEO meta + JSON-LD ClothingStore schema
- 70+ data-testid attributes for testability

## Backlog / Next Tasks
- P1: Wire real Instagram embed if business token provided
- P1: Replace Pexels stock with actual showroom photoshoot when available
- P2: Add a small backend (FastAPI + Mongo) to capture membership/contact submissions instead of WhatsApp-only
- P2: Add multi-language toggle (Hindi/English)
- P2: Bulk-purchase quote calculator
- P2: Image optimisation / lazy-loading via next/image-style helper
