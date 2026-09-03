import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Absolute overlay top bar with fluid side padding for full-width responsive scaling */}
      <header className="absolute top-0 left-0 right-0 z-40 w-full px-6 sm:px-12 lg:px-20 pt-6 sm:pt-8 pb-4 flex items-center justify-between text-white font-serif">
        {/* Left: Monogram Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          ASHISH
        </Link>

        {/* Right: Language Toggle & Menu Trigger */}
        <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-sans tracking-wide">
          {/* <button className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer">
            <span className="font-mono text-xs sm:text-sm">EN</span>
            <Globe className="w-4 h-4 opacity-80" />
          </button> */}

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 font-medium hover:text-slate-300 transition-colors cursor-pointer"
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest font-mono">Menu</span>
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div> 
      </header>

      {/* Fullscreen Responsive Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 text-white font-serif">
          <div className="w-full flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl sm:text-3xl font-bold tracking-tighter"
            >
              ASHISH
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest hover:text-slate-400 transition-colors cursor-pointer"
            >
              <span>Close</span>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="w-full flex flex-col space-y-6 sm:space-y-8 my-auto max-w-5xl mx-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight transition-all duration-200 ${
                    isActive
                      ? "text-white italic underline underline-offset-8 decoration-1"
                      : "text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="w-full flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-mono text-slate-500 border-t border-slate-800/80 pt-6">
            <p>© {new Date().getFullYear()} Personal Portfolio</p>
            <div className="flex gap-6 mt-2 sm:mt-0">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}