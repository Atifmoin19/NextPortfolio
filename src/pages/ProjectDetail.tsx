import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Project } from "../data/content";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";
import ArchDiagram from "../components/case/ArchDiagram";
import Polaroids from "../components/case/Polaroids";
import { caseStudies, getCaseStudy, getNeighbours, sharedHosting, type CaseStudy, type Pastel } from "../data/caseStudies";
import { slugify } from "../utils/slugify";
import { isRetired } from "../data/work";
import "../components/case/case.css";

const NOTE_COLORS: Pastel[] = ["butter", "pink", "mint", "sky", "lilac"];
const NOTE_TILTS = ["-1.4deg", "1deg", "-0.6deg", "1.6deg", "-1deg", "0.5deg"];

/** A CMS project that has no hand-written case study still gets a simple page. */
function fromProject(p: Project): CaseStudy {
  return {
    slug: slugify(p.projectName),
    title: p.projectName,
    pitch: p.projectType,
    role: "",
    timeframe: "",
    status: p.link.project ? "live" : "open-source",
    statusLabel: p.link.project ? "Live" : "Project",
    color: "butter",
    links: {
      live: p.link.project || undefined,
      repos: p.link.code ? [{ label: "Code", url: p.link.code }] : [],
    },
    stack: p.stack ?? [],
    problem: p.problem ? [p.problem] : [],
    approach: [...(p.approach ? [p.approach] : []), ...(p.highlights ?? [])],
    architecture: { summary: "", components: [], nodes: [], edges: [] },
    decisions: [],
    results: [],
    screenshots: p.image ? [{ src: p.image, alt: p.projectName, caption: p.projectName }] : [],
    next: [],
  };
}

interface SectionDef {
  id: string;
  label: string;
}

function sectionsFor(c: CaseStudy): SectionDef[] {
  const s: SectionDef[] = [];
  if (c.problem.length || c.approach.length) s.push({ id: "problem", label: "Problem and approach" });
  if (c.architecture.nodes.length || c.architecture.components.length) s.push({ id: "architecture", label: "Architecture" });
  if (c.decisions.length) s.push({ id: "decisions", label: "Key decisions" });
  if (c.results.length || c.resultsNote || c.snippet) s.push({ id: "results", label: "Results" });
  if (c.screenshots.length) s.push({ id: "screens", label: "Screenshots" });
  if (c.next.length) s.push({ id: "next", label: "What I'd do next" });
  return s;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Hero({ c, index }: { c: CaseStudy; index: number }) {
  const repos = c.links.repos ?? [];
  return (
    <header className={`cs-sheet${c.flagship ? " has-stamp" : ""}`}>
      <span className="tape a" aria-hidden="true" style={{ ["--tc" as string]: `var(--${c.color})` }} />
      <span className="tape b" aria-hidden="true" />
      {c.flagship && (
        <span className="cs-stamp" aria-label="Flagship project">
          Flagship
        </span>
      )}
      <div className="cs-kicker">
        <span className="mono">
          Case study {index >= 0 ? `${String(index + 1).padStart(2, "0")} / ${String(caseStudies.length).padStart(2, "0")}` : ""}
        </span>
        <span className="cs-chip" style={{ ["--c" as string]: `var(--${c.color})` }}>
          {(c.status === "live" || c.status === "live-private") && <i aria-hidden="true" />}
          {c.statusLabel}
        </span>
      </div>
      <h1 className="cs-title">{c.title}</h1>
      <p className="cs-pitch">{c.pitch}</p>
      {(c.links.live || c.links.demo || c.links.npm || repos.length > 0) && (
        <div className="cs-actions">
          {c.links.live && (
            <a className="cs-btn" href={c.links.live} {...ext}>
              Live site <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {c.links.demo && (
            <a className="cs-btn pink" href={c.links.demo} {...ext}>
              Try the demo <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {c.links.npm && (
            <a className="cs-btn" href={c.links.npm} {...ext}>
              npm package <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {repos.map((r) => (
            <a key={r.url} className="cs-btn paper" href={r.url} {...ext}>
              {repos.length > 1 ? `Code: ${r.label}` : "Code"} <span aria-hidden="true">&#8599;</span>
            </a>
          ))}
        </div>
      )}
      {c.disclaimer && <p className="cs-disclaimer">{c.disclaimer}</p>}
    </header>
  );
}

function Facts({ c }: { c: CaseStudy }) {
  if (!c.role && !c.timeframe && !c.stack.length) return null;
  return (
    <div className="cs-facts">
      <div>
        <small>Role</small>
        {c.role || "Builder"}
      </div>
      <div>
        <small>Timeframe</small>
        {c.timeframe || "Ongoing"}
      </div>
      <div>
        <small>Stack</small>
        <div className="cs-stack">
          {c.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFound({ slug }: { slug?: string }) {
  return (
    <div className="cs-404">
      <div className="cs-sheet">
        <span className="tape a" aria-hidden="true" />
        <span className="tape b" aria-hidden="true" />
        <span className="mono">404 / no such project</span>
        <h1 className="cs-title" style={{ fontSize: "clamp(2rem, 6vw, 3.6rem)" }}>
          This page wandered off.
        </h1>
        <p className="cs-pitch">
          There is no case study called <b>{slug ? `"${slug}"` : "that"}</b>. Maybe it's one of these:
        </p>
        <ul>
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <RouterLink to={`/project/${c.slug}`}>{c.title}</RouterLink>
            </li>
          ))}
        </ul>
        <div className="cs-actions">
          <RouterLink className="cs-btn" to="/">
            <span aria-hidden="true">&larr;</span> Back to the portfolio
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const loading = useSelector((state: RootState) => state.portfolio.loading);

  const curated = getCaseStudy(slug);
  const cms = useMemo(() => {
    if (curated || isRetired(slug)) return undefined;
    const p = portfolioData?.projects.find((x) => slugify(x.projectName) === slug);
    return p ? fromProject(p) : undefined;
  }, [curated, portfolioData, slug]);
  const c = curated ?? cms;

  const sections = useMemo(() => (c ? sectionsFor(c) : []), [c]);
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);
  const index = c ? caseStudies.findIndex((x) => x.slug === c.slug) : -1;
  const nb = c ? getNeighbours(c.slug) : undefined;

  useEffect(() => {
    document.title = c ? `${c.title}: case study | Atif Moin` : "Project not found | Atif Moin";
  }, [c]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const jump = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    el.focus({ preventScroll: true });
  };

  const waiting = !c && !portfolioData && loading;
  const num = (id: string) => ids.indexOf(id) + 1;

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="cs-main ps-wrap" id="main" tabIndex={-1}>
        <RouterLink to="/" className="cs-back">
          <span aria-hidden="true">&larr;</span> All work
        </RouterLink>

        {waiting && <p className="mono" style={{ marginTop: 40 }}>Loading the project...</p>}
        {!waiting && !c && <NotFound slug={slug} />}

        {c && (
          <article>
            <Hero c={c} index={index} />
            <Facts c={c} />

            <div className="cs-body" style={sections.length ? undefined : { display: "block" }}>
              {sections.length > 0 && (
                <nav className="cs-index" aria-label="On this page">
                  <p className="lbl">On this page</p>
                  <ol>
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} onClick={(e) => jump(e, s.id)} aria-current={active === s.id ? "true" : undefined}>
                          <i aria-hidden="true" />
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div>
                {ids.includes("problem") && (
                  <section className="cs-sec" id="problem" tabIndex={-1} aria-labelledby="h-problem">
                    <span className="cs-num">{String(num("problem")).padStart(2, "0")}</span>
                    <h2 className="cs-h2" id="h-problem">Problem and approach</h2>
                    <div className="cs-two">
                      {c.problem.length > 0 && (
                        <div className="cs-prose">
                          <h3>The problem</h3>
                          {c.problem.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      )}
                      {c.approach.length > 0 && (
                        <div>
                          <h3>The approach</h3>
                          <ol className="cs-steps">
                            {c.approach.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                    {(c.tryIt?.length || c.sharedHosting) && (
                      <div className="cs-notes">
                        {c.tryIt && c.tryIt.length > 0 && (
                          <aside className="cs-sticky" aria-label="Try it">
                            <span className="tape" aria-hidden="true" />
                            <h3>Try it yourself</h3>
                            <ul>
                              {c.tryIt.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </aside>
                        )}
                        {c.sharedHosting && (
                          <aside className="cs-host" aria-label={sharedHosting.title}>
                            <h3>{sharedHosting.title}</h3>
                            {sharedHosting.lines.map((l) => (
                              <p key={l}>{l}</p>
                            ))}
                          </aside>
                        )}
                      </div>
                    )}
                  </section>
                )}

                {ids.includes("architecture") && (
                  <section className="cs-sec" id="architecture" tabIndex={-1} aria-labelledby="h-arch">
                    <span className="cs-num">{String(num("architecture")).padStart(2, "0")}</span>
                    <h2 className="cs-h2" id="h-arch">Architecture</h2>
                    {c.architecture.summary && <p className="cs-lede">{c.architecture.summary}</p>}
                    <ArchDiagram
                      nodes={c.architecture.nodes}
                      edges={c.architecture.edges}
                      label={`Architecture diagram of ${c.title}: ${c.architecture.nodes.map((n) => n.label).join(", ")}. Each part is described in the list below.`}
                    />
                    {c.architecture.components.length > 0 && (
                      <dl className="cs-comps">
                        {c.architecture.components.map((x) => (
                          <div key={x.name}>
                            <dt>{x.name}</dt>
                            <dd>{x.detail}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </section>
                )}

                {ids.includes("decisions") && (
                  <section className="cs-sec" id="decisions" tabIndex={-1} aria-labelledby="h-dec">
                    <SectionHeadInline n={num("decisions")} id="h-dec" title="Key decisions" lede="Each one bought something and cost something. Both are written down." />
                    <div className="cs-decisions">
                      {c.decisions.map((d, i) => (
                        <article
                          key={d.title}
                          className="cs-dec"
                          style={{
                            ["--nc" as string]: `var(--${NOTE_COLORS[(i + 1) % NOTE_COLORS.length]})`,
                            ["--r" as string]: NOTE_TILTS[i % NOTE_TILTS.length],
                          }}
                        >
                          <span className="tape" aria-hidden="true" />
                          <small>Decision {String(i + 1).padStart(2, "0")}</small>
                          <h3>{d.title}</h3>
                          <p>{d.choice}</p>
                          <div className="to">
                            <b>Trade-off</b>
                            <p>{d.tradeoff}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {ids.includes("results") && (
                  <section className="cs-sec" id="results" tabIndex={-1} aria-labelledby="h-res">
                    <SectionHeadInline n={num("results")} id="h-res" title="Results" lede={c.results.length ? "Only numbers that were measured, counted or fetched. The source is under each one." : undefined} />
                    {c.results.length > 0 && (
                      <div className="cs-results">
                        {c.results.map((r) => (
                          <div className="cs-res" key={r.label}>
                            <b className={r.value.length > 9 ? "long" : undefined}>{r.value}</b>
                            <p>{r.label}</p>
                            <small>{r.source}</small>
                          </div>
                        ))}
                      </div>
                    )}
                    {c.resultsNote && <p className="cs-note">{c.resultsNote}</p>}
                    {c.snippet && (
                      <figure className="cs-code">
                        <figcaption>{c.snippet.caption}</figcaption>
                        <pre tabIndex={0} aria-label={c.snippet.caption}>
                          <code>{c.snippet.code}</code>
                        </pre>
                      </figure>
                    )}
                  </section>
                )}

                {ids.includes("screens") && (
                  <section className="cs-sec" id="screens" tabIndex={-1} aria-labelledby="h-shots">
                    <SectionHeadInline n={num("screens")} id="h-shots" title="Screenshots" lede="Captured from the running product. Click or press Enter on any photo to enlarge it; arrow keys move between them." />
                    <Polaroids shots={c.screenshots} title={c.title} />
                  </section>
                )}

                {ids.includes("next") && (
                  <section className="cs-sec" id="next" tabIndex={-1} aria-labelledby="h-next">
                    <SectionHeadInline n={num("next")} id="h-next" title="What I'd do next" />
                    <ul className="cs-next">
                      {c.next.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {nb && (
              <nav className="cs-pn" aria-label="More projects">
                <RouterLink to={`/project/${nb.prev.slug}`} style={{ ["--c" as string]: `var(--${nb.prev.color})` }}>
                  <small>&larr; Previous project</small>
                  <b>{nb.prev.title}</b>
                </RouterLink>
                <RouterLink to={`/project/${nb.next.slug}`} className="nx" style={{ ["--c" as string]: `var(--${nb.next.color})` }}>
                  <small>Next project &rarr;</small>
                  <b>{nb.next.title}</b>
                </RouterLink>
              </nav>
            )}
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}

function SectionHeadInline({ n, id, title, lede }: { n: number; id: string; title: string; lede?: string }) {
  return (
    <>
      <span className="cs-num">{String(n).padStart(2, "0")}</span>
      <h2 className="cs-h2" id={id}>
        {title}
      </h2>
      {lede && <p className="cs-lede">{lede}</p>}
    </>
  );
}

