import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { CAPABILITIES } from '../../data/content';

export default function ServicesSection() {
  return (
    <section className="py-section bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Core Capabilities"
            subtitle="End-to-end capabilities from strategy to deployment and beyond."
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="h-full p-8 rounded-xl bg-section border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate mb-3">{item.title}</h3>
                <p className="text-sm text-slate-muted leading-relaxed mb-6">{item.description}</p>
                <Link
                  to={item.href}
                  className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
