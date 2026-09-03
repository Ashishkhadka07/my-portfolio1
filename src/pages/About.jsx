import { personalInfo, skills } from "../data/portfolioData";
import { Code, Server, Wrench } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-100">About Me</h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          {personalInfo.bio}
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-3">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-200">{skill.name}</h3>
                <span className="text-xs text-slate-500 font-mono">{skill.category}</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}