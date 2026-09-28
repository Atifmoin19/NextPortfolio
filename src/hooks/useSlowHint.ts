import { useEffect, useState } from "react";

/**
 * True once `active` has stayed true for `afterMs`. The API sleeps on Render's free tier
 * and takes 30-50 s to wake, so a request still pending after a few seconds is almost
 * certainly a cold start: tell the visitor instead of leaving a silent spinner.
 */
export function useSlowHint(active: boolean, afterMs = 4000): boolean {
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => setSlow(true), afterMs);
    return () => {
      window.clearTimeout(timer);
      setSlow(false);
    };
  }, [active, afterMs]);

  return active && slow;
}
