import { Link, useLocation } from "react-router-dom";
import { Code2, FolderGit2, User, Mail, Terminal } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: Terminal },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-cyan-400 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <Code2 className="w-6 h-6 text-cyan-400" />
          <span>dev.portfolio</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map(({ name, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-slate-800 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}