import { RevealOnScroll } from "../RevealOnScroll";
import Project1 from "../../assets/skc.png";

const focusAreas = [
  {
    number: "01",
    title: "SKC-YOUTH-HUB",
    description:
      "Responsive products built around clear user flows, reusable components, and maintainable code.",
    tags: ["ReactJS", "PostgreSQL", "JavaScript", "Express", "REST APIs"],
    image: Project1,
    link: "https://skc-youth-hub.netlify.app/",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description:
      "Practical end-to-end solutions connecting approachable interfaces to reliable data and server logic.",
    tags: ["Node.js", "Express", "SQL / NoSQL"],
    image: null,
    link: "https://github.com/Leescifer",
  },
  {
    number: "03",
    title: "IT problem solving",
    description:
      "Technical support and troubleshooting grounded in careful diagnosis, clear documentation, and follow-through.",
    tags: ["Systems", "Support", "Documentation"],
    image: null,
    link: "https://github.com/Leescifer",
  },
];

export const Projects = () => (
  <section
    id="projects"
    className="section-space border-y border-[#38322d] bg-[#151311]"
  >
    <div className="section-shell">
      <RevealOnScroll>
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker"> / Selected work</p>
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
            <a
              href={area.link}
              target="_blank"
              rel="noreferrer"
              className="project-card group block h-full overflow-hidden"
            >
              <div className="relative flex h-full flex-col">
                {/* Image / visual header */}
                <div className="relative -mx-6 -mt-6 mb-6 h-44 overflow-hidden rounded-t-[inherit] sm:-mx-8 sm:-mt-8">
                  {area.image ? (
                    <img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1f1b17] to-[#0f0d0c]">
                      <span className="font-mono text-4xl text-[#38322d] transition group-hover:text-[#d63a43]/40">
                        /{area.number}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent" />

                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-[#38322d]/80 bg-[#151311]/70 text-slate-300 backdrop-blur transition group-hover:border-[#d63a43] group-hover:text-[#d63a43]">
                    ↗
                  </span>

                  <span className="absolute left-4 top-4 rounded-full border border-[#38322d]/80 bg-[#151311]/70 px-3 py-1 font-mono text-xs text-[#d63a43] backdrop-blur">
                    /{area.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold tracking-tight text-white transition group-hover:text-[#d63a43]">
                    {area.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">
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
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);
