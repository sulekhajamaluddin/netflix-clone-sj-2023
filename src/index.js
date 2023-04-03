import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./scripts/fontawesome/fontawesomeSetUp";
import { UserProvider } from "./state/UserProvider";
import { ModalProvider } from "./state/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
