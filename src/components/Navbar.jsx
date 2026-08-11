import { useEffect } from "react";

const links = ["About", "Experience", "Projects", "Contact"];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-[#38322d] bg-[#11100f]">
      <div className="section-shell flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Leester, back to home"
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            Leester<span className="text-[#d63a43]">.</span>
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
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#38322d] text-[#f3eee9] md:hidden"
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
