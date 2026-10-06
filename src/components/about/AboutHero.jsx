import { useState } from "react";
import portraitImage from "../../assets/ashish_portrait.jpg"; 
import img1 from "../../assets/ashish_portrait.jpg";
import img2 from "../../assets/ashish_portrait.jpg";
import img3 from "../../assets/ashish_portrait.jpg";
import img4 from "../../assets/ashish_portrait.jpg";
import img5 from "../../assets/ashish_portrait.jpg";

const photos = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

export default function AboutHero() {
  const [revealedImages, setRevealedImages] = useState([]);

  // Spawns a photo thumbnail at the cursor position on hover
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Throttle spawning to keep performance smooth
    if (Math.random() > 0.25) return;

    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    const newImage = {
      id: Date.now() + Math.random(),
      x,
      y,
      src: randomPhoto,
      rotation: (Math.random() - 0.5) * 20,
    };

    setRevealedImages((prev) => [...prev.slice(-12), newImage]);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#111319] text-white overflow-hidden flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-24 select-none"
    >
      {/* Background Interactive Hover Reveal Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {revealedImages.map((img) => (
          <div
            key={img.id}
            style={{
              left: `${img.x}px`,
              top: `${img.y}px`,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
            }}
            className="absolute w-28 h-36 sm:w-36 sm:h-44 rounded-lg overflow-hidden border-2 border-white/80 shadow-2xl animate-fade-in transition-all duration-300 pointer-events-none"
          >
            <img
              src={img.src}
              alt="Memory preview"
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Main Content Layout aligned with Hero Grid */}
      <div className="w-full max-w-9xl mx-auto relative z-10 flex flex-col justify-between min-h-[75vh]">
        {/* Center Grid: DEVELOPER | Center Portrait | ENGINEER */}
        <div className="my-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Title: DEVELOPER */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight text-slate-100 uppercase underline decoration-slate-500 underline-offset-8">
              FRONTEND
            </h1>
          </div>

          {/* Center Portrait Box */}
          <div className="relative group w-72 h-96 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-slate-700/60 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-slate-900 transition-transform duration-500 hover:scale-105 z-10">
            <img
              src={portraitImage}
              alt="Ashish Khadka Portrait"
              className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Right Title: ENGINEER */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight text-slate-100 uppercase underline decoration-slate-500 underline-offset-8">
              DEVELOPER
            </h1>
          </div>
        </div>

        {/* Bottom Floating Visual Thumbnails */}
        <div className="flex justify-between items-end pt-8">
          {/* Floating Badge Graphic */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-slate-600 bg-slate-900 flex items-center justify-center shadow-xl animate-spin-slow">
            <span className="text-xs font-mono text-slate-300">✦ AK ✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
