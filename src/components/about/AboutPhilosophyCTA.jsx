import { Link } from "react-router-dom";

export default function AboutPhilosophyCTA() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <div className="w-full font-sans">
      {/* Upper Dark Section */}
      <section className="w-full bg-[#1e2022] text-white px-6 sm:px-12 lg:px-20 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-wide">
            Philosophy
          </h2>

          {/* Core Mindset Statement */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal leading-relaxed text-slate-200">
            Great software is built at the intersection of{" "}
            <span className="font-semibold text-white">clean code, thoughtful design, and flawless performance</span>.
            I believe in building digital products that aren't just visually striking, but architected to scale reliably and serve real human needs.
          </p>

          {/* Outlined Contact Pill Button */}
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
    </div>
  );
}