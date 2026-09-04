import AboutBento from "../components/about/AboutBento";
import AboutBio from "../components/about/AboutBio";
import AboutHero from "../components/about/AboutHero";
import AboutSkillsCTA from "../components/about/AboutPhilosophyCTA";

export default function About() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#111319]">
      <AboutHero />
      <AboutBio />
      <AboutBento />  
      <AboutSkillsCTA />
    </main>
  );
}