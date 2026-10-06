import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExperienceSection() {
  const fullCompanyName = "looking for a job..";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCompanyName.length) {
        setDisplayedName(fullCompanyName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90); // Speed of each letter appearing in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#111319] text-slate-100 font-sans px-6 sm:px-12 lg:px-24 py-24 flex flex-col justify-center items-center text-center border-t border-slate-800/50">
      {/* Playful Animated Badge */}
      <div className="mb-14 flex flex-col items-center">
        {/* Larger "Currently working" Header */}
        <span className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-light mb-4 -rotate-2 select-none">
          Currently
        </span>

        {/* Larger Badge with Typing Letter Effect */}
        <div className="rotate-2 inline-flex items-center gap-3 bg-slate-100 text-slate-950 px-7 py-3 rounded-full font-sans text-lg sm:text-xl lg:text-2xl font-bold shadow-xl shadow-black/50 transition-transform duration-300 hover:rotate-0 cursor-default">
          <span className="text-slate-500 font-serif italic text-xl sm:text-2xl">
            @
          </span>
          <span className="tracking-tight min-h-[1.75rem] inline-block">
            {displayedName}
            {/* Blinking Cursor */}
            <span className="animate-pulse text-slate-400 font-normal ml-0.5">
              |
            </span>
          </span>
        </div>
      </div>

      {/* Experience Description Paragraphs */}
      <div className="max-w-6xl mx-auto space-y-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
        <p>
          I have been working as a Software Engineer with expertise in React,
          Next.js, and TypeScript, contributing to large-scale web applications
          with a strong focus on microfrontend architecture.
        </p>

        <p>
          I led projects to replace outdated code with modern standards, ensured
          our apps work for everyone regardless of language or accessibility
          needs, and used AI tools to build and refine components much faster.
        </p>
      </div>

      {/* Hire Me CTA Section */}
      <div className="mt-20 pt-10 border-t border-slate-800/80 w-full max-w-2xl text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
          ● Available for Hire in Seoul
        </span>

        <div className="space-y-2">
          <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-100">
            Looking to expand your tech team?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-md mx-auto leading-relaxed">
            Open to full-time engineering roles, internships, and high-impact contracts in South Korea.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-100 text-slate-950 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-amber-200 hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}