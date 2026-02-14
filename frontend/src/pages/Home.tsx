import ScrollReveal from '../components/ui/ScrollReveal';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import AIFirstSection from '../components/home/AIFirstSection';
import ServicesSection from '../components/home/ServicesSection';
import SolutionsOverviewSection from '../components/home/SolutionsOverviewSection';
import PortfolioPreviewSection from '../components/home/PortfolioPreviewSection';
import IndustriesOverviewSection from '../components/home/IndustriesOverviewSection';
import CaseStudySection from '../components/home/CaseStudySection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

/**
 * Homepage – Complete structure per blueprint
 * 1. Hero
 * 2. AI First
 * 3. Services Overview
 * 4. Solutions Overview
 * 5. Portfolio Preview
 * 6. Industries We Serve
 * 7. Case Studies Preview
 * 8. Why Choose Us
 * 9. Process
 * 10. Final CTA
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      <AIFirstSection />
      <ServicesSection />
      <SolutionsOverviewSection />
      <PortfolioPreviewSection />
      <IndustriesOverviewSection />
      <CaseStudySection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
