import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconCart, IconHospital, IconDollarSign, IconGraduationCap, IconBriefcase, IconHome, IconArrowRight } from '../icons/FeatureIcons';
import { INDUSTRIES_DATA } from '../../data/industries.content';

const INDUSTRY_ICONS: Record<string, (props: { className?: string }) => JSX.Element> = {
  ecommerce: IconCart,
  healthcare: IconHospital,
  fintech: IconDollarSign,
  edtech: IconGraduationCap,
  saas: IconBriefcase,
  'real-estate': IconHome,
};

export default function IndustriesOverviewSection() {
  const industries = INDUSTRIES_DATA.slice(0, 6);

  return (
    <section className="py-section bg-surface section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Industries We Serve"
            subtitle="Deep expertise across key verticals"
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = INDUSTRY_ICONS[industry.id] || IconBriefcase;
            return (
              <ScrollReveal key={industry.id}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-white p-8 shadow-sm gradient-card-hover"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2">{industry.name}</h3>
                  <p className="text-sm text-body leading-relaxed line-clamp-3 min-h-[3.75rem]">{industry.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 gap-1 transition-all">
                    Explore
                    <IconArrowRight className="w-4 h-4 flex-shrink-0" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
