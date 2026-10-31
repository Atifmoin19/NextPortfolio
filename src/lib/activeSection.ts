import { createContext, useContext } from "react";

// Id of the Home section currently centred in the viewport (null off Home).
export const ActiveSectionContext = createContext<string | null>(null);

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
