import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ChopkolaGlobalApplicationContextProvider from "./contexts/ChopkolaGlobalApplicationContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChopkolaGlobalApplicationContextProvider>
      <App />
    </ChopkolaGlobalApplicationContextProvider>
  </StrictMode>
);
