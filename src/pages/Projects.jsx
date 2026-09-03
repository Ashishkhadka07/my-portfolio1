import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-100">Projects</h1>
        <p className="text-slate-400 text-base max-w-xl">
          An archive of full-stack platforms, frontend web applications, and digital tools.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeCategory === cat
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}