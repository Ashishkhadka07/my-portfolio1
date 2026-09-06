import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AboutSkillsCTA from "../components/projects/AboutSkillsCTA";

export default function Projects() {
  return (
    <main className="w-full min-h-screen bg-[#16181e] text-white">
      <ProjectsHero />
      <ProjectsGrid />
      <AboutSkillsCTA />
    </main>
  );
}