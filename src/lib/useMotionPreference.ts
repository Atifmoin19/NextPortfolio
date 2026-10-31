import { createContext, useContext } from "react";

export interface MotionPreferenceValue {
  /** Raw OS-level prefers-reduced-motion, unaffected by any opt-in. */
  osReduce: boolean;
  /** What components should actually treat as "reduced" - OS preference
   * unless the visitor explicitly opted back into motion for this device. */
  effectiveReduce: boolean;
  overridden: boolean;
  enableMotion: () => void;
}

export const MotionPreferenceContext = createContext<MotionPreferenceValue | null>(null);

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
