import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { FEATURED_CASE_STUDY } from '../../data/content';

const CASE_METRICS = [
  { value: '40%', label: 'Cost reduction' },
  { value: '2x', label: 'Productivity' },
  { value: '30%', label: 'Faster deployment' },
];

export default function CaseStudySection() {
  const { title, results, tags, href } = FEATURED_CASE_STUDY;

  return (
    <section className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Case Studies Preview"
            subtitle="Measurable results from real projects"
          />
        </ScrollReveal>
        {/* Highlight metrics strip */}
        <ScrollReveal>
          <div className="mt-10 grid grid-cols-3 gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-sm">
            {CASE_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">{m.value}</p>
                <p className="text-sm font-semibold text-body mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-14 rounded-2xl overflow-hidden border border-border shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto lg:min-h-[340px] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-body">Results dashboard</p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Featured Case Study</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4 leading-tight">{title}</h2>
                <div className="flex flex-wrap gap-6 mb-6">
                  {results.map((r) => (
                    <div key={r.label}>
                      <p className="text-2xl font-bold text-accent">{r.value}</p>
                      <p className="text-xs text-body">{r.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={href}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/90 transition-colors w-fit"
                >
                  Read case study
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-8 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/90"
          >
            View all case studies
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
