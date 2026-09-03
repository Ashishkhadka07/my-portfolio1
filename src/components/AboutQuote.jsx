import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutQuote() {
  const canvasRef = useRef(null);

  // Animated Blobs Graphic inside the White Box
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = 240;
    canvas.height = 240;

    const blobs = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      r: Math.random() * 18 + 12,
    }));

    const render = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.r || b.x > canvas.width - b.r) b.vx *= -1;
        if (b.y < b.r || b.y > canvas.height - b.r) b.vy *= -1;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative w-full bg-[#111319] text-slate-100 font-sans px-6 sm:px-12 lg:px-20 py-28 flex flex-col items-center justify-center border-t border-slate-800/50 overflow-hidden">
      
      <div className="w-full max-w-9xl mx-auto relative min-h-[500px] flex flex-col justify-between">
        
        {/* Floating "About me" Balloon Button (Centered) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce duration-[3000ms] z-20">
          {/* Dual Floating Spheres */}
          <div className="flex gap-1 mb-[-4px]">
            <div className="w-12 h-12 bg-white rounded-full shadow-xl border border-slate-200"></div>
            <div className="w-14 h-14 bg-white rounded-full shadow-xl border border-slate-200 -ml-4"></div>
          </div>
          
          {/* Balloon Strings Accent */}
          <svg className="w-8 h-10 text-slate-400" viewBox="0 0 40 50" fill="none">
            <path d="M10 0 Q 5 25, 20 50 M25 0 Q 35 25, 20 50" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Navigation Button */}
          <Link
            to="/about"
            className="bg-white text-slate-900 font-serif italic text-2xl sm:text-3xl px-8 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-transform border border-slate-200 font-medium"
          >
            About me
          </Link>
        </div>

        {/* 4-6 Line Split Left/Right Large Typography Quote */}
        <div className="mt-32 sm:mt-24 flex flex-col space-y-6 sm:space-y-8">
          
          {/* Left Aligned Line 1 & 2 */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-black tracking-tighter text-white uppercase leading-none">
              THE <br />
              <span className="italic font-light text-slate-300">UNIVERSE</span>
            </h2>
          </div>

          {/* Interactive Graphic Canvas Box (In Between Quotes) */}
          <div className="self-center my-4 relative group z-10">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] border-4 border-white bg-white transition-transform duration-500 group-hover:scale-105">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>

          {/* Right Aligned Line 3 & 4 */}
          <div className="text-right self-end max-w-xl">
            <h3 className="text-2xl sm:text-4xl lg:text-6xl font-serif italic font-light text-slate-300 leading-tight">
              IS FULL OF <br />
              <span className="font-sans font-bold non-italic text-white tracking-wider uppercase">
                MAGICAL THINGS
              </span>
            </h3>
          </div>

          {/* Left Aligned Line 5 & 6 */}
          <div className="text-left pt-4 sm:pt-6">
            <p className="text-lg sm:text-2xl lg:text-3xl font-serif italic text-slate-400">
              WAITING FOR OUR WITS TO GROW SHARPER.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}