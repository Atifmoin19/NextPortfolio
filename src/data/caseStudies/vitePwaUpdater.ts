import type { CaseStudy } from "./types";

// Sources: the package README on npm and the npm registry + downloads API, fetched on
// 2026-11-01 (registry: latest 1.1.0, 10 published versions, MIT; downloads API window
// 2025-10-30 to 2026-10-29: 1,358).

export const vitePwaUpdater: CaseStudy = {
  slug: "vite-pwa-updater",
  title: "vite-pwa-updater",
  pitch: "A plug-and-play React hook and banner that tells users a new version of your PWA is ready, without blocking what they are doing.",
  role: "Author and maintainer",
  timeframe: "Feb 2026",
  status: "open-source",
  statusLabel: "Open source on npm",
  color: "mint",
  links: {
    npm: "https://www.npmjs.com/package/vite-pwa-updater",
    repos: [{ label: "Repo", url: "https://github.com/Atifmoin19/vite-pwa-updater" }],
  },
  stack: ["React", "TypeScript", "Vite", "vite-plugin-pwa", "Chakra UI", "Framer Motion"],
  problem: [
    "A PWA's service worker happily keeps serving the cached build. Users stay on an old version for days, and there is no clean, standard way to tell them a new one is waiting.",
  ],
  approach: [
    "A usePwaUpdate hook that checks for a waiting service worker on an interval (5 minutes by default) and whenever a trigger value changes, such as the current route.",
    "An UpdateBanner component: a bottom banner with Update now and Later, so the prompt never interrupts the flow. Teams that want their own UI use only the hook.",
  ],
  architecture: {
    summary: "The package sits between vite-plugin-pwa's generated service worker and the app's UI.",
    components: [
      { name: "vite-plugin-pwa", detail: "Generates the service worker, with registerType set to prompt." },
      { name: "usePwaUpdate", detail: "Periodic and route-based update checks; exposes whether an update is ready and a function to apply it." },
      { name: "UpdateBanner", detail: "Non-blocking bottom banner with confirm and cancel callbacks and custom text." },
    ],
    nodes: [
      { id: "sw", label: "Service worker", sub: "vite-plugin-pwa", col: 0, row: 0, tone: "paper" },
      { id: "hook", label: "usePwaUpdate", sub: "interval + route", col: 1, row: 0, tone: "mint" },
      { id: "banner", label: "UpdateBanner", sub: "or your own UI", col: 2, row: 0, tone: "butter" },
    ],
    edges: [
      { from: "hook", to: "sw", label: "check", both: true },
      { from: "hook", to: "banner", label: "update ready" },
    ],
  },
  decisions: [
    {
      title: "Prompt, don't auto-reload",
      choice: "The plugin's registerType must be prompt, so the user decides when the page reloads into the new version.",
      tradeoff: "Some users will press Later and stay on the old build a little longer.",
    },
    {
      title: "Check on route changes as well as a timer",
      choice: "Any value passed as trigger (usually the location) fires a check, so active users find out at a natural pause.",
      tradeoff: "The hook has to live inside the router, which the README calls out because it's easy to get wrong.",
    },
    {
      title: "Hook and UI split",
      choice: "The logic is a standalone hook; the banner is optional.",
      tradeoff: "The bundled banner is built on Chakra UI and Framer Motion, which are peer dependencies, so it suits apps already using them.",
    },
    {
      title: "Wide peer ranges",
      choice: "React 16 and up, Chakra 2 and up, vite-plugin-pwa 0.14 and up, so it drops into older apps.",
      tradeoff: "Wide ranges are promises that need testing across versions.",
    },
  ],
  results: [
    { value: "1,358", label: "npm downloads in the last year", source: "api.npmjs.org, 2025-10-30 to 2026-10-29, fetched 2026-11-01" },
    { value: "1.1.0", label: "latest version, 10 published in total", source: "registry.npmjs.org, fetched 2026-11-01" },
    { value: "MIT", label: "license", source: "registry.npmjs.org" },
  ],
  resultsNote: "Download counts include CI installs and mirrors, so they are a rough signal, not a user count.",
  screenshots: [],
  snippet: {
    lang: "tsx",
    caption: "Minimal setup, from the README",
    code: `import { usePwaUpdate, UpdateBanner } from "vite-pwa-updater";
import { useLocation } from "react-router-dom";

function MainApp() {
  // Inside the Router, so useLocation() works
  const { needRefresh, updateServiceWorker } = usePwaUpdate({
    intervalMS: 5 * 60 * 1000, // check every 5 minutes
    trigger: useLocation(),    // and on every route change
  });

  return (
    <>
      <YourAppRoutes />
      <UpdateBanner
        isOpen={needRefresh}
        onConfirm={() => updateServiceWorker(true)}
        onCancel={() => {}}
      />
    </>
  );
}`,
  },
  next: [
    "Fix the README's custom-UI example, which imports from an old package name.",
    "Add tests that run the hook against a real service worker update.",
  ],
};
