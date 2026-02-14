import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { CASE_STUDIES_LIST } from '../data/content';

const INDUSTRY_FILTER = ['All', ...new Set(CASE_STUDIES_LIST.map((c) => c.industry))];

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? CASE_STUDIES_LIST : CASE_STUDIES_LIST.filter((c) => c.industry === filter);

  return (
    <>
      <PageHero
        title="Case Studies."
        subtitle="Real projects, real results. See how we help clients ship AI and web systems that move the needle."
        secondaryCta={{ label: 'Get in touch', href: '/contact' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {INDUSTRY_FILTER.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === ind ? 'bg-accent text-white' : 'bg-page text-slate-muted hover:bg-accent-soft'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs) => (
              <ScrollReveal key={cs.id}>
                <Link
                  to={cs.href}
                  className="block p-6 rounded-xl bg-page border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.industry}</span>
                  <h2 className="text-lg font-semibold text-slate mt-2 mb-3">{cs.title}</h2>
                  <p className="text-sm text-slate-muted mb-4">{cs.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-accent-soft text-accent text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="text-xs text-slate-muted space-y-1">
                    {cs.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
