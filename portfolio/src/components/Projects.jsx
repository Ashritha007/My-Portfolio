import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects } from "../data.js";

export default function Projects() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <Section id="projects" title="Projects" intro="Select a project to see its details.">
      <div className="grid cols-2">
        {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />)}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
