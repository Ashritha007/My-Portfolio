import { useState } from "react";
import Section from "./Section.jsx";
import SocialLink from "./SocialLink.jsx";
import { profile, socialLinks, FORM_ENDPOINT } from "../data.js";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "validated" | "failed"

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Enter your name.";
    if (!values.email.trim()) e.email = "Enter your email address.";
    else if (!emailOk(values.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
    if (!values.message.trim()) e.message = "Enter a message.";
    else if (values.message.trim().length < 10) e.message = "Write at least 10 characters.";
    return e;
  };

  const change = (k) => (ev) => {
    setValues({ ...values, [k]: ev.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const submit = async (ev) => {
    ev.preventDefault();
    setStatus(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    if (!FORM_ENDPOINT) {
      // No backend configured: do not pretend the message was sent.
      setStatus("validated");
      setValues({ name: "", email: "", message: "" });
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("failed");
    }
  };

  return (
    <Section id="contact" title="Contact" intro="Open to data analytics internships and projects.">
      <div className="contact-grid">
        <div className="card glass">
          <h3>Get in touch</h3>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          <div className="actions">
            <SocialLink label="LinkedIn" url={socialLinks.linkedin} />
            <SocialLink label="GitHub" url={socialLinks.github} />
          </div>
        </div>
        <form className="card glass form" onSubmit={submit} noValidate>
          {[["name", "Name", "text"], ["email", "Email", "email"]].map(([k, label, type]) => (
            <div className="field" key={k}>
              <label htmlFor={k}>{label}</label>
              <input id={k} type={type} value={values[k]} onChange={change(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
              {errors[k] && <span id={`${k}-err`} className="error">{errors[k]}</span>}
            </div>
          ))}
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={values.message} onChange={change("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            {errors.message && <span id="message-err" className="error">{errors.message}</span>}
          </div>
          <button className="btn primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"}</button>
          <div aria-live="polite">
            {status === "sent" && <p className="success">Message sent. Thank you, I will reply soon.</p>}
            {status === "validated" && (
              <p className="success">Your message is valid, but sending is not set up yet, so nothing was sent. Please email <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>
            )}
            {status === "failed" && <p className="error">Message could not be sent. Try again or email me directly.</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
