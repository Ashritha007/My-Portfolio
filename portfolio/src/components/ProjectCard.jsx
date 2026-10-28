export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card glass project" onClick={onOpen}>
      <span className={`status ${project.status === "Ongoing" ? "ongoing" : "done"}`}>{project.status}</span>
      <h3>{project.name}</h3>
      <p className="muted">{project.summary}</p>
      <div className="chips">{project.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      <button className="btn ghost small" onClick={(e) => { e.stopPropagation(); onOpen(); }}>View Details</button>
    </article>
  );
}
