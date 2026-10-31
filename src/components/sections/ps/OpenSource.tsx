import { useEffect, useRef, useState } from "react";
import { NPM_FETCHED_AT, OPEN_SOURCE, type OpenSourcePackage } from "../../../data/openSource";
import { copyText } from "./copyText";
import "./kit.css";
import "./OpenSource.css";

const asOf = new Date(`${NPM_FETCHED_AT}T00:00:00`).toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});
const fmt = new Intl.NumberFormat("en-US");

function InstallLine({ name }: { name: string }) {
  const cmd = `npm i ${name}`;
  const codeRef = useRef<HTMLElement>(null);
  const [label, setLabel] = useState("Copy");
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    const result = await copyText(cmd, codeRef.current);
    setLabel(result === "copied" ? "Copied" : result === "selected" ? "Selected" : "Copy failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel("Copy"), 2000);
  };

  return (
    <div className="oss-install">
      <code ref={codeRef}>{cmd}</code>
      <button type="button" className="ps-btn sm" onClick={onCopy}>
        {label}
        <span className="kit-sr"> install command for {name}</span>
      </button>
      <span className="kit-sr" role="status">
        {label === "Copy" ? "" : label}
      </span>
    </div>
  );
}

function Card({ pkg }: { pkg: OpenSourcePackage }) {
  return (
    <li className="oss-card" style={{ "--oc": pkg.tint, "--tc": pkg.tape } as React.CSSProperties}>
      <span className="tape" aria-hidden="true" />
      <div className="oss-head">
        <h3>{pkg.title}</h3>
        <span className="oss-ver">{pkg.onNpm ? `v${pkg.version}` : "Source private"}</span>
      </div>
      <p>{pkg.what}</p>
      <div className="oss-stat">
        {pkg.onNpm && pkg.downloadsLastYear !== null ? (
          <>
            <b>{fmt.format(pkg.downloadsLastYear)}</b>
            <span>npm downloads in the last year</span>
          </>
        ) : (
          <span>{pkg.fact}</span>
        )}
      </div>
      {pkg.onNpm && <InstallLine name={pkg.name} />}
      <div className="oss-links">
        {pkg.demo && (
          <a className="ps-btn sm" href={pkg.demo} target="_blank" rel="noopener noreferrer">
            Live demo <span aria-hidden="true">&#8599;</span>
          </a>
        )}
        {pkg.github && (
          <a className="ps-btn sm ghost" href={pkg.github} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        )}
        {pkg.onNpm && (
          <a
            className="ps-btn sm pink"
            href={`https://www.npmjs.com/package/${pkg.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            npm <span aria-hidden="true">&#8599;</span>
          </a>
        )}
      </div>
    </li>
  );
}

export default function OpenSource() {
  return (
    <section id="open-source" className="ps-sec ps-wrap" aria-labelledby="oss-title">
      <h2 id="oss-title" className="ps-h2">Open source</h2>
      <p className="ps-lede">
        Small tools I pulled out of real projects. Download counts come straight from npm.
      </p>
      <ul className="oss-grid">
        {OPEN_SOURCE.map((pkg) => (
          <Card key={pkg.name} pkg={pkg} />
        ))}
      </ul>
      <p className="oss-asof mono">npm numbers as of {asOf}.</p>
    </section>
  );
}
