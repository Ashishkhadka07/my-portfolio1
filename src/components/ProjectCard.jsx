import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          <div className="flex gap-2">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-400 pt-4 border-t border-slate-800/60">
        {project.tech.map((item, idx) => (
          <span key={idx} className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}