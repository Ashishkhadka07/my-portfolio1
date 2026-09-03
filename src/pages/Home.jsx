import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Sparkles, FolderGit2 } from "lucide-react";
import { personalInfo, projects, skills } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {personalInfo.status}
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-tight">
          Building modern web experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">precision & performance</span>.
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Featured Work</h2>
            <p className="text-slate-400 text-sm">Highlights of recent web engineering projects.</p>
          </div>
          <Link to="/projects" className="text-cyan-400 hover:underline text-sm font-mono flex items-center gap-1">
            <span>All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Quick Tech Overview */}
      <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
          <Terminal className="w-4 h-4" />
          <span>Core Capabilities</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm px-3 py-1.5 rounded-md font-mono">
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}