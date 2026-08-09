export const Footer = () => (
  <footer className="border-t border-white/[0.07] py-8">
    <div className="section-shell flex flex-col items-center justify-between gap-5 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
      <p>
        © {new Date().getFullYear()} Designed and built by Leester. All rights
        reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          className="footer-link"
          href="https://github.com/Leescifer"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/leester-cruspero-7646b0324"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
