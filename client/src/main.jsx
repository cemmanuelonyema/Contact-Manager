import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/App";
import { AuthProvider } from "./context/auth/AuthProvider";
import { ContactProvider } from "./context/contacts/ContactProvider";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ContactProvider>
        <Router>
          <App />
        </Router>
      </ContactProvider>
    </AuthProvider>
  </React.StrictMode>
);
