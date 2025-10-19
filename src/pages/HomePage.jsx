import HeroSection from "../components/Hero";
import AboutSection from "../components/About";
import ExperiencePage from "../components/Experience";
import TechStack from "../components/TechStack";
import ProjectSection from "../components/Projects";
import AchievementSection from "../components/Achievements";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
      <HeroSection />
      <ExperiencePage />
      <TechStack />
      <ProjectSection />
      <AchievementSection />
    </div>
  );
}
