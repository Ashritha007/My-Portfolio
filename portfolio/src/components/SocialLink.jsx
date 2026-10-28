import { useState } from "react";
import { isConfigured } from "../data.js";

// Opens the link if it is configured; otherwise shows a short note instead of a broken page.
export default function SocialLink({ label, url, className = "btn ghost" }) {
  const [note, setNote] = useState(false);
  if (isConfigured(url)) {
    return <a className={className} href={url} target="_blank" rel="noopener noreferrer">{label}</a>;
  }
  return (
    <span className="social-wrap">
      <button type="button" className={className} onClick={() => { setNote(true); setTimeout(() => setNote(false), 2500); }}>
        {label}
      </button>
      {note && <span className="note" role="status">{label} link not added yet</span>}
    </span>
  );
}
