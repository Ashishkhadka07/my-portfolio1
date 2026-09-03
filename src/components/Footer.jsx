import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}