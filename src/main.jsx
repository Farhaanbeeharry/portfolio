import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Shared design system + detail-page chrome + showcase mockups — imported
// verbatim from the original static site (these files carry all the design
// tokens and component styles the markup relies on).
import "../css/portfolio.css";
import "../css/project.css";
import "../css/showcase.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
