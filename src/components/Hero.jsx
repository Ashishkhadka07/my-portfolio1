import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.2,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "#08090d");
      bgGradient.addColorStop(0.5, "#0d111a");
      bgGradient.addColorStop(1, "#121824");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.9) star.alpha = 0.9;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 font-serif">
      {/* Full-width Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Top Overlay Navigation */}
      <Navbar />

      {/* Main Hero Content - Responsive scaling across mobile, tablet, desktop */}
      <div className="relative z-10 w-full h-full px-6 sm:px-12 lg:px-20 flex flex-col justify-between pt-32 sm:pt-40 pb-16 text-slate-100">
        {/* Top-Left Heading */}
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl italic font-light text-slate-300">
            Hi, I'm
          </h2>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white drop-shadow-lg leading-tight">
            Juan Pablo Jiménez!
          </h1>
        </div>

        {/* Bottom-Right Role Title */}
        <div className="self-end mb-4 sm:mb-8">
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-slate-200 tracking-wide drop-shadow-xl text-right">
            Software Engineer
          </h2>
        </div>
      </div>

      {/* Floating Center Orbit Accent */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-28 h-28 sm:w-40 sm:h-40 relative animate-pulse opacity-90">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            <circle cx="100" cy="100" r="10" fill="#ffffff" />
            <path
              d="M100 80L100 20M100 120L100 180M80 100L20 100M120 100L180 100"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}