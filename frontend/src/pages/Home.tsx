import ScrollReveal from '../components/ui/ScrollReveal';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import ServicesSection from '../components/home/ServicesSection';
import TechStackSection from '../components/home/TechStackSection';
import ProcessSection from '../components/home/ProcessSection';
import CaseStudySection from '../components/home/CaseStudySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <TrustSection />
      </ScrollReveal>
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
