import { FileText } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative w-full min-h-screen bg-[#f7f6f2] text-slate-900 font-serif px-6 sm:px-12 lg:px-24 py-20 flex flex-col justify-between items-center text-center">
      {/* Centered Bio Statement */}
      <div className="w-full max-w-7xl mx-auto mt-6">
        <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-sans font-light">
          Hello there! Welcome to my little space on the web, where I showcase my works, 
          experiments, and web development projects. Right now, I am exploring interactive 
          animations and smooth transition effects to build more immersive, memorable digital experiences.
        </p>
      </div>

      {/* Center Title with Hand-Drawn Accent */}
      <div className="my-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
          Creative Dev +
        </h2>
        <span className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light text-slate-800 mt-1">
          Engineer
        </span>

        {/* Hand-drawn / Spring Doodle Accent */}
        <div className="mt-3 w-16 sm:w-20 text-slate-800">
          <svg
            viewBox="0 0 100 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-auto"
          >
            <path d="M 10 15 Q 25 5, 40 15 T 70 15 T 90 15 M 25 22 Q 45 28, 75 22" />
          </svg>
        </div>
      </div>

      {/* Profile Photo / Polaroid Card */}
      <div className="relative group max-w-sm sm:max-w-md w-full bg-white p-3 sm:p-4 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto mb-10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full border-2 border-white shadow-md z-10" />

        <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
            alt="Profile Preview"
            className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Download CV Button */}
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-sans text-[24px] font-medium px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all cursor-pointer group"
      >
        <span>Download CV</span>
        <FileText className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
      </a>
    </section>
  );
}