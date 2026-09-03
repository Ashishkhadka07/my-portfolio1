import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f7f6f2] text-slate-900 font-sans border-t border-slate-300/80 px-6 sm:px-12 lg:px-20 py-16">
      <div className="w-full max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        {/* Left Side: Name / Branding Signature */}
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl sm:text-3xl text-slate-900 font-normal leading-tight">
            Khadka
          </span>
          <span className="font-serif italic text-2xl sm:text-3xl text-slate-800 font-normal leading-tight">
            Ashish
          </span>
          <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
            Portfolio © {currentYear}
          </p>
        </div>

        {/* Right Side: Navigation & Social Links */}
        <div className="flex flex-col items-start md:items-end gap-6">
          {/* Quick Page Links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link to="/" className="hover:text-slate-950 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-slate-950 transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-slate-950 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-slate-950 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-700">
            {/* GitHub Icon */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-200/80 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-200/80 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* X / Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-slate-200/80 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Mail Icon */}
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full hover:bg-slate-200/80 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Folio {currentYear}
          </span>
        </div>

      </div>
    </footer>
  );
}