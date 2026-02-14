import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconCart, IconCloud, IconRocket, IconWrench, IconCpu, IconSmartphone, IconBriefcase, IconArrowRight } from '../icons/FeatureIcons';
import { SERVICES_DATA } from '../../data/services.content';

const SERVICE_ICONS: Record<string, (props: { className?: string }) => JSX.Element> = {
  'ecommerce-development': IconCart,
  'devops-cloud-security': IconCloud,
  'digital-transformation': IconRocket,
  'managed-it-services': IconWrench,
  'ai-ml-automation': IconCpu,
  'web-mobile-development': IconSmartphone,
  'saas-product-development': IconBriefcase,
};

export default function ServicesSection() {
  const services = SERVICES_DATA.slice(0, 6);

  return (
    <section className="py-section bg-background gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Services Overview"
            subtitle="End-to-end services from strategy to deployment and beyond"
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || IconCpu;
            return (
              <ScrollReveal key={service.id}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-white p-8 shadow-sm gradient-card-hover"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-3">{service.title}</h3>
                  <p className="text-sm text-body leading-relaxed mb-6 line-clamp-3">{service.shortDescription}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 gap-1 transition-all">
                    Learn more
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
