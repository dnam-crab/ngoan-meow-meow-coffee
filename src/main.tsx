import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./i18n";

import { StyledEngineProvider } from "@mui/material/styles";

import "@/styles/reset.css";
import "./styles/tailwind.css";
import "./styles/main.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
