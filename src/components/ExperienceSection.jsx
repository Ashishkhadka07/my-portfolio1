export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#111319] text-slate-100 font-sans px-6 sm:px-12 lg:px-24 py-24 flex flex-col justify-center items-center text-center border-t border-slate-800/50">
      
      {/* Playful Sticker Badge */}
      <div className="mb-12 flex flex-col items-center">
        <span className="font-serif italic text-2xl sm:text-3xl text-slate-400 font-light mb-2 -rotate-3 select-none">
          Currently working
        </span>

        <div className="rotate-2 inline-flex items-center gap-2.5 bg-slate-100 hover:rotate-0 text-slate-950 px-5 py-2 rounded-full font-sans text-sm sm:text-base font-bold shadow-lg shadow-black/40 transition-transform duration-300 cursor-default">
          <span className="text-slate-500 font-serif italic text-base">@</span>
          <span className="tracking-tight">VS Nepal Pvt. Ltd.</span>
        </div>
      </div>

      {/* Experience Description Paragraphs */}
      <div className="max-w-5xl mx-auto space-y-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
        <p>
          I have been working as a Software Engineer with expertise in React, Next.js, and TypeScript, 
          contributing to large-scale web applications with a strong focus on microfrontend architecture.
        </p>

        <p>
          I've led the migration of legacy systems, removing deprecated technologies, and implemented 
          accessibility standards (WCAG AA/AAA) and RTL support for internationalization. I also collaborated 
          using AI-assisted workflows with Cursor to iterate on component design and improve development efficiency.
        </p>
      </div>

      {/* Want to know more CTA Header */}
      <div className="mt-16 pt-8 border-t border-slate-800/60 w-full max-w-2xl">
        <h3 className="font-serif italic text-2xl sm:text-3xl font-light text-slate-200">
          Want to know more?
        </h3>
      </div>
    </section>
  );
}