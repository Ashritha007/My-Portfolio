export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {intro && <p className="muted intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
