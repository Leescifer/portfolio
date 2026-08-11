import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    label: "Technologies & Stack",
    skills: [
      "MERN Stack",
      "JavaScript ES6 & TypeScript",
      "Java, Python",
      "SQL & NoSQL Databases",
    ],
  },
  {
    label: "Infrastructure & Platforms",
    skills: [
      "Vercel, Github Actions",
      "IIS, Wazuh ",
      "Ubuntu Linux, Windows Server",
      "Cisco Networking",
      "Google Cloud",
    ],
  },
  {
    label: "Scripting, Tools & Administration",
    skills: [
      "PowerShell, Bash",
      "L1/L2 Support",
      "Git, GitHub",
      "Postman",
      "Google Workspace",
    ],
  },
];

export const About = () => (
  <section id="about" className="section-space relative overflow-hidden">
    <div className="section-shell">
      <RevealOnScroll>
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker">/ About</p>
            <h2 className="section-title">About me</h2>
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[0.8fr_1.2fr]">
        <RevealOnScroll>
          <article className="panel flex h-full flex-col p-6 sm:p-9">
            <p className="leading-7 text-slate-400">
              I’m currently an IT Specialist at CSV Now, working across software
              development and IT operations while continuously expanding my
              experience in technology. Beyond work, I enjoy exploring modern
              and emerging technologies, staying physically active, and
              continuously learning new skills.
            </p>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="panel p-6 sm:p-9">
            <div className="mb-6 flex items-center justify-between sm:mb-8">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Technologies & tools I work with
              </h3>
            </div>
            <div className="divide-y divide-[#38322d]">
              {skillGroups.map((group, index) => (
                <div
                  key={group.label}
                  className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:gap-4 sm:py-6 md:grid-cols-[8rem_1fr]"
                >
                  <div className="flex gap-3">
                    <span className="font-mono text-xs text-[#d63a43]">
                      0{index + 1}
                    </span>
                    <h4 className="font-medium text-slate-200">
                      {group.label}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill cursor-default transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
);
