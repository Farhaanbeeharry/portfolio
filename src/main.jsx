import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// The runtime design system. runtime.css owns the application shell and every
// route; case-file.css restyles the legacy project write-ups and bridges the
// token names the two remaining legacy stylesheets still reference.
import "./styles/runtime.css";
import "../css/project.css";
import "../css/showcase.css";
import "./styles/case-file.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
