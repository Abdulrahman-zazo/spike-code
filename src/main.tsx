import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
