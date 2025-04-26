import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AppSection } from "@/components/app-section";
import { VideoShowcase } from "@/components/video-showcase";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <HeroSection />
          <ServicesSection />
          <AppSection />
          <VideoShowcase />
          <ProjectsSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
