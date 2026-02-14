import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconGlobe, IconBuilding, IconBriefcase, IconArrowRight } from '../icons/FeatureIcons';

const SOLUTIONS_OVERVIEW = [
  {
    title: 'Web-Based Applications',
    description: 'Modern web apps that streamline operations and enhance productivity across devices.',
    href: '/solutions/web-applications',
    Icon: IconGlobe,
    gradient: 'from-primary/10 to-cyan-500/10',
  },
  {
    title: 'Enterprise Applications',
    description: 'Mission-critical systems built for scale, security, and complex workflows.',
    href: '/solutions/enterprise-applications',
    Icon: IconBuilding,
    gradient: 'from-secondary/10 to-primary/10',
  },
  {
    title: 'SaaS Platforms',
    description: 'Scalable cloud products with subscription billing, multi-tenancy, and growth features.',
    href: '/services/saas-product-development',
    Icon: IconBriefcase,
    gradient: 'from-accent/10 to-emerald-500/10',
  },
];

export default function SolutionsOverviewSection() {
  return (
    <section className="py-section bg-surface section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Solutions Overview"
            subtitle="Business-focused solutions: Enterprise Apps, Web Apps, and SaaS Platforms"
          />
        </ScrollReveal>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {SOLUTIONS_OVERVIEW.map((item) => (
            <ScrollReveal key={item.title}>
              <Link
                to={item.href}
                className="group block h-full rounded-2xl border border-border bg-white p-8 shadow-sm gradient-card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-primary`}>
                  <item.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-6">{item.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 gap-1 transition-all">
                  Learn more
                  <IconArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
