# NextPortfolio Frontend — Project Guide
> Repo: https://github.com/Atifmoin19/NextPortfolio.git  ·  Branch: new_ui  ·  Category: personal  ·  Last updated: 2026-10-09

## 1. Overview
Atif Moin's personal portfolio: a single-page React site (hero, projects, skills, experience, testimonials, contact, AI chat) plus a small admin area to edit content and read contact inquiries. Live at https://portfolio.fullstackcity.in on Vercel (`README.md`).

| Item | Value |
|---|---|
| Users | Public visitors; one admin |
| Client / insurer | None (personal project) |
| Paired repo | Backend: `../Backend` (https://github.com/Atifmoin19/NextPortfolio-Backend.git) — see `../Backend/PROJECT_GUIDE.md` |

`README.md` (240 lines) is the detailed design/implementation log; this guide indexes it and adds checks/config.

## 2. Architecture
**Stack** (`package.json`): React 19.2, Vite 5.4, TypeScript 5.9, Chakra UI 2.10, Framer Motion 12, GSAP 3 + Lenis (smooth scroll), three.js 0.184 (raw), Redux Toolkit 2, react-router-dom 7 (`HashRouter`), react-hook-form 7, react-ga4, recharts 3.

```
src/
  main.tsx            Chakra theme, Redux Provider, GA init
  App.tsx             HashRouter + routes, global CommandPalette/ChatWidget/MotionOptInPill, lazy routes
  pages/              Home.tsx · ProjectDetail.tsx · admin/{Login,Dashboard,ContentEditor}.tsx
  components/         layout/ · sections/ · shared/ · webgl/ · SEO/
  data/               content.ts (TS types + seed/fallback data) · featured.ts (Backend City showcase)
  services/           portfolioService.ts (Firestore REST read) · apiClient.ts (backend calls)
  store/              portfolioSlice (async thunk), counterSlice (template leftover)
  hooks/ lib/ utils/  motion helpers, smooth scroll, resumeUrl, slugify
```
Path aliases `store`, `pages`, `assets` → `vite.config.ts`.

**Data flow**
```
App mount ─► fetchPortfolioData ─► Firestore REST GET content/portfolio (public, API key)
                                     └─ on error: fallback to src/data/content.ts
           ─► apiClient.warmUp() ─► GET {API}/health (no-cors)
Chat/Contact/Admin ─► apiClient ─► FastAPI backend (VITE_API_BASE_URL)
```
State: Redux `portfolio` slice for content; admin JWT in `localStorage["adminToken"]` (`src/services/apiClient.ts`).

## 3. How it works
| Route (hash) | Page | Notes |
|---|---|---|
| `/` | `pages/Home.tsx` | Preloader → all sections |
| `/project/:slug` | `pages/ProjectDetail.tsx` | Case study (lazy) |
| `/admin`, `/admin/login` | `pages/admin/Login.tsx` | Also reachable via hidden ⌘K palette entry |
| `/admin/dashboard` | `pages/admin/Dashboard.tsx` | Inquiries list (paged, 5/page) |
| `/admin/content` | `pages/admin/ContentEditor.tsx` | Full content CRUD + resume upload |

1. **Visitor** — content loads from Firestore REST; GA pageview per route change (`App.tsx` `PageTracker`).
2. **Chat** — `ChatWidget` sends message + prior history (greeting excluded) to `POST /chat`; 429 shows a rate-limit message; `useSlowHint` shows "waking the server" after 4 s.
3. **Contact** — react-hook-form → `POST /contact` (includes hidden `website` honeypot).
4. **Admin** — login → `POST /auth/login` → token stored → dashboard (`GET /content/inquiries`) → editor (`GET/POST /content`, `POST /content/resume`). Any 401 clears the token and redirects to login.
5. **Resume link** — `utils/resumeUrl.ts` rewrites a stored `localhost` resume URL to `VITE_API_BASE_URL`, else falls back to `/SSEFE.pdf`.

## 4. Environment & config
| VAR NAME | Purpose | Required? | Where read |
|---|---|---|---|
| `VITE_API_BASE_URL` | Backend base URL (local `http://localhost:8001`, prod Render URL) | Yes | `src/services/apiClient.ts`, `src/utils/resumeUrl.ts` |
| `VITE_FIREBASE_PROJECT_ID` | Firestore REST project | Yes (else fallback data) | `src/services/portfolioService.ts` |
| `VITE_FIREBASE_API_KEY` | Firestore REST key | Yes (else fallback data) | `src/services/portfolioService.ts` |
| `VITE_FIREBASE_MEASUREMENT_ID` | GA4 ID; GA skipped if empty | No | `src/main.tsx` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Listed in `.env.example`, not read in code | No | — |

- Files: `.env`, `.env.local` (gitignored), `.env.example`. Vite modes only (`dev` / `build`); no UAT.
- No runtime env check — a missing `VITE_API_BASE_URL` silently produces relative/`undefined` URLs; `warmUp` skips if empty.

## 5. Validation & business checks
| Check | Rule | Where |
|---|---|---|
| Contact first/last name, mobile, message | Required | `src/components/sections/Contact.tsx:229-261` |
| Contact email | Required + `/^\S+@\S+\.\S+$/` | `src/components/sections/Contact.tsx:243` |
| Contact honeypot | Hidden `website` field sent to backend | `src/services/apiClient.ts` / `Contact.tsx` |
| Admin pages guard | No token in localStorage → redirect `/admin/login` | `Dashboard.tsx:100`, `ContentEditor.tsx:43` |
| Session expiry | API 401 → clear token → login | `Dashboard.tsx`, `ContentEditor.tsx` |
| Content shape / resume type & size / field lengths / rate limits | Enforced server-side only | see `../Backend/PROJECT_GUIDE.md` §5 |
| Firestore unavailable | Fall back to bundled `data/content.ts` | `src/services/portfolioService.ts` |

## 6. Role-wise checks
| Role | Access | Enforced in |
|---|---|---|
| Visitor | Home, project pages, chat, contact | none |
| Admin | `/admin/dashboard`, `/admin/content` | client: token presence check in each admin page; real enforcement: backend JWT (`get_current_admin`) |

No route-level guard component; the "Admin login" entry is only hidden in the ⌘K palette (`components/shared/CommandPalette.tsx`).

## 7. Insurer / partner-wise checks
Not applicable — personal portfolio; no insurer/partner/product variants.

## 8. Run locally
```bash
npm install
cp .env.example .env.local     # set names from section 4
npm run dev                    # Vite, http://localhost:5173
npm run build                  # tsc -b && vite build → dist/
npm run preview
npm run lint
```
Run the backend on port 8001 for chat/contact/admin. No test suite.

## 9. Deployment
- Vercel project `portfolio`: `npm run build`, output `dist`, SPA rewrite + 308 redirect from the old `*.vercel.app` host (`vercel.json`).
- Production branch is `main`, active work is on `new_ui` (diverged) — promote a preview or `vercel --prod` (`README.md` → Deployment).
- `npm run deploy` (gh-pages) still exists but GitHub Pages is retired per README.

## 10. Known gaps / observations
- Unused deps: `@react-oauth/google`, `jwt-decode`; `counterSlice` is template leftover in the store.
- `VITE_FIREBASE_AUTH_DOMAIN` unused; `VITE_FIREBASE_MEASUREMENT_ID` used but missing from `.env.example`.
- README mentions `hooks/useFirebasePagination.ts`, which no longer exists.
- Admin token kept in `localStorage`; client never checks expiry (relies on 401 from API).
- Contact form has no client-side length limits (backend caps at 80/254/32/5000 chars) and no phone format check.
- `HashRouter` kept although Vercel rewrites would allow `BrowserRouter`.
- `main` vs `new_ui` divergence; testimonials empty; stored resume URL may still be localhost (README "Where things currently stand").
- Binary assets committed in `src/assets/` (PDFs, a WhatsApp JPEG) — check if still used.

## 11. Related docs
- [README.md](README.md) — full stack, folder map, design/motion notes, perf, deployment, status
- [CONTENT.md](CONTENT.md) — pre-redesign content snapshot
- [../FRONTEND.md](../FRONTEND.md) — copy of README at project root
- [../BACKEND.md](../BACKEND.md), [../Backend/PROJECT_GUIDE.md](../Backend/PROJECT_GUIDE.md)
- `~/Desktop/DEPLOYMENT_RUNBOOK.md`
