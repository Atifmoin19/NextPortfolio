import React from "react";
import ReactGA from "react-ga4";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";
import "./index.css";

const GA_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Bricolage Grotesque Variable', system-ui, sans-serif",
    body: "'Geist Variable', system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
  },
  styles: {
    global: {
      body: {
        bg: "#fdfdfc",
        color: "#16140f",
      },
      "input:-webkit-autofill, textarea:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px var(--paper-raised) inset",
        WebkitTextFillColor: "var(--ink)",
        caretColor: "var(--ink)",
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            bg: "var(--paper-raised)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-sm)",
            color: "var(--ink)",
            _placeholder: { color: "var(--ink-muted)" },
            _hover: { borderColor: "var(--line-strong)" },
            _focusVisible: { borderColor: "var(--accent)", boxShadow: "0 0 0 1px var(--accent)" },
          },
        },
      },
      defaultProps: { variant: "outline" },
    },
    Textarea: {
      variants: {
        outline: {
          bg: "var(--paper-raised)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-sm)",
          color: "var(--ink)",
          _placeholder: { color: "var(--ink-muted)" },
          _hover: { borderColor: "var(--line-strong)" },
          _focusVisible: { borderColor: "var(--accent)", boxShadow: "0 0 0 1px var(--accent)" },
        },
      },
      defaultProps: { variant: "outline" },
    },
  },
});



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
