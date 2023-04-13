//Node Modules
import React from "react";
import ReactDOM from "react-dom/client";

//Project Files
import App from "./App";
import "./scripts/fontawesome/fontawesomeSetUp";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./state/UserProvider";
import { ModalProvider } from "./state/ModalProvider";
import { TitlesProvider } from "./state/TitlesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <UserProvider>
          <TitlesProvider>
            <App />
          </TitlesProvider>
        </UserProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
