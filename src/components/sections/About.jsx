import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    label: "Technologies & Stack",
    skills: [
      "React.js",
      "JavaScript ES6+ & TypeScript",
      "Java",
      "Node.js",
      "Python",
      "SQL & NOSQL Databases",
    ],
  },
  {
    label: "Infrastructure & Platforms",
    skills: [
      "Vercel",
      "IIS",
      "Windows Server",
      "Ubuntu Linux",
      "Cisco Networking",
      "Wazuh",
    ],
  },
  {
    label: "Scripting, Tools & Administration",
    skills: [
      "PowerShell",
      "Bash",
      "Git",
      "GitHub",
      "Postman",
      "Google Workspace",
      "L1/L2 Support",
    ],
  },
];

export const About = () => (
  <section id="about" className="section-space relative">
    <div className="section-shell">
      <RevealOnScroll>
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker">/ About</p>
            <h2 className="section-title">About me</h2>
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <RevealOnScroll>
          <article className="panel flex h-full min-h-80 flex-col justify-between p-7 sm:p-9">
            <p className="leading-7 text-slate-400">
              I am currently an IT Specialist at CSV Now, where I build internal
              systems and help manage the company’s IT infrastructure. My
              experience covers software development, databases, networking,
              system administration, deployment, and technical support. I also
              work with Cisco networks, Google Workspace, IIS deployments, and
              system security, while helping maintain reliable and efficient IT
              operations.
            </p>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="panel p-7 sm:p-9">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {" "}
                Technologies & tools I work with
              </h3>
            </div>
            <div className="divide-y divide-white/10">
              {skillGroups.map((group, index) => (
                <div
                  key={group.label}
                  className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr]"
                >
                  <div className="flex gap-3">
                    <span className="font-mono text-xs text-cyan-400">
                      0{index + 1}
                    </span>
                    <h4 className="font-medium text-slate-200">
                      {group.label}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
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
