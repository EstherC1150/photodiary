import React from "react";
import ReactDOM from "react-dom/client";
import RootRouter from "./routers/RootRouter.tsx";
import { GlobalStyle } from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RootRouter />
  </React.StrictMode>
);
