import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid cols-2">
        {education.map((e) => (
          <div key={e.degree} className="card glass">
            <h3>{e.degree}</h3>
            <p className="muted">{e.place}</p>
            <p className="score">{e.score}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
