import { RevealOnScroll } from "../RevealOnScroll";

const experience = [
  {
    period: "August 2025 — Present",
    role: "IT Specialist",
    organization: "CSV Now",
    description: [
      "Lead the full lifecycle development, database administration, and IIS deployment of a company portal and Document Management System (DMS), establishing robust user access controls to ensure data security.",
      "Managed Cisco network infrastructure, configuring secure internal access through IP-based restrictions and troubleshooting server downtime to maintain system reliability.",
      " Administered Google Workspace, including user accounts, permissions, organizational settings, and access management.",
    ],
    highlights: [
      "End-to-End Software Development",
      "Network & Infrastructure Management",
      "Troubleshooting & problem-solving",
    ],
    active: false,
  },
  {
    period: "October 2024 — August 2025",
    role: "Full-stack Developer",
    organization: "Kre8tib I.T. Services",
    description: [
      "Developed RESTful APIs using Node.js, Express.js, TypeScript, and MongoDB with Postman testing.",
      "Built and maintained responsive front-end interfaces in collaboration with the design and QA team.",
      "Deployed and monitored cloud-based services, ensuring reliability across environments.",
    ],
    highlights: [
      "Full-Stack Development",
      "API Design & Integration",
      "Cloud Deployment",
    ],
    active: true,
  },
];

export const Experience = () => (
  <section
    id="experience"
    className="section-space experience-section relative overflow-hidden"
  >
    <div className="section-shell relative z-10">
      <RevealOnScroll>
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker">/ Experience</p>
            <h2 className="section-title">Experience across IT.</h2>
          </div>
        </div>
      </RevealOnScroll>

      <div className="experience-timeline mt-14">
        {experience.map((item, index) => (
          <RevealOnScroll key={item.role}>
            <article className="experience-card flat-card group">
              <div className="experience-marker" aria-hidden="true">
                <span className={item.active ? "is-active" : ""} />
              </div>

              <div className="grid gap-7 md:grid-cols-[10rem_1fr] md:gap-12">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#d63a43]">
                    {item.period}
                  </span>
                  <p className="mt-3 font-mono text-xs text-slate-600">
                    EXP / 0{index + 1}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[#d63a43]">
                        {item.organization}
                      </p>
                    </div>
                    <span className="experience-arrow" aria-hidden="true">
                      &#8599;
                    </span>
                  </div>

                  {Array.isArray(item.description) ? (
                    <ul className="mt-6 max-w-2xl space-y-2 leading-7 text-slate-400">
                      {item.description.map((line, lineIndex) => (
                        <li key={lineIndex} className="flex gap-2">
                          <span
                            className="mt-1 text-[#d63a43]"
                            aria-hidden="true"
                          >
                            &#8594;
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight} className="skill-pill">
                        {highlight}
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
