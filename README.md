# Frontend — Atif Moin Portfolio

React 19 + Vite + TypeScript single-page app. Lives in this `Frontend/` folder (repo
`Atifmoin19/NextPortfolio`, working branch `new_ui`). Deployed on **Vercel** (project
`portfolio`) at **https://portfolio-henna-three-70.vercel.app** — see "Deployment" below.
The old GitHub Pages build (`gh-pages` branch, base `/NextPortfolio/`) is retired.

## Stack

- **React 19 + Vite + TypeScript**
- **Chakra UI v2** — component library, extended with a custom theme in `main.tsx`
- **Framer Motion** (`framer-motion`) — all animation/motion
- **Three.js** (`three`, raw — no react-three-fiber) — the Hero headline particle-text effect
- **Redux Toolkit** (`react-redux`) — `portfolioSlice` holds the fetched Firestore content
- **react-router-dom** (`HashRouter`) — kept from the GitHub Pages days (no server-side
  rewrites there); `vercel.json` also rewrites everything to `index.html`, so switching to
  `BrowserRouter` is possible later. Routes are hash-based (`/#/project/foo`, `/#/admin/login`, etc.)
- **Firebase** (client SDK) — public, read-only fetch of portfolio content from Firestore
- **Lenis** (`@studio-freight/lenis`) + **GSAP ScrollTrigger** — smooth scrolling
- **react-hook-form** — Contact form
- **EmailJS** — Contact form submission
- **react-ga4** — pageview tracking
- **recharts** — admin dashboard analytics charts

## Folder structure

```
Frontend/src/
  main.tsx                 # ReactDOM root, ChakraProvider + theme, Redux Provider
  App.tsx                  # HashRouter, route table, mounts CommandPalette/ChatWidget/
                            #   MotionOptInPill globally, wraps everything in
                            #   MotionPreferenceProvider
  index.css                # design tokens (CSS custom properties), bento card classes
  pages/
    Home.tsx                # the single-page portfolio (preloader + all sections)
    ProjectDetail.tsx        # case-study page, /project/:slug
    admin/
      Login.tsx              # admin login (posts to backend /auth/login)
      Dashboard.tsx           # admin home: view-count stat, referrer chart, quick links
      ContentEditor.tsx       # full CRUD editor for the portfolio content document
  components/
    layout/
      Navbar.tsx              # floating glass pill nav, ⌘K button, mobile drawer
      Preloader.tsx           # loading screen incl. signature write-in + fly-to-hero handoff
      SmoothScroll.tsx        # mounts Lenis + GSAP ScrollTrigger, wraps all routes
      FloatingBackground.tsx  # ambient fixed blobs behind the whole page
      ScrollProgress.tsx      # top scroll-progress bar
      Footer.tsx
    sections/                # the Home page sections (see below) + FeaturedProject
                              #   (Backend City showcase rendered inside Projects)
    shared/
      CommandPalette.tsx      # ⌘K palette — nav shortcuts + hidden "Admin login" entry
      ChatWidget.tsx          # floating AI chat bubble, calls backend /chat
      Magnetic.tsx            # cursor-following wrapper (buttons), damped-lerp based
      ScreenGallery.tsx       # case-study viewer: one large screenshot + clickable thumbnails
      MotionOptInPill.tsx     # "Reduced motion is on · View animated version" opt-in,
                              #   only renders for visitors whose OS has it on
    webgl/
      ParticleText.tsx        # Hero headline as a raw three.js point cloud - samples the
                              #   real text onto a 2D canvas, converges from off-screen on
                              #   mount, pulls toward the cursor within a radius afterward
  data/content.ts           # TS interfaces (Skill/Project/Testimonial/...) + the seed data
  data/featured.ts          # the flagship project (Backend City), in code, not Firestore
  utils/resumeUrl.ts        # rewrites a stored localhost resume link to the real API
  services/
    portfolioService.ts      # Firestore reads (public, falls back to data/content.ts if
                              #   the client is offline/unreachable) + legacy analytics helpers
    apiClient.ts              # backend calls: login, getContent, saveContent, chat
  store/                    # Redux: portfolioSlice (async thunk fetches Firestore doc)
  hooks/
    useLerpMotionValue.ts     # rAF damped-lerp Framer Motion value (no spring bounce)
    useFirebasePagination.ts  # paginated Firestore reads (admin dashboard tables)
  lib/
    smoothScroll.ts          # scrollToId/scrollToTop — routes every nav jump through Lenis
    motionPreference.tsx      # MotionPreferenceProvider + useReducedMotion() - the shared
                              #   override-aware replacement for framer-motion's own hook
                              #   of the same name (see Notable engineering details)
```

## Page sections (in order, all in `pages/Home.tsx`)

1. **Hero** — headline, signature name, description, CTAs, glass stat panel (years
   experience / projects shipped / technologies + social icons + Resume download)
2. **Projects** — moved up (2026-09-25) to sit right after the Hero. Opens with the
   **FeaturedProject** showcase (Backend City: black bento, LIVE badge, proof points, stack,
   Play it live / Case study / repo links, and a browser frame that tours real screenshots or
   loads the live app only when the visitor clicks "Live"), then the bento mosaic of
   case-study tiles from Firestore (tilt-on-hover), linking to `ProjectDetail`
3. **Skills** — bento mosaic grid, grouped by category, wide tiles for categories with 5+ skills
4. **Experience** — vertical timeline (not cards), current role gets an accent dot + pill
5. **GitHubActivity** — live GitHub contribution graph
6. **Testimonials** — carousel, currently **empty** (seeded with `[]`, waiting on real quotes)
7. **Contact** — info cards (email/socials) + a react-hook-form + EmailJS contact form

Navbar links, the section minimap and the ⌘K palette follow the same order
(Projects, Skills, Experience, Contact).

All sections are `React.lazy`-loaded behind one `Suspense` boundary, prefetched during the
preloader so there's no blank gap when it hands off.

## Data flow

- **Public read path**: `Home.tsx` dispatches `fetchPortfolioData()` on mount →
  `portfolioSlice` thunk → `portfolioService.getPortfolioData()` reads the Firestore doc
  `content/portfolio` directly from the browser (public, read-only, no auth needed).
- **Admin write path**: Admin pages call `apiClient` → the FastAPI backend (see
  `BACKEND.md`) → the backend is the only thing that ever writes to Firestore. The
  frontend never writes to Firestore directly anymore.
- **Featured project**: `data/featured.ts` holds Backend City in code so the showcase, its
  case study (`/#/project/backend-city`, with the `ScreenGallery`) and its ⌘K entry work
  no matter what Firestore contains. Screenshots live in `public/projects/backend-city/`
  (WebP, captured from production).
- **Resume link**: the Firestore `hero.resumeUrl` is whatever the API returned at upload time.
  An upload made against a local backend stores `http://localhost:8001/content/resume`;
  `utils/resumeUrl.ts` rewrites such links to `VITE_API_BASE_URL` on the live site (or falls
  back to `/SSEFE.pdf`). Re-upload from the live admin to store the correct URL.
- `data/content.ts` is the **fallback/seed** data — used to seed Firestore the very first
  time the doc doesn't exist, and as the "Load latest from source file" reset button in
  the admin Content Editor.

## Admin flow

1. Hidden entry point: the ⌘K command palette has an "Admin login" item that's excluded
   from the default (empty-query) list — it only appears once you type a matching query.
2. `Login.tsx` → `POST /auth/login` on the backend → JWT stored in `localStorage`
   (`adminToken`).
3. `Dashboard.tsx` — guarded by `getAdminToken()`; shows view-count stat, a referrer-source
   bar chart (recharts), and links into the Content Editor.
4. `ContentEditor.tsx` — full form-based editor for every section of the portfolio
   (hero, skills, experience, projects, testimonials, contact); saves via
   `POST /content` (JWT-protected, schema-validated server-side).

## Design system

CSS custom properties in `index.css`:
- Paper/ink neutrals (`--paper`, `--ink`, `--ink-soft`, `--ink-muted`, `--line*`)
- 4 bento card color families, each with a deep/ink/shadow variant:
  `--mint*`, `--lavender*`, `--orange*`, `--black-card*`
- One locked interactive accent (`--accent*`, orange)
- Fonts: **Bricolage Grotesque** (display), **Geist** (body), **Geist Mono** (mono/labels),
  **Caveat** (script — the signature name)
- `.bento-mint/lavender/orange/black/paper` — shared glossy card classes reused across
  Hero stats, Skills, Projects, Contact info cards
- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` — the one eased curve used site-wide instead
  of CSS's built-in (weak) `ease`

## Notable engineering details

- **Preloader → Hero handoff**: the preloader writes "Atif Moin" (Caveat font) centered
  on screen via a clip-path wipe, then measures the real Hero signature's on-screen
  position (`#hero-signature-target`) and animates an explicit x/y/scale transform onto
  it — a manual FLIP, not Framer's automatic `layoutId` (which proved unreliable across
  React StrictMode's double-invoke + lazy-chunk mount timing). Hero's real signature stays
  invisible until the fly lands, so there's never a double-exposure. This entrance
  intentionally ignores `prefers-reduced-motion` (one-time, modest-amplitude, non-looping).
- **Smooth scroll**: Lenis is mounted once at the `App.tsx` level (wraps every route, not
  just Home), and every programmatic scroll (nav links, hero CTAs, ⌘K jumps) goes through
  `lib/smoothScroll.ts` so it shares the same easing as wheel/touch scroll instead of
  fighting it with native `scrollTo`.
- **Hover effects**: `Magnetic` and the Projects tilt-card both use a custom damped-lerp
  (`useLerpMotionValue`) instead of Framer's spring physics — smoother, no bounce/overshoot.
  Both also cache their bounding rect on pointer-enter instead of on every pointermove
  (avoids forced layout thrash that used to read as jitter).
- **Scrollbar-width shift**: `html { scrollbar-gutter: stable; overflow-y: scroll; }` in
  `index.css` reserves the scrollbar's width up front, so content doesn't shift when the
  page goes from "preloader only" (no scroll) to full-length (scrollable).
- **Hero headline particle-text (`components/webgl/ParticleText.tsx`)**: the headline is
  rendered as a `THREE.Points` cloud instead of solid type. It samples the real (invisible,
  a11y-preserved) DOM text onto an offscreen 2D canvas, scans it for opaque pixels, and
  uses each as a particle origin. Two gotchas worth remembering if this ever needs touching
  again:
  - Canvas `ctx.font` does **not** inherit CSS `letter-spacing`. The headline uses a tight
    `-0.04em` tracking, so sampling without also setting `ctx.letterSpacing` measured/drew
    ~8% wider than the real box and clipped trailing characters. Fixed by copying
    `getComputedStyle(...).letterSpacing` onto the canvas context before `fillText`.
  - The sampling loop indexes the pixel `Uint8ClampedArray` by `y * width + x` — that index
    **must** be an integer; a non-integer step (e.g. a fractional density constant `STEP`)
    silently returns `undefined` from most lookups instead of throwing, producing a
    near-empty, seemingly-random sparse result. `STEP * scale` is rounded before use.
  - On mount each particle starts scattered 140–520px from its origin (off the padded
    canvas entirely, so nothing renders yet) and converges over ~1.15s once triggered —
    wired to fire the instant `Preloader`'s signature *starts* flying to the Hero (not when
    it lands), via a new `onFlyStart` callback threaded through `Home.tsx` →
    `Hero`'s `particlesActive` prop.
- **Reduced-motion override (`lib/motionPreference.tsx`)**: every component that used to
  call framer-motion's `useReducedMotion()` directly now imports the same-named hook from
  here instead (`Magnetic`, `FloatingBackground`, `Projects`, `Testimonials`,
  `SmoothScroll`, `ParticleText`). It still reads the OS `prefers-reduced-motion` setting,
  but a visitor can opt back in for the session via `<MotionOptInPill />` (mounted once in
  `App.tsx`, only ever visible when the OS setting is on) — flips a `localStorage` flag,
  and every one of those components re-evaluates through the shared context. Reduced
  motion never means "stuck mid-animation": components either skip the interactive
  animation loop and render one static, fully-settled frame (`ParticleText`), or skip
  mounting Lenis and fall back to native scroll (`SmoothScroll`) — never a frozen
  in-between state.

## Deployment

- **Vercel** project `portfolio` (Vite preset, `npm run build`, output `dist`, SPA rewrite in
  `vercel.json`). Env: `VITE_API_BASE_URL=https://atif-portfolio-api.onrender.com` plus the
  `VITE_FIREBASE_*` keys.
- **Production branch is `main`**, but work happens on `new_ui` (the two have diverged).
  Pushing `new_ui` creates a Preview; to go live either promote it
  (`vercel promote <preview-url>`) or set Settings → Environments → Production → Branch
  Tracking to `new_ui`. `vercel --prod` from `Frontend/` also deploys directly.
- SEO: canonical, Open Graph/Twitter tags, structured data, `sitemap.xml` and `robots.txt`
  point at the Vercel domain; `public/og-image.jpg` (1200×630) is the link preview.

## Where things currently stand

- ✅ Full bento redesign, resume-accurate content, timeline Experience section
- ✅ Case-study pages, ⌘K command palette, live GitHub contribution graph
- ✅ Admin auth + content editing fully routed through the backend (no client-side secrets)
- ✅ AI chat widget wired to the backend `/chat` endpoint
- ✅ Preloader signature write-in + fly-to-Hero handoff, smooth scroll, hover-jitter fixes
- ✅ Hero headline particle-text effect (three.js), synced to the preloader hand-off, with
  a reduced-motion opt-in pill so it's never permanently hidden from a visitor
- ✅ `portfolioService` falls back to the local seed data if Firestore is unreachable
- ✅ Backend City featured showcase + case study with screenshot gallery; Projects moved
  right after the Hero (2026-09-25)
- ✅ Resume link fixed on production; SEO URLs moved to Vercel; real `og-image.jpg`
- ✅ Deployed on Vercel; API on Render (`VITE_API_BASE_URL` set)
- ⏳ **Stored resume URL** in Firestore is still `localhost:8001` until the resume is
  re-uploaded (or the field edited) from the live admin; the frontend works around it
- ⏳ **Testimonials section is empty** — waiting on real quotes to seed `data/content.ts`
- ⏳ `main` vs `new_ui` have diverged; pick one production branch
- ⏳ Main JS bundle is a single ~1.57MB chunk (Vite warns about this) — not yet code-split
- ⏳ Untracked WIP in `src/components/webgl/` (`ContributionsGraph3D.tsx`,
  `SkillsRepelField.tsx`) — not wired in yet
