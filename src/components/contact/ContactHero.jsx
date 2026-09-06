import React from "react";

export default function ContactHeader() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center pt-24 pb-12 px-6 space-y-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic font-normal tracking-wide text-slate-100">
        Let's Connect
      </h1>

      {/* Subtitle */}
      <p className="text-slate-300 text-sm sm:text-base font-sans max-w-lg mx-auto leading-relaxed">
        Ready to bring ideas to life? I'm always excited to work and collaborate in new projects.
      </p>

      {/* Center Round Graphic Icon */}
      <div className="pt-4 pb-2 flex justify-center">
        <div className="w-20 h-20 rounded-full border border-slate-700/80 bg-slate-900/50 p-2 flex items-center justify-center shadow-xl">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80 animate-pulse" />
        </div>
      </div>
    </div>
  );
}