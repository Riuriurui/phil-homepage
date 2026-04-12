import { Hero } from "@/components/sections/hero";
import { WorkSection } from "@/components/sections/work";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
