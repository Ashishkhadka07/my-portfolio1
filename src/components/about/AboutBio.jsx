export default function AboutBio() {
  return (
    <section className="relative w-full bg-[#f7f6f2] text-slate-900 px-6 sm:px-12 lg:px-20 py-24 rounded-t-[2.5rem] -mt-10 z-20">
      <div className="w-full max-w-8xl mx-auto flex flex-col items-center">
        
        {/* Top Badge Icon / Sphere Accent */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-lg -mt-32 mb-12">
          <span className="text-xl sm:text-2xl">🌐</span>
        </div>

        {/* Editorial Text Blocks */}
        <div className="space-y-5 text-slate-800 font-sans text-lg sm:text-2xl lg:text-3xl leading-relaxed tracking-tight max-w-7xl text-left">
          
          <p className="font-normal">
            Over the last few years, I have built modern frontend and full-stack solutions—from enterprise web platforms to tailored digital products. I specialize in migrating legacy architecture to scalable React ecosystems, leveraging micro-frontends and robust APIs to guarantee high performance and maintainability.
          </p>

          <p className="font-normal text-slate-700">
            My engineering practice focuses on internationalization, accessible UI design (WCAG compliance), and modern developer workflows. Utilizing AI-driven tooling alongside modern component architecture, I deliver inclusive, reliable, and high-quality web applications.
          </p>

        </div>

        {/* Bottom Picture Frame Showcase */}
        <div className="mt-16 sm:mt-20 relative group">
          <div className="w-64 h-48 sm:w-80 sm:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 transition-transform duration-500 group-hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
              alt="Workspace setup"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/800/600";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}