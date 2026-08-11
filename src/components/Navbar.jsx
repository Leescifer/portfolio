import { useEffect } from "react";
import avatar from "../assets/website_avatar.png";

const links = ["About", "Experience", "Projects", "Contact"];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-[#030712]/70 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Leester, back to home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
            <img src={avatar} alt="Leester" className="h-5 w-5 rounded-full" />
          </span>
          <span className="font-semibold tracking-tight text-white">
            Leester<span className="text-cyan-300">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <a href="mailto:leester9103@gmail.com" className="nav-cta">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
        >
          <span className="space-y-1.5" aria-hidden="true">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>
    </nav>
  );
};
