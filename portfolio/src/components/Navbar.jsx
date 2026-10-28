import { useEffect, useState } from "react";
import { scrollToId } from "../scroll.js";

const links = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Certifications", "certifications"], ["Education", "education"], ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => { e.preventDefault(); setOpen(false); scrollToId(id); };

  return (
    <header className={`nav ${scrolled || open ? "solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={(e) => go(e, "home")}>Ashritha D.</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="nav-links" className={`links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
