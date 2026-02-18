import ScrollReveal from '../components/ui/ScrollReveal';
import HeroSection from '../components/home/HeroSection';

import AIFirstSection from '../components/home/AIFirstSection';
import ServicesSection from '../components/home/ServicesSection';
import SolutionsOverviewSection from '../components/home/SolutionsOverviewSection';
import PortfolioPreviewSection from '../components/home/PortfolioPreviewSection';
import IndustriesOverviewSection from '../components/home/IndustriesOverviewSection';
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
 * 7. Why Choose Us
 * 8. Process
 * 9. Final CTA
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      
      <AIFirstSection />
      <ServicesSection />
      <SolutionsOverviewSection />
      <PortfolioPreviewSection />
      <IndustriesOverviewSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
