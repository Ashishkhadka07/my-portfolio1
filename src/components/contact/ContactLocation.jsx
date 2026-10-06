import React from "react";

export default function ContactLocation() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center pt-16 pb-20 px-6 flex flex-col items-center justify-center space-y-8">
      {/* Location & Availability Badge */}
      <div className="inline-flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-xl backdrop-blur-sm max-w-lg w-full">
        {/* Line 1: Primary Opportunities */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-medium font-sans text-slate-200 tracking-wide text-left sm:text-center">
            Open to Internship, Traineeship & Full-time Roles
          </span>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-slate-800/80 my-0.5" />

        {/* Line 2: Scope & Region Details */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400">
          <span>Seoul, South Korea</span>
          <span className="text-slate-600">•</span>
          <span>Global Remote & Local Projects</span>
        </div>
      </div>

      {/* Main Location Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-serif italic text-slate-100 tracking-wide">
          Based in Seoul, South Korea
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-md mx-auto leading-relaxed">
          Open to full-time engineering roles, high-impact freelance contracts,
          and technical consultancies.
        </p>
      </div>

      {/* Primary Call to Action Button */}
      <div className="pt-2">
        <a
          href="mailto:aasheeshkhadka@gmail.com"
          className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-amber-200 text-slate-950 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-amber-100 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(253,230,138,0.35)] active:scale-95"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
