import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/noFaceAvatar.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-[100dvh] items-center pb-16 pt-28 sm:pt-32"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Portrait */}
        <RevealOnScroll>
          <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full bg-[#191715] lg:max-w-sm">
            <img
              src={profile}
              alt="Portrait of Leester Cruspero"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.25]"
            />
          </div>
        </RevealOnScroll>

        {/* Text */}
        <RevealOnScroll>
          <div className="max-w-2xl">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              hi, <span className="accent-text">leester</span> here.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              IT Specialist and Full-Stack Developer. I build practical digital
              solutions, solve technical problems, and work across software and
              IT systems.
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
