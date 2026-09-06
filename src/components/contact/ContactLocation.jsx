import React from "react";

export default function ContactLocation() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center pt-16 pb-20 px-6 flex flex-col items-center justify-center space-y-6">
      
      {/* Location Header with Pulse Indicator */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for global remote & local projects
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif italic text-slate-100 tracking-wide pt-2">
          Based in Kathmandu, Nepal
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-md leading-relaxed">
        Open to full-time engineering roles, high-impact freelance contracts, and technical consultancies.
      </p>

      {/* Main Call to Action Button */}
      <div className="pt-2">
        <a
          href="mailto:youremail@gmail.com"
          className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-amber-200 text-slate-950 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-amber-100 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(253,230,138,0.35)] active:scale-95"
        >
          Get In Touch
        </a>
      </div>

    </div>
  );
}