const links = ["Home", "About", "Experience", "Projects", "Contact"];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => (
  <div
    id="mobile-navigation"
    className={`fixed inset-0 z-50 flex flex-col bg-[#02050d]/95 px-6 pb-10 pt-6 backdrop-blur-2xl transition duration-300 md:hidden ${
      menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
    }`}
  >
    <div className="flex items-center justify-between">
      <span className="font-semibold text-white">Navigate<span className="text-cyan-300">.</span></span>
      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-2xl text-white"
        aria-label="Close navigation menu"
      >
        ×
      </button>
    </div>

    <div className="my-auto flex flex-col">
      {links.map((link, index) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="border-b border-white/10 py-4 text-3xl font-medium tracking-tight text-white transition hover:pl-2 hover:text-cyan-300 sm:py-5 sm:text-4xl"
        >
          <span className="mr-4 font-mono text-xs text-cyan-400">0{index + 1}</span>
          {link}
        </a>
      ))}
    </div>

    <a href="mailto:leester9103@gmail.com" className="button-primary justify-center">Let&apos;s work together</a>
  </div>
);
