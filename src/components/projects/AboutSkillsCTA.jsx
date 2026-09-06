// src/components/projects/AboutSkillsCTA.jsx
import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Twitter", url: "https://twitter.com" },
];

export default function AboutSkillsCTA() {
  return (
    <div className="w-full font-sans">
      {/* Upper Dark Section */}
      <section className="w-full bg-[#1e2022] text-white px-6 sm:px-12 lg:px-20 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-wide">
            Philosophy
          </h2>

          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal leading-relaxed text-slate-200">
            Great software is built at the intersection of{" "}
            <span className="font-semibold text-white">clean code, thoughtful design, and flawless performance</span>.
            I believe in building digital products that aren't just visually striking, but architected to scale reliably and serve real human needs.
          </p>

          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-block w-full max-w-xl py-4 px-8 border border-slate-600 rounded-full text-slate-200 font-medium tracking-wide text-sm sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-md"
            >
              Let’s build something together
            </Link>
          </div>

        </div>
      </section>

      {/* Lower Light Footer Section */}
      <footer className="w-full bg-[#f7f6f2] text-slate-800 px-8 sm:px-16 lg:px-24 py-16 flex flex-col justify-between min-h-[320px] relative">
        <div className="w-full flex justify-center -mt-20 mb-8">
          <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs text-white shadow-lg">
            ●
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-end justify-between gap-12 mt-auto">
          <div className="text-left">
            <h3 className="text-3xl sm:text-4xl font-serif italic text-slate-900 leading-none">
              Your Name
            </h3>
          </div>

          <div className="flex flex-col items-end text-right space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              Socials
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
            <span className="text-xs font-mono text-slate-400 pt-6">
              Folio 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}