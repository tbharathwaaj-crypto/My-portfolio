import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "unconfigured" | "error";

async function submitToEndpoint(endpoint: string | undefined, payload: Record<string, string>, setStatus: (status: Status) => void) {
  if (!endpoint?.trim()) {
    setStatus("unconfigured");
    return;
  }
  setStatus("loading");
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("The endpoint returned an error.");
    setStatus("success");
  } catch {
    setStatus("error");
  }
}

function FormMessage({ status, type }: { status: Status; type: "contact" | "feedback" }) {
  const messages: Record<Status, string> = {
    idle: "",
    loading: "Sending…",
    success: type === "contact" ? "Message sent. Thank you for reaching out." : "Feedback sent. Thank you for taking the time.",
    unconfigured: "This form is not connected yet. Your entry has not been sent. Add a form endpoint to enable submissions.",
    error: "The message could not be sent. Please try again later.",
  };
  return <p className={`form-message status-${status}`} role="status" aria-live="polite">{messages[status]}</p>;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const payload = Object.fromEntries(["name", "email", "phone", "message"].map((key) => [key, String(values.get(key) ?? "")]));
    void submitToEndpoint(import.meta.env.VITE_CONTACT_ENDPOINT, payload, (value) => {
      setStatus(value);
      if (value === "success") { setSent(true); form.reset(); }
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <label>Name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
        <label className="phone-field">Contact number <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" maxLength={40} placeholder="Include country code if relevant" /></label>
        <label className="message-field">A little about what you have in mind<textarea name="message" required minLength={8} maxLength={4000} rows={4} placeholder="A project, a question, or just hello…" /></label>
      </div>
      <div className="form-submit-row">
        <button className="button button-dark" type="submit" disabled={status === "loading" || sent}>
          {status === "loading" ? "Sending…" : sent ? "Sent" : "Send a message"}<span aria-hidden="true">↗</span>
        </button>
        <FormMessage status={status} type="contact" />
      </div>
    </form>
  );
}

export function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const payload = { name: String(values.get("name") ?? ""), feedback: String(values.get("feedback") ?? "") };
    void submitToEndpoint(import.meta.env.VITE_FEEDBACK_ENDPOINT, payload, (value) => {
      setStatus(value);
      if (value === "success") { setSent(true); form.reset(); }
    });
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <label>Your feedback<textarea name="feedback" required minLength={3} maxLength={2000} rows={3} placeholder="What stood out to you?" /></label>
      <div className="feedback-controls">
        <label className="feedback-name">Name <span>(optional)</span><input name="name" maxLength={120} placeholder="Your name" /></label>
        <button className="button button-outline" type="submit" disabled={status === "loading" || sent}>
          {status === "loading" ? "Sending…" : sent ? "Sent" : "Send feedback"}<span aria-hidden="true">↗</span>
        </button>
      </div>
      <FormMessage status={status} type="feedback" />
    </form>
  );
}
