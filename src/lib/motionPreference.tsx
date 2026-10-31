import { useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { MotionPreferenceContext, type MotionPreferenceValue } from "./useMotionPreference";

const STORAGE_KEY = "motion-override";


const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Live OS prefers-reduced-motion (no animation library needed for this). */
function useOSReducedMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}

function readOverride(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function MotionPreferenceProvider({ children }: { children: ReactNode }) {
  const osReduce = useOSReducedMotion();
  const [overridden, setOverridden] = useState(readOverride);

  const enableMotion = () => {
    setOverridden(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage failures (private mode, quota)
    }
  };

  const value = useMemo<MotionPreferenceValue>(
    () => ({
      osReduce: !!osReduce,
      effectiveReduce: !!osReduce && !overridden,
      overridden,
      enableMotion,
    }),
    [osReduce, overridden],
  );

  return (
    <MotionPreferenceContext.Provider value={value}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}
