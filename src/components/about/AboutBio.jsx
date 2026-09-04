import { useState } from "react";

// Image dataset for the bottom photo gallery
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    caption: "Engineering Workspace",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    caption: "Collaborative Design",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    caption: "Code & Architecture",
  },
];

const paragraph1 =
  "Over the last few years, I have built modern frontend and full-stack solutions—from enterprise web platforms to tailored digital products. I specialize in migrating legacy architecture to scalable React ecosystems, leveraging micro-frontends and robust APIs to guarantee high performance and maintainability.";

const paragraph2 =
  "My engineering practice focuses on internationalization, accessible UI design (WCAG compliance), and modern developer workflows. Utilizing AI-driven tooling alongside modern component architecture, I deliver inclusive, reliable, and high-quality web applications.";

export default function AboutBio() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Helper component to split paragraph text into interactive hoverable words
  const InteractiveParagraph = ({ text }) => {
    return (
      <p className="font-normal leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
        {text.split(" ").map((word, idx) => (
          <span
            key={idx}
            className="transition-all duration-200 cursor-default hover:text-black hover:scale-110 hover:font-semibold hover:-translate-y-0.5 inline-block origin-bottom selection:bg-slate-300"
          >
            {word}
          </span>
        ))}
      </p>
    );
  };

  return (
    <section className="relative w-full bg-[#f7f6f2] text-slate-900 px-6 sm:px-12 lg:px-20 py-24 rounded-t-[2.5rem] -mt-10 z-20 overflow-hidden">
      <div className="w-full max-w-8xl mx-auto flex flex-col items-center">

        {/* Interactive Text Block with Word-Level Hover Effect */}
        <div className="space-y-7 text-slate-700 font-sans text-lg sm:text-2xl lg:text-3xl tracking-tight max-w-7xl text-left">
          <InteractiveParagraph text={paragraph1} />
          <InteractiveParagraph text={paragraph2} />
        </div>

        {/* Multi-Picture Showcase Section with Dynamic Hover Effects */}
        <div className="mt-20 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                onMouseEnter={() => setActiveImageIndex(index)}
                onMouseLeave={() => setActiveImageIndex(null)}
                className={`relative group rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 transition-all duration-500 cursor-pointer ${
                  index === 1 ? "sm:-translate-y-4" : ""
                } ${
                  activeImageIndex === index
                    ? "scale-105 z-20 shadow-2xl -rotate-1"
                    : activeImageIndex !== null
                    ? "opacity-60 scale-95 grayscale"
                    : "grayscale hover:grayscale-0"
                }`}
              >
                <div className="w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/800/600?random=${img.id}`;
                    }}
                  />
                </div>

                {/* Floating Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-mono uppercase tracking-wider">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}