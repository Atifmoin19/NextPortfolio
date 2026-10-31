// Google Analytics, loaded as its own chunk so it never sits on the first-paint path.
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string | undefined;

type GA = (typeof import("react-ga4"))["default"];
let ga: Promise<GA> | null = null;

function load(): Promise<GA> | null {
  if (!MEASUREMENT_ID) return null;
  ga ??= import("react-ga4").then(({ default: g }) => {
    g.initialize(MEASUREMENT_ID);
    return g;
  });
  return ga;
}

export function trackPageview(page: string) {
  void load()?.then((g) => g.send({ hitType: "pageview", page }));
}
