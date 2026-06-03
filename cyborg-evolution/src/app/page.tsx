import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { EvolutionSection } from "@/components/sections/evolution";
import { TechnologySection } from "@/components/sections/technology";
import { Experience3DSection } from "@/components/sections/experience-3d";
import { EventsSection } from "@/components/sections/events";
import { CommunitySection } from "@/components/sections/community";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EvolutionSection />
      <TechnologySection />
      <Experience3DSection />
      <EventsSection />
      <CommunitySection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
