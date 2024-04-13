import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import ReactDOM from "react-dom/client";
import router from "./router/Router";
import theme from "./styles/theme";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
