import { extendTheme, type StyleFunctionProps } from "@chakra-ui/react";

// Paper Studio theme. Values point at the CSS custom properties in index.css so the
// section tint (--bg) and the tokens stay in one place.

const pressBase = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontStretch: "108%",
  fontSize: "0.95rem",
  border: "2px solid var(--ink)",
  borderRadius: "var(--radius-btn)",
  color: "var(--ink)",
  boxShadow: "var(--shadow)",
  transition: "transform 0.12s var(--ease), box-shadow 0.12s var(--ease)",
  _hover: {
    transform: "translate(-1px, -1px)",
    boxShadow: "5px 5px 0 var(--ink)",
    _disabled: { transform: "none", boxShadow: "var(--shadow)" },
  },
  _active: {
    transform: "translate(4px, 4px)",
    boxShadow: "0 0 0 var(--ink)",
  },
  _disabled: { opacity: 0.55, cursor: "not-allowed" },
};

const press = (bg: string, color = "var(--ink)") => ({
  ...pressBase,
  bg,
  color,
  _hover: { ...pressBase._hover, bg },
  _active: { ...pressBase._active, bg },
});

const fieldBase = {
  bg: "var(--paper)",
  border: "2px solid var(--ink)",
  borderRadius: "var(--radius-sm)",
  color: "var(--ink)",
  _placeholder: { color: "var(--ink-3)" },
  _hover: { borderColor: "var(--ink)" },
  _focusVisible: { borderColor: "var(--red)", boxShadow: "2px 2px 0 var(--red)" },
  _invalid: { borderColor: "var(--red)", boxShadow: "none" },
};

// The postcard form: handwritten text on a ruled baseline, no box.
const postcardField = {
  fontFamily: "var(--font-hand)",
  fontSize: "1.15rem",
  color: "var(--ink)",
  bg: "transparent",
  border: 0,
  borderBottom: "1.5px solid var(--ink-3)",
  borderRadius: 0,
  px: "0.1rem",
  py: "0.35rem",
  _placeholder: { color: "var(--ink-3)" },
  _hover: { borderColor: "var(--ink-2)" },
  _focusVisible: { outline: "none", borderColor: "var(--red)", boxShadow: "none" },
  _invalid: { borderColor: "var(--red)", boxShadow: "none" },
};

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-display)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
  colors: {
    ink: "#111111",
    paper: "#fbfbf8",
    ground: "#f1f1ec",
    butter: "#ffe27a",
    pink: "#ffb3d1",
    sky: "#9fd8ff",
    mint: "#a8ebb6",
    lilac: "#cbb8ff",
    red: {
      50: "#fdecea",
      100: "#fbd0ca",
      200: "#f6a397",
      300: "#f07563",
      400: "#e9513b",
      500: "#e2321b",
      600: "#c22610",
      700: "#9c1d0c",
      800: "#741509",
      900: "#4d0e06",
    },
  },
  radii: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "18px",
    "2xl": "24px",
  },
  shadows: {
    outline: "0 0 0 2px var(--red)",
  },
  styles: {
    global: {
      body: {
        bg: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--font-body)",
      },
      "input:-webkit-autofill, textarea:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px var(--paper) inset",
        WebkitTextFillColor: "var(--ink)",
        caretColor: "var(--ink)",
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: { fontWeight: 900, letterSpacing: "-0.035em" },
    },
    Button: {
      baseStyle: { fontWeight: 700, borderRadius: "var(--radius-btn)" },
      variants: {
        // The signature hard-shadow button. Use variant="press" (butter),
        // "pressPaper", "pressPink" or "pressRed".
        press: press("var(--butter)"),
        pressPaper: press("var(--paper)"),
        pressPink: press("var(--pink)"),
        pressRed: press("var(--red)", "#ffffff"),
        // Quiet defaults for the admin: ink on paper, no playful offset.
        solid: (props: StyleFunctionProps) =>
          props.colorScheme === "gray"
            ? {
                bg: "var(--ink)",
                color: "var(--paper)",
                _hover: { bg: "#2a2a27", _disabled: { bg: "var(--ink)" } },
                _active: { bg: "#000" },
              }
            : {},
        outline: (props: StyleFunctionProps) =>
          props.colorScheme === "gray"
            ? {
                borderColor: "var(--ink)",
                color: "var(--ink)",
                _hover: { bg: "var(--paper)" },
                _active: { bg: "var(--butter)" },
              }
            : {},
        ghost: (props: StyleFunctionProps) =>
          props.colorScheme === "gray"
            ? { color: "var(--ink)", _hover: { bg: "rgba(17,17,17,0.06)" }, _active: { bg: "rgba(17,17,17,0.1)" } }
            : {},
      },
    },
    Input: {
      variants: {
        outline: { field: fieldBase },
        postcard: { field: postcardField },
      },
      defaultProps: { variant: "outline" },
    },
    Textarea: {
      variants: {
        outline: fieldBase,
        postcard: {
          ...postcardField,
          borderBottom: 0,
          lineHeight: "34px",
          pt: 0,
          resize: "none",
          background:
            "repeating-linear-gradient(transparent 0 33px, var(--rule-blue) 33px 34px)",
        },
      },
      defaultProps: { variant: "outline" },
    },
    Select: {
      variants: { outline: { field: fieldBase } },
      defaultProps: { variant: "outline" },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.74rem",
        fontWeight: 500,
        color: "var(--ink-2)",
        letterSpacing: "0.02em",
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: "var(--paper)",
          border: "2px solid var(--ink)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-lg)",
        },
        overlay: { bg: "rgba(17,17,17,0.35)" },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: { bg: "var(--paper)" },
        overlay: { bg: "rgba(17,17,17,0.35)" },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "var(--ink)",
        color: "var(--paper)",
        fontFamily: "var(--font-mono)",
        fontSize: "xs",
        borderRadius: "6px",
      },
    },
  },
});
