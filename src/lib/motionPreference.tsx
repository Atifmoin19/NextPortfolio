import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion as useOSReducedMotion } from "framer-motion";

const STORAGE_KEY = "motion-override";

interface MotionPreferenceValue {
  /** Raw OS-level prefers-reduced-motion, unaffected by any opt-in. */
  osReduce: boolean;
  /** What components should actually treat as "reduced" - OS preference
   * unless the visitor explicitly opted back into motion for this device. */
  effectiveReduce: boolean;
  overridden: boolean;
  enableMotion: () => void;
}

const MotionPreferenceContext = createContext<MotionPreferenceValue | null>(null);

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

export function useMotionPreference(): MotionPreferenceValue {
  const ctx = useContext(MotionPreferenceContext);
  if (!ctx) {
    throw new Error("useMotionPreference must be used within MotionPreferenceProvider");
  }
  return ctx;
}

/**
 * Drop-in replacement for framer-motion's useReducedMotion(): same shape
 * (returns a boolean), but also honors a visitor's explicit "view animated
 * version" opt-in, so a component using this instead of framer-motion's own
 * hook automatically respects both the OS setting and the override.
 */
export function useReducedMotion(): boolean {
  return useMotionPreference().effectiveReduce;
}
