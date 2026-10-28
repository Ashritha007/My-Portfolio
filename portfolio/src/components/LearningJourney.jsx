import Section from "./Section.jsx";
import { journey } from "../data.js";

export default function LearningJourney() {
  return (
    <Section id="journey" title="Learning journey" intro="From programming basics toward data analytics.">
      <ol className="timeline">
        {journey.map((j) => (
          <li key={j.title}><h3>{j.title}</h3><p className="muted">{j.text}</p></li>
        ))}
      </ol>
    </Section>
  );
}
