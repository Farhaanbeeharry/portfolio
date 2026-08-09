import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Engineering Blueprint design system (homepage + project chrome + prose) and
// the preserved project showcase mockups (pf-* device frames).
import "../css/blueprint.css";
import "../css/showcase.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
