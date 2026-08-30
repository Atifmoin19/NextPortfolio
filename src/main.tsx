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
        bg: "#f4f1ea",
        color: "#16140f",
      },
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
