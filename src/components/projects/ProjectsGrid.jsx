import { useState } from "react";

// Project Data - Add your custom projects here
const projectsData = [
  {
    id: 1,
    title: "Maxims Banquets",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    description: "A full-stack event management & venue booking platform for a premier banquet chain. Features dynamic gallery, package selector, and automated inquiries.",
    tags: ["React", "Node.js", "Express", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Danalac Nepal",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    description: "Digital presence and product showcase for infant formula nutrition. Designed with responsive layouts and focused medical-grade clarity.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "National Herbs",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
    description: "E-commerce platform for organic and herbal wellness products. Features catalog browsing, cart management, and streamlined checkout.",
    tags: ["React", "Express", "PostgreSQL", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Interactive Q&A Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
    description: "An interactive app generating random questions across categories. Features community submissions, a like system, and payment integration.",
    tags: ["React", "Node.js", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Bilingual NGO Portal",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1532622723932-15f1d1b91f0f?q=80&w=1000&auto=format&fit=crop",
    description: "Connecting donors and volunteers with local cause profiles, secure payments, and gamified engagement with badges and tiers.",
    tags: ["React", "Tailwind CSS", "REST API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Developer Portfolio 2026",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    description: "Personal engineering portfolio built with React and Tailwind CSS. Features Bento grids, dynamic GitHub API metrics, and dark aesthetics.",
    tags: ["React", "Tailwind CSS", "GitHub API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "Full Stack", "Frontend", "E-Commerce"];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-[#16181e] text-white px-6 sm:px-12 lg:px-20 pb-28">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-800/80 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#1c1f28] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Block */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f28] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-4 text-xs font-serif italic text-white font-semibold drop-shadow-md">
                    {project.title}
                  </span>
                </div>

                {/* Card Info Content */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech Tags & Links */}
              <div className="p-5 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs font-mono">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}