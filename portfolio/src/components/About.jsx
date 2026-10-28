import Section from "./Section.jsx";
import { profile } from "../data.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <p className="about-text">{profile.about}</p>
        <dl className="facts glass">
          <div><dt>College</dt><dd>{profile.college}</dd></div>
          <div><dt>CGPA</dt><dd>{profile.cgpa}</dd></div>
          <div><dt>Focus</dt><dd>Data Analytics, AI</dd></div>
        </dl>
      </div>
    </Section>
  );
}
