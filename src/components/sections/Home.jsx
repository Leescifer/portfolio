import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/avatar.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pb-16 pt-28 sm:pt-32"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Portrait */}
        <RevealOnScroll>
          <div className="mx-auto w-full max-w-xs text-cyan-300 lg:max-w-sm">
            <img
              src={profile}
              alt="Coming Soon"
              className="h-auto w-full border border-cyan-800 rounded-2xl object-cover transform transition duration-500 hover:scale-[1.15] hover:rotate-[-20]"
            />
          </div>
        </RevealOnScroll>

        {/* Text */}
        <RevealOnScroll>
          <div className="max-w-2xl">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              hi, <span className="gradient-text">leester</span> here.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              IT Specialist and Full-stack Developer. I build responsive web
              experiences and practical systems, and occasionally get to do both
              at once.
            </p>

            <div className="mt-8">
              <a
                className="button-secondary inline-flex items-center gap-2"
                href="#contact"
              >
                <span aria-hidden="true">✉</span>
                Say hi!
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
