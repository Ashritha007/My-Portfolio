import Section from "./Section.jsx";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid cols-3">
        {certifications.map((c) => (
          <div key={c.title} className="card glass"><h3>{c.title}</h3><p className="muted">{c.detail}</p></div>
        ))}
      </div>
    </Section>
  );
}
