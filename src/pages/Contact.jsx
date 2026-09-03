import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-100">Get in Touch</h1>
        <p className="text-slate-400 text-base max-w-xl">
          Have a project, job opportunity, or question? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
          {submitted ? (
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-sm text-center">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">NAME</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">EMAIL</label>
                <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE</label>
                <textarea required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold p-3 rounded-lg text-sm transition-all">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </>
          )}
        </form>

        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-200">Direct Contact</h2>
          <div className="space-y-3 font-mono text-sm">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400">
              <Github className="w-5 h-5 text-cyan-400" />
              <span>GitHub Profile</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400">
              <Linkedin className="w-5 h-5 text-cyan-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}