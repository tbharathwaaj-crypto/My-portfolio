import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { assetUrl } from "./utils/assets";
import "./styles.css";

document.documentElement.style.setProperty(
  "--custom-cursor",
  `url("${assetUrl("/images/iridescent-cursor.png")}") 11 3, auto`,
);

const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
if (navigationEntry?.type === "reload") {
  window.history.scrollRestoration = "manual";
  if (window.location.hash) {
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
  }
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  window.addEventListener("pageshow", scrollToTop, { once: true });
  requestAnimationFrame(scrollToTop);
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
const app = window.location.protocol === "file:"
  ? <MemoryRouter><App /></MemoryRouter>
  : <BrowserRouter basename={basename}><App /></BrowserRouter>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
);
