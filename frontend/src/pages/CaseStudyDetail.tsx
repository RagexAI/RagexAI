import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CASE_STUDIES_LIST, FEATURED_CASE_STUDY } from '../data/content';

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
      <div className="container" style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center' }}>
        <p className="t-body" style={{ color: 'var(--text-secondary)' }}>Case study not found.</p>
        <Link to="/case-studies" className="btn-outline mt-4" style={{ display: 'inline-flex' }}>Back to case studies</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: 'var(--blue)' }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Case Studies
            </Link>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1" style={{ maxWidth: 700 }}>
            {study.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body mt-3" style={{ color: 'var(--text-secondary)' }}>
            {study.client}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap gap-2 mt-6">
            {study.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-8">
              <h2 className="t-h2 mb-4">Challenge</h2>
              <p className="t-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="glass-card p-8">
              <h2 className="t-h2 mb-4">Solution</h2>
              <p className="t-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.solution}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }}>
              <div className="glass-stat px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {study.results.map((r, i) => (
                    <div key={i}>
                      <div className="stat-number">{r.value}</div>
                      <div className="stat-label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.24 }} className="glass-card-sm p-8">
              <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, letterSpacing: '0.01em' }}>Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>

            {study.quote && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.32 }} className="glass-card p-8">
                <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 20 }}>
                  <p className="t-body" style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                    "{study.quote}"
                  </p>
                  <p className="t-small mt-3" style={{ fontWeight: 500 }}>-- {study.quoteAuthor}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Have a Similar Challenge?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us discuss how we can build a solution tailored to your needs.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
