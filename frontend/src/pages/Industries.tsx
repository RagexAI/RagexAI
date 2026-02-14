import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { INDUSTRIES_LIST } from '../data/content';

export default function Industries() {
  return (
    <>
      <PageHero
        title="Industries We Serve."
        subtitle="We bring deep experience in regulated and high-stakes domains: FinTech, Healthcare, EdTech, Retail, Logistics, and SaaS."
        primaryCta={{ label: 'Talk to us', href: '/contact' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_LIST.map((ind) => (
              <ScrollReveal key={ind.id}>
                <Link
                  to={`/industries/${ind.id}`}
                  className="block p-8 rounded-xl bg-page border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h2 className="text-xl font-semibold text-slate mb-3">{ind.name}</h2>
                  <p className="text-slate-muted text-sm leading-relaxed">{ind.short}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
