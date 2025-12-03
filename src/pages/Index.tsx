import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TechSection } from '@/components/sections/TechSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TechSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
