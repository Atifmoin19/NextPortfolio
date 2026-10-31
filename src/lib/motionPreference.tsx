import { useMemo, useState, type ReactNode } from "react";
import { useReducedMotion as useOSReducedMotion } from "framer-motion";
import { MotionPreferenceContext, type MotionPreferenceValue } from "./useMotionPreference";

const STORAGE_KEY = "motion-override";


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
