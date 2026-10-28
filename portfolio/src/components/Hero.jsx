import { useEffect, useState } from "react";
import { profile } from "../data.js";
import { scrollToId } from "../scroll.js";
import ProfilePhoto from "./ProfilePhoto.jsx";

export default function Hero() {
  const [hasResume, setHasResume] = useState(false);
  const [note, setNote] = useState(false);

  // The dev server returns index.html for missing files, so check the file is really a PDF.
  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((r) => setHasResume(r.ok && (r.headers.get("content-type") || "").includes("pdf")))
      .catch(() => setHasResume(false));
  }, []);

  const showNote = () => { setNote(true); setTimeout(() => setNote(false), 3500); };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="kicker">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.title}</p>
          <p className="muted">Building practical skills in Python, SQL and AI to turn data into answers.</p>
          <div className="actions">
            <button className="btn primary" onClick={() => scrollToId("projects")}>View My Projects</button>
            <button className="btn ghost" onClick={() => scrollToId("contact")}>Contact Me</button>
            {hasResume ? (
              <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Ashritha_Dabbiru_Resume.pdf">Download Resume</a>
            ) : (
              <span className="social-wrap">
                <button className="btn ghost" onClick={showNote}>Download Resume</button>
                {note && <span className="note" role="status">Add resume.pdf to the public folder</span>}
              </span>
            )}
          </div>
        </div>
        <ProfilePhoto />
      </div>
    </section>
  );
}
