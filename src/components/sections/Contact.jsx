import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => (
  <section id="contact" className="section-space relative overflow-hidden">
    <div
      className="contact-glow absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full"
      aria-hidden="true"
    />
    <div className="section-shell relative z-10">
      <RevealOnScroll>
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center"> / Contact</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg">
            I’m open to development work, IT opportunities, and collaborations
            where careful execution matters. Tell me what you’re working on.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="button-primary" href="mailto:leester9103@gmail.com">
              Email me <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/leester-cruspero-7646b0324"
              target="_blank"
              rel="noreferrer"
            >
              See my LinkedIn
            </a>
          </div>
          <a
            href="mailto:leester9103@gmail.com"
            className="mt-8 inline-block font-mono text-sm text-slate-500 transition hover:text-cyan-300"
          >
            leester9103@gmail.com
          </a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);
