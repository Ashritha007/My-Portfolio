import SocialLink from "./SocialLink.jsx";

export default function ProjectModal({ project: p, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={(e) => e.stopPropagation()}>
        <button className="close" aria-label="Close project details" onClick={onClose}>×</button>
        <span className={`status ${p.status === "Ongoing" ? "ongoing" : "done"}`}>{p.status}</span>
        <h3 id="pm-title">{p.name}</h3>
        <p>{p.description}</p>
        <h4>Technologies</h4>
        <div className="chips">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <h4>Features</h4>
        <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <h4>What I learned</h4>
        <p>{p.learned}</p>
        <div className="actions">
          <SocialLink label="GitHub" url={p.github} />
          <SocialLink label="Live Demo" url={p.demo} />
        </div>
      </div>
    </div>
  );
}
