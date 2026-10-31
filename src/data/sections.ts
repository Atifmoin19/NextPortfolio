// Home page sections, in page order. `label` puts the section in the nav (null = not
// linked); `tint` is the ground colour the page fades to while the section is centred.
// A section can also override its tint with a data-tint attribute on its element.
export interface SectionDef {
  id: string;
  label: string | null;
  tint: string;
}

export const DEFAULT_TINT = "#f1f1ec";

export const SECTIONS: SectionDef[] = [
  { id: "hero", label: null, tint: DEFAULT_TINT },
  { id: "work", label: "Work", tint: "#eef0f2" },
  { id: "skills", label: "Skills", tint: "#edf3ee" },
  { id: "experience", label: "Career", tint: "#f1eef5" },
  { id: "now", label: null, tint: "#f4f0e8" },
  { id: "open-source", label: null, tint: "#eaf1f4" },
  { id: "breather", label: "Breather", tint: "#f3efe4" },
  { id: "contact", label: "Contact", tint: "#f6eeef" },
];

export const NAV_SECTIONS = SECTIONS.filter(
  (s): s is SectionDef & { label: string } => s.label !== null,
);
