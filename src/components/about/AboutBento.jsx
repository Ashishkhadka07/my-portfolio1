import { useEffect, useState } from "react";

// Inline Icon Components
function TerminalIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LayersIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function ActivityIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={`${className} fill-amber-400 stroke-amber-400`} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const techCategories = [
  { category: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "Backend & DB", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { category: "Workflow & Tools", items: ["Vercel", "Figma", "Git & GitHub"] },
];

export default function AboutBento({ username = "Ashishkhadka07" }) {
  const [stats, setStats] = useState({
    followers: 0,
    publicRepos: 0,
    stars: 0,
    loading: true,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposRes.json();

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
          : 0;

        setStats({
          followers: userData.followers || 0,
          publicRepos: userData.public_repos || 0,
          stars: totalStars,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    }

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  // Heatmap block generation
  const weeks = Array.from({ length: 42 }, () =>
    Array.from({ length: 7 }, () => {
      const val = Math.random();
      if (val > 0.85) return 3;
      if (val > 0.65) return 2;
      if (val > 0.45) return 1;
      return 0;
    })
  );

  const getHeatmapColor = (level) => {
    switch (level) {
      case 3:
        return "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]";
      case 2:
        return "bg-emerald-600/80";
      case 1:
        return "bg-emerald-950/70";
      default:
        return "bg-slate-900/60 border border-slate-800/80";
    }
  };

  return (
    <section className="w-full bg-[#111319] text-white px-6 sm:px-12 lg:px-20 py-20 border-t border-slate-800/80 font-sans">
      <div className="w-full max-w-9xl mx-auto space-y-8">
        
        {/* Top Grid: Technical Core Stack Categorized */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Engineering Ethos Card */}
          <div className="lg:col-span-5 bg-[#161922] border border-slate-800/90 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 mb-6 text-indigo-400 font-mono text-xs uppercase tracking-widest">
                <TerminalIcon className="w-4 h-4" />
                <span>Engine Methodology</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-light text-slate-100 leading-tight">
                Crafting performant digital products with clean modular code.
              </h2>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Architecture / Web Systems</span>
              <span className="text-emerald-400 font-semibold">Ready for Deploy</span>
            </div>
          </div>

          {/* Categorized Tech Matrix */}
          <div className="lg:col-span-7 bg-[#161922] border border-slate-800/90 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <LayersIcon className="w-4 h-4" />
              <span>Technical Capabilities</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techCategories.map((cat) => (
                <div key={cat.category} className="space-y-3">
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm font-sans text-slate-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 text-right">
              <span className="text-[11px] font-mono text-slate-500">Continuous Integration & Evolution</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Custom GitHub Activity Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Custom Heatmap Output */}
          <div className="lg:col-span-8 bg-[#161922] border border-slate-800/90 rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <GithubIcon className="w-4 h-4" />
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-emerald-400 transition-colors"
                >
                  @{username}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ActivityIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-400">Live Pulse</span>
              </div>
            </div>

            {/* Custom Horizontal Scrollable Matrix */}
            <div className="flex gap-1.5 justify-between py-2 overflow-x-auto">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5 shrink-0">
                  {week.map((dayLevel, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-[3px] ${getHeatmapColor(dayLevel)} transition-all duration-300 hover:scale-125 hover:z-10`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 text-[10px] font-mono text-slate-500 border-t border-slate-800/80 mt-4">
              <span>Q1 Cycle</span>
              <span>Q2 Cycle</span>
              <span>Q3 Cycle</span>
              <span>Q4 Cycle</span>
            </div>
          </div>

          {/* Minimalist Live Stats Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            
            <div className="bg-[#161922] border border-slate-800/90 rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
              <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Repositories</span>
              <p className="text-4xl font-light font-mono text-slate-100 my-2">
                {stats.loading ? "..." : stats.publicRepos}
              </p>
              <span className="text-[10px] text-emerald-400 font-mono">Public Codebases</span>
            </div>

            <div className="bg-[#161922] border border-slate-800/90 rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
              <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Followers</span>
              <p className="text-4xl font-light font-mono text-slate-100 my-2">
                {stats.loading ? "..." : stats.followers}
              </p>
              <span className="text-[10px] text-indigo-400 font-mono">Network</span>
            </div>

            <div className="col-span-2 bg-[#161922] border border-slate-800/90 rounded-3xl p-6 flex items-center justify-between shadow-2xl">
              <div>
                <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">GitHub Stars</span>
                <p className="text-3xl font-light font-mono text-amber-400 mt-1">
                  {stats.loading ? "..." : stats.stars}
                </p>
              </div>
              <StarIcon className="w-8 h-8 opacity-90" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}