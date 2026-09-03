import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ExperienceSection from "../components/ExperienceSection";
import AboutQuote from "../components/AboutQuote";

export default function Home() {
  return (
    <div className="w-full bg-slate-950">
      <Hero />
      <AboutPreview />
      <ExperienceSection />
      <AboutQuote />
    </div>
  );
}