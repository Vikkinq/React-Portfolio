import HeroSection from "../components/Hero";
import ExperiencePage from "../components/Experience";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
      <HeroSection />
      <ExperiencePage />
    </div>
  );
}
