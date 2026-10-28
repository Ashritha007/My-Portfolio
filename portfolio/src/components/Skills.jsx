import Section from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  const groups = [...new Set(skills.map((s) => s.group))];
  return (
    <Section id="skills" title="Skills">
      <div className="grid cols-3">
        {groups.map((g) => (
          <div key={g} className="card glass">
            <h3>{g}</h3>
            <div className="chips">
              {skills.filter((s) => s.group === g).map((s) => <span key={s.name} className="chip">{s.name}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
