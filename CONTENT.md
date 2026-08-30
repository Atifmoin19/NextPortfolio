# Portfolio Content (extracted before redesign)

Source of truth for copy/data. Redesign may restructure components freely — this file preserves the raw content so nothing is lost. Mirrors `src/data/content.ts`.

## Hero
- Name: Atif Moin
- Role: Software Engineer
- Tagline: Innovative Frontend Engineer.
- Description: Motivated and detail-oriented Software Engineer specializing in building responsive, user-centric web applications with React, Next.js, and modern UI libraries.
- Primary action: View Projects
- Secondary action: Contact Me

## Skills
| Skill | Level | Icon |
|---|---|---|
| React | 95 | FaReact |
| Next.js | 90 | TbBrandNextjs |
| TypeScript | 85 | SiTypescript |
| Redux Toolkit | 85 | SiRedux |
| Chakra UI | 90 | SiChakraui |
| Tailwind CSS | 90 | SiTailwindcss |
| Three.js | 75 | SiThreedotjs |
| Framer Motion | 80 | SiFramer |
| AngularJS | 70 | FaAngular |
| Flutter | 65 | SiFlutter |
| Node.js | 60 | FaNodeJs |
| Python | 50 | FaPython |

## Experience
### Zopper — Software Engineer (2023 - Present)
Built UI components for BOB Life Insurance, developed SaaS modules for Bank of Baroda, and improved performance on low-end devices. Implemented AES encryption and CSP policies.

## Projects
1. **Nested Comment and Reply** — Machine Coding Round Question Solution.
   Link: https://react-zgw1gz.stackblitz.io
2. **Techicious** — A Freelancing Project (Work under Process.)
   Link: https://techicious.github.io/Techicious-Web/
3. **Count ME** — Live Character Counter
   Link: https://atifmoin19.github.io/Live-char-counter/
4. **Play Me** — A Music Player App
   Link: https://atifmoin19.github.io/MusicPlayer/
5. **CineFlow** — A customized movie tracking dashboard.
   Link: https://atifmoin19.github.io/netflix/
6. **RedStore** — An E-Commerce Website Design
   Link: https://atifmoin19.github.io/E-commers-site/Mysite/indext.html
7. **GlassMorphism** — Component Based on glassmorphism.
   Link: https://atifmoin19.github.io/card-hover-animation/

(Previous version used stock freepik/unsplash placeholder images for project cards — not real screenshots. Redesign should not reuse these.)

## Contact
- Email: atifmoin19@gmail.com
- GitHub: https://github.com/Atifmoin19
- LinkedIn: https://www.linkedin.com/in/atif-moin-858167179/
- Portfolio (old): https://atifmoin19.github.io/three-portfolio/

## Notes on prior implementation (for context, not to be copied)
- Stack: React 19 + Vite + Chakra UI + Framer Motion + GSAP + Three.js + Redux Toolkit + Firebase (content served from Firestore, seeded from `src/data/content.ts`) + react-router (HashRouter) + admin dashboard at `/admin`.
- Sections: Navbar, Hero, Skills, Experience, Projects, Contact, Footer, plus a custom cursor/cursor-trail, moving gradient background, and several unused WebGL components (`FloatingShape`, `GlobalBlobs`, `NetworkField`, `PolyOrbs`, `RippleGrid`, `WebGLParticles`) under `src/components/webgl/`.
- User's own assessment: dated glassmorphism look, inconsistent color/theming, typography issues, content spacing/alignment problems, layout doesn't feel modern.
