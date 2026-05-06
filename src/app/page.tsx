import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersMarqueeSection } from "@/components/sections/PartnersMarqueeSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PartnersMarqueeSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <FeaturedProjectsSection />
      <BlogSection />
      <CtaSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
