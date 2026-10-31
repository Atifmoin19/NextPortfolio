import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient, ApiError } from "../../../services/apiClient";
import { useSlowHint } from "../../../hooks/useSlowHint";
import { useReducedMotion } from "../../../lib/useMotionPreference";
import { copyText } from "./copyText";
import { usePortfolioContent } from "./usePortfolioContent";
import "./kit.css";
import "./ContactPostcard.css";

interface PostcardForm {
  message: string;
  name: string;
  email: string;
  website: string; // honeypot, hidden from people
}

const BURST = ["var(--pink)", "var(--sky)", "var(--lilac)", "var(--mint)", "var(--butter)"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function burst(from: HTMLElement) {
  const r = from.getBoundingClientRect();
  for (let i = 0; i < 14; i++) {
    const d = document.createElement("i");
    d.className = "burst-dot";
    d.style.background = BURST[i % BURST.length];
    d.style.left = `${r.left + r.width / 2}px`;
    d.style.top = `${r.top + r.height / 2}px`;
    document.body.appendChild(d);
    const ang = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 90;
    d.animate(
      [
        { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
        {
          transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px),calc(-50% + ${Math.sin(ang) * dist}px)) scale(.4)`,
          opacity: 0,
        },
      ],
      { duration: 900 + Math.random() * 300, easing: "cubic-bezier(.16,1,.3,1)" },
    ).onfinish = () => d.remove();
  }
}

export default function ContactPostcard() {
  const { contact } = usePortfolioContent();
  const reduce = useReducedMotion();
  const email = contact.email;
  const social = (net: string) => contact.socials.find((s) => s.network.toLowerCase() === net.toLowerCase())?.url;
  const linkedIn = social("LinkedIn");
  const gitHub = social("GitHub");

  const mailRef = useRef<HTMLAnchorElement>(null);
  const [copyLabel, setCopyLabel] = useState("Copy email");
  const copyTimer = useRef(0);
  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const [status, setStatus] = useState<{ kind: "idle" | "ok" | "err"; text: string; stampKey: number }>({
    kind: "idle",
    text: "",
    stampKey: 0,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostcardForm>();
  const isSlow = useSlowHint(isSubmitting);

  const onCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const result = await copyText(email, mailRef.current);
    setCopyLabel(result === "copied" ? "Copied" : result === "selected" ? "Selected, press copy" : "Copy failed");
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyLabel("Copy email"), 2000);
    if (!reduce && result === "copied") burst(btn);
  };

  const onSubmit = async (data: PostcardForm) => {
    setStatus((s) => ({ ...s, kind: "idle", text: "" }));
    const [first, ...rest] = data.name.trim().split(/\s+/);
    try {
      // Same endpoint and payload as before: the backend saves the message, then emails it.
      await apiClient.sendContactMessage({
        first_name: first ?? "",
        last_name: rest.join(" "),
        email: data.email.trim(),
        mobile: "",
        message: data.message.trim(),
        website: data.website,
      });
      setStatus((s) => ({
        kind: "ok",
        text: `Stamped and sent. I will reply to ${data.email.trim()} soon.`,
        stampKey: s.stampKey + 1,
      }));
      reset();
    } catch (e) {
      console.error("Contact submit failed:", e);
      const limited = e instanceof ApiError && e.status === 429;
      const invalid = e instanceof ApiError && e.status === 422;
      setStatus((s) => ({
        ...s,
        kind: "err",
        text: limited
          ? "Too many postcards in a minute. Please wait a moment and send again."
          : invalid
            ? "Something in the form was not accepted. Check the fields and try again."
            : `Not sent. The server did not answer. Try again, or email me at ${email}.`,
      }));
    }
  };

  const year = new Date().getFullYear();
  const fieldErr = (id: string, msg?: string) =>
    msg ? (
      <span id={id} className="fld-err">
        {msg}
      </span>
    ) : null;

  return (
    <section id="contact" className="ps-sec ps-wrap" aria-labelledby="contact-title">
      <div className="contact-top">
        <h2 id="contact-title" className="kit-sr">Contact</h2>
        <p className="kicker">Have a role or a project in mind?</p>
        <a ref={mailRef} className="contact-mail" href={`mailto:${email}`}>
          {email}
        </a>
        <div className="ctl">
          <button className="ps-btn" type="button" onClick={onCopy}>
            <span aria-live="polite">{copyLabel}</span>
          </button>
          {linkedIn && (
            <a className="ps-btn ghost" href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {gitHub && (
            <a className="ps-btn ghost" href={gitHub} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>

      <form className="postcard" onSubmit={handleSubmit(onSubmit)} noValidate aria-labelledby="pc-title">
        <div className="pc-l">
          <h3 id="pc-title">Or send a postcard</h3>
          <div className="fld">
            <label htmlFor="pc-msg">Message</label>
            <textarea
              id="pc-msg"
              rows={5}
              placeholder="A short note about the role or project"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "pc-msg-err" : undefined}
              {...register("message", {
                required: "Write a short message first.",
                maxLength: { value: 5000, message: "Keep it under 5000 characters." },
                validate: (v) => v.trim().length > 0 || "Write a short message first.",
              })}
            />
            {fieldErr("pc-msg-err", errors.message?.message)}
          </div>
        </div>
        <div className="pc-r">
          <div className="pstamp" aria-hidden="true">
            AM
            <small>NOIDA</small>
          </div>
          <div className="fld">
            <label htmlFor="pc-name">From</label>
            <input
              id="pc-name"
              placeholder="Priya Raman"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "pc-name-err" : undefined}
              {...register("name", {
                required: "Add your name.",
                maxLength: { value: 160, message: "That name is too long." },
                validate: (v) => v.trim().length > 0 || "Add your name.",
              })}
            />
            {fieldErr("pc-name-err", errors.name?.message)}
          </div>
          <div className="fld">
            <label htmlFor="pc-email">Reply to</label>
            <input
              id="pc-email"
              type="email"
              placeholder="priya@company.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "pc-email-err" : undefined}
              {...register("email", {
                required: "Add an email so I can reply.",
                pattern: { value: EMAIL_RE, message: "That email does not look right." },
              })}
            />
            {fieldErr("pc-email-err", errors.email?.message)}
          </div>
          <div className="pc-honey" aria-hidden="true">
            <label htmlFor="pc-website">Website</label>
            <input id="pc-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>
          <button className="ps-btn" type="submit" style={{ justifySelf: "start", marginTop: 8 }} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Stamp and send"}
          </button>
          <div aria-live="polite">
            {isSubmitting && isSlow && (
              <p className="pc-status wait">Waking the server up. This can take up to a minute the first time.</p>
            )}
            {status.kind === "ok" && <p className="pc-status ok">{status.text}</p>}
          </div>
          <div role="alert">{status.kind === "err" && <p className="pc-status err">{status.text}</p>}</div>
        </div>
        {status.stampKey > 0 && (
          <div key={status.stampKey} className={`postmark hit${reduce ? " still" : ""}`} aria-hidden="true">
            <div>
              SENT
              <small>NOIDA {year}</small>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}
