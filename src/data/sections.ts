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
  { id: "projects", label: "Work", tint: "#eef0f2" },
  { id: "skills", label: "Skills", tint: "#edf3ee" },
  { id: "experience", label: "Career", tint: "#f1eef5" },
  { id: "activity", label: null, tint: "#f3efe4" },
  { id: "testimonials", label: null, tint: "#f3efe4" },
  { id: "contact", label: "Contact", tint: "#f6eeef" },
];

export const NAV_SECTIONS = SECTIONS.filter(
  (s): s is SectionDef & { label: string } => s.label !== null,
);
