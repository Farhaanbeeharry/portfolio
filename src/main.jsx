import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Studio design system (creative editorial-dark: Schibsted Grotesk, warm
// near-black paper, single amber accent, Emil motion, light CSS 3D) and the
// preserved project showcase mockups (pf-* device frames).
import "../css/studio.css";
import "../css/showcase.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
