import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { projects } from "./data/content";
import HomePage from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { assetUrl } from "./utils/assets";

function PageEffects() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    } else if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Bharathwaaj Murugan — Product Designer";
      updateMetadata({
        title: document.title,
        description: "Bharathwaaj Murugan is a product designer working across human experience, technology, and creativity. Explore selected product, AI, and design system work.",
        image: "/images/4MrtAXAIXpIDpCQtvymkgYt4Y1c.png",
      });
      return;
    }
    const slug = location.pathname.split("/").filter(Boolean).pop();
    const project = projects.find((item) => item.slug === slug);
    document.title = project ? `${project.title} — Bharathwaaj Murugan` : "Project not found — Bharathwaaj Murugan";
    updateMetadata({
      title: document.title,
      description: project?.description ?? "Explore product design projects by Bharathwaaj Murugan.",
      image: project?.image ?? "/images/4MrtAXAIXpIDpCQtvymkgYt4Y1c.png",
    });
  }, [location.pathname]);

  return null;
}

function updateMetadata({ title, description, image }: { title: string; description: string; image: string }) {
  const set = (selector: string, content: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) element.content = content;
  };
  set('meta[name="description"]', description);
  set('meta[property="og:title"]', title);
  set('meta[property="og:description"]', description);
  set('meta[property="og:image"]', new URL(assetUrl(image), window.location.origin).href);
  set('meta[property="og:url"]', window.location.href);
  set('meta[name="twitter:title"]', title);
  set('meta[name="twitter:description"]', description);
  set('meta[name="twitter:image"]', new URL(assetUrl(image), window.location.origin).href);
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <PageEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
