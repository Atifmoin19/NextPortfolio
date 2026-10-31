import "./kit.css";
import "./NowHowIWork.css";

// Update NOW_UPDATED whenever the Now card changes.
const NOW_UPDATED = "November 2026";

const NOW: { label: string; items: string[] }[] = [
  {
    label: "Working",
    items: ["Senior frontend engineer at Zopper, owning React and TypeScript apps for fintech teams end to end."],
  },
  {
    label: "Running",
    items: [
      "All Square and Dayline, two side projects I revived, served with this portfolio's API from one free backend.",
      "Interesting UI, my animated component library, now on npm.",
    ],
  },
  {
    label: "Learning",
    items: [
      "In-process schedulers that do Celery Beat's job when there is only one free instance.",
      "Postgres advisory locks, so two instances never run the same sweep twice.",
      "Hosting several apps in one container on Render, with Caddy in front and a process supervisor.",
    ],
  },
];

const PRINCIPLES: { title: string; body: string; pin: string; r: number }[] = [
  {
    title: "Prove it in the browser",
    body: "Every app I revived got a scripted click-through in a real browser before it shipped. Green tests are not the same as a page that works.",
    pin: "var(--red)",
    r: -1.4,
  },
  {
    title: "Demo without signup",
    body: "All Square and Dayline give each visitor a private demo sandbox. It deletes itself after 24 hours, so nobody needs an account to look around.",
    pin: "var(--sky)",
    r: 1.1,
  },
  {
    title: "Honest numbers",
    body: "When I rebuilt this site I swapped claims I could not check for numbers I measured. The npm downloads below came straight from npm, with the date.",
    pin: "var(--butter)",
    r: 0.8,
  },
  {
    title: "Small, reversible deploys",
    body: "Three backends ship as one container image. Each process is supervised, and a deploy only goes live once its health check passes. Rolling back means redeploying the last image.",
    pin: "var(--mint)",
    r: -0.9,
  },
  {
    title: "Build it once, share it",
    body: "At Zopper I built the shared component system that cut duplicate effort by 40%. Interesting UI does the same job for my own projects.",
    pin: "var(--lilac)",
    r: 1.3,
  },
];

export default function NowHowIWork() {
  return (
    <section id="now" className="kit-sec ps-wrap" aria-labelledby="now-title">
      <h2 id="now-title" className="kit-h2">Now, and how I work</h2>
      <p className="kit-lede">
        What I am busy with this month, and the habits I keep on every project. Each habit comes with a real example.
      </p>

      <div className="now-grid">
        <article className="now-sheet" aria-labelledby="now-card-title">
          <span className="tape a" aria-hidden="true" />
          <span className="tape b" aria-hidden="true" />
          <h3 id="now-card-title">
            <i aria-hidden="true" />
            Now
          </h3>
          <dl className="now-list">
            {NOW.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>
                  {row.items.length === 1 ? (
                    row.items[0]
                  ) : (
                    <ul>
                      {row.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="now-updated mono">Updated {NOW_UPDATED}</p>
        </article>

        <div className="how">
          <h3 className="how-title">How I work</h3>
          <ul className="how-cards">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="icard"
                style={{ "--r": `${p.r}deg`, "--pc": p.pin } as React.CSSProperties}
              >
                <span className="pin" aria-hidden="true" />
                <h4>
                  <small aria-hidden="true">{String(i + 1).padStart(2, "0")}</small>
                  {p.title}
                </h4>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
