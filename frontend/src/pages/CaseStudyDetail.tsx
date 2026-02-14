import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ui/ScrollReveal';
import { CASE_STUDIES_LIST } from '../data/content';
import { FEATURED_CASE_STUDY } from '../data/content';

const CASE_MAP: Record<string, typeof FEATURED_CASE_STUDY & { solution: string; tech: string[]; quote?: string; quoteAuthor?: string }> = {
  'retail-revenue-ai': {
    ...FEATURED_CASE_STUDY,
    solution: 'We built a custom ML pipeline that ingests POS, inventory, and external data to predict demand and recommend pricing. The system runs daily retrains and serves predictions via APIs to regional teams.',
    tech: ['Python', 'TensorFlow', 'BigQuery', 'React', 'GCP'],
    quote: 'RagexAI delivered in six months what our internal team estimated at two years. The ROI was visible in the first pilot quarter.',
    quoteAuthor: 'VP of Analytics, Fortune 500 Retailer',
  },
  'fintech-compliance': {
    title: 'Compliance-First Lending Platform',
    client: 'Series B FinTech',
    challenge: 'Manual underwriting and compliance checks slowed growth and increased regulatory risk.',
    solution: 'We built an end-to-end lending platform with automated decisioning, audit trails, and configurable compliance rules. Integrations with credit bureaus and e-sign completed the flow.',
    results: [
      { value: '60%', label: 'Faster loan onboarding' },
      { value: 'Zero', label: 'Findings in first audit' },
      { value: '4', label: 'Regions launched' },
    ],
    tags: ['Compliance', 'SaaS', 'Security'],
    href: '/case-studies/fintech-compliance',
    tech: ['Node.js', 'PostgreSQL', 'React', 'AWS', 'SOC 2'],
    quote: 'They understood compliance from day one. We went to production with confidence.',
    quoteAuthor: 'CTO, Lending Platform',
  },
  'healthcare-interop': {
    title: 'Healthcare Interoperability Hub',
    client: 'Health System',
    challenge: 'Twenty-plus systems held patient and claims data with no single source of truth or real-time sync.',
    solution: 'We designed a FHIR-based data layer and APIs that normalize and sync data across EHRs, billing, and external partners. Real-time event streaming keeps systems in sync.',
    results: [
      { value: '20+', label: 'Systems connected' },
      { value: 'Real-time', label: 'Data sync' },
      { value: 'HIPAA', label: 'Compliant' },
    ],
    tags: ['FHIR', 'Integration', 'Enterprise'],
    href: '/case-studies/healthcare-interop',
    tech: ['Java', 'Kafka', 'FHIR', 'GCP', 'Terraform'],
    quote: 'Finally, one place to see the full picture. RagexAI made interoperability practical.',
    quoteAuthor: 'CIO, Regional Health System',
  },
};

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = id ? CASE_MAP[id] : null;

  if (!study) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-muted">Case study not found.</p>
        <Link to="/case-studies" className="mt-4 inline-block text-accent font-semibold">Back to case studies</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-page border-b border-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/case-studies" className="text-sm font-medium text-accent hover:text-accent-hover mb-6 inline-block">
            ← Case studies
          </Link>
          <h1 className="text-4xl font-bold text-slate mb-4">{study.title}</h1>
          <p className="text-slate-muted">{study.client}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {study.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent-soft text-accent text-xs font-medium rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-bold text-slate mb-3">Challenge</h2>
              <p className="text-slate-muted leading-relaxed">{study.challenge}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-bold text-slate mb-3">Solution</h2>
              <p className="text-slate-muted leading-relaxed">{study.solution}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-bold text-slate mb-3">Results</h2>
              <div className="flex flex-wrap gap-8">
                {study.results.map((r) => (
                  <div key={r.label}>
                    <p className="text-2xl font-bold text-accent">{r.value}</p>
                    <p className="text-sm text-slate-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-bold text-slate mb-3">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-page border border-divider rounded-lg text-sm text-slate">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          {study.quote && (
            <ScrollReveal>
              <blockquote className="pl-6 border-l-4 border-accent text-slate italic">
                "{study.quote}"
                <footer className="mt-2 not-italic text-sm text-slate-muted">— {study.quoteAuthor}</footer>
              </blockquote>
            </ScrollReveal>
          )}
        </div>
      </section>
      <section className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a similar challenge?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            Schedule a call
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
