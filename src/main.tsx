import React from "react";
import ReactDOM from "react-dom/client";
// Chakra's base provider: theme, reset and colour mode, without the toast layer.
import { Provider as ChakraProvider } from "@chakra-ui/react/provider";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";
import { theme } from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
