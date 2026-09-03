import AboutPreview from "../components/AboutPreview";
import ExperienceSection from "../components/ExperienceSection";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="w-full bg-slate-950">
      <Hero />
      <AboutPreview />
      <ExperienceSection />
    </div>
  );
}