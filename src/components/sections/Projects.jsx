import { RevealOnScroll } from "../RevealOnScroll";

const focusAreas = [
  {
    number: "01",
    title: "Web applications",
    description:
      "Responsive products built around clear user flows, reusable components, and maintainable code.",
    tags: ["React", "Tailwind CSS", "REST APIs"],
    accent: "from-cyan-300/20 to-blue-500/5",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description:
      "Practical end-to-end solutions connecting approachable interfaces to reliable data and server logic.",
    tags: ["Node.js", "Express", "SQL / NoSQL"],
    accent: "from-violet-400/20 to-cyan-500/5",
  },
  {
    number: "03",
    title: "IT problem solving",
    description:
      "Technical support and troubleshooting grounded in careful diagnosis, clear documentation, and follow-through.",
    tags: ["Systems", "Support", "Documentation"],
    accent: "from-emerald-300/20 to-cyan-500/5",
  },
];

export const Projects = () => (
  <section
    id="projects"
    className="section-space border-y border-white/[0.06] bg-white/[0.015]"
  >
    <div className="section-shell">
      <RevealOnScroll>
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker"> Selected work</p>
            <h2 className="section-title">What I’m building toward.</h2>
          </div>
          <div>
            <p className="section-intro">
              My case studies are being prepared. In the meantime, these are the
              areas where I bring the most value and the standards I build
              around.
            </p>
            <a
              href="https://github.com/Leescifer"
              target="_blank"
              rel="noreferrer"
              className="text-link mt-5 inline-flex"
            >
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <RevealOnScroll key={area.number}>
            <article className="project-card group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.accent} opacity-40 transition duration-500 group-hover:opacity-80`}
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-cyan-300">
                    /{area.number}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-cyan-300/40 group-hover:text-cyan-300">
                    ↗
                  </span>
                </div>
                <div className="mt-24">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-400">
                    {area.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);
