import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  ["Work", "work"],
  ["Approach", "capabilities"],
  ["Experience", "experience"],
  ["About", "about"],
  ["Journal", "journal"],
  ["Contact", "contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (location.pathname !== "/" || !("IntersectionObserver" in window)) return;
    const sections = items.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/#top" className="wordmark" aria-label="Bharathwaaj Murugan home">
          <span className="wordmark-monogram">BM</span>
          <span className="wordmark-name">Bharathwaaj<br />Murugan</span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
          {items.map(([label, id]) => (
            <Link
              key={id}
              to={`/#${id}`}
              className={active === id && location.pathname === "/" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
