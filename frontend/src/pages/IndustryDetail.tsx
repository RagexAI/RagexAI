import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INDUSTRIES_LIST, CASE_STUDIES_LIST } from '../data/content';

const INDUSTRY_CONTENT: Record<string, { challenges: string; solutions: string; architecture: string; caseStudy?: string }> = {
  fintech: {
    challenges: 'Regulatory compliance, legacy core systems, and the need for real-time risk and fraud detection. Scaling lending or payments without sacrificing security or auditability.',
    solutions: 'We build compliance-first platforms with audit trails, integrate with core banking and payment rails, and deploy ML for fraud and credit decisioning. SOC 2 and regulatory alignment built in.',
    architecture: 'Event-driven services, secure APIs, and data pipelines that support both real-time and batch reporting. Identity and access aligned with regulatory requirements.',
    caseStudy: 'fintech-compliance',
  },
  edtech: {
    challenges: 'Engagement at scale, personalized learning paths, content delivery across devices, and assessment integrity. Data privacy (COPPA, FERPA) and accessibility requirements.',
    solutions: 'Learning platforms with adaptive content, assessment engines, and analytics. We design for accessibility and data governance so schools and districts can adopt with confidence.',
    architecture: 'Content delivery networks, recommendation engines, and analytics pipelines. Role-based access and data residency options for K-12 and higher ed.',
    caseStudy: undefined,
  },
  healthcare: {
    challenges: 'Interoperability (FHIR, HL7), legacy EHR integration, patient engagement, and HIPAA compliance. Data silos across payers, providers, and pharmacies.',
    solutions: 'FHIR-based data layers, integration hubs, and patient-facing apps. We design for HIPAA from the start and support BAA and audit requirements.',
    architecture: 'API-first interoperability, event streaming for real-time sync, and identity management that fits healthcare workflows.',
    caseStudy: 'healthcare-interop',
  },
  retail: {
    challenges: 'Demand forecasting, inventory optimization, personalization, and omnichannel experience. Legacy POS and ERP integration.',
    solutions: 'ML-driven demand and pricing, unified commerce platforms, and data pipelines that connect stores, e-commerce, and suppliers. Real-time inventory and order management.',
    architecture: 'Event-driven inventory and order flows, ML pipelines for demand and personalization, and APIs that connect legacy and modern systems.',
    caseStudy: 'retail-revenue-ai',
  },
  logistics: {
    challenges: 'Route optimization, visibility across carriers, warehouse management, and last-mile delivery. Legacy TMS and WMS systems.',
    solutions: 'Optimization engines, tracking and visibility platforms, and integration layers that connect shippers, carriers, and warehouses. Real-time ETA and exception management.',
    architecture: 'Event streaming for shipment events, optimization services, and APIs for carrier and warehouse integration.',
    caseStudy: undefined,
  },
  saas: {
    challenges: 'Multi-tenant architecture, subscription billing, product-led growth, and scaling to enterprise with SSO, audit, and compliance.',
    solutions: 'SaaS product development from MVP to scale. Billing and entitlements, analytics, and enterprise features (SSO, audit logs, SOC 2) so you can sell upmarket.',
    architecture: 'Multi-tenant data and identity, feature flags and entitlements, and observability that scales with your customer base.',
    caseStudy: undefined,
  },
};

const SECTIONS = [
  { key: 'challenges', title: 'Industry Challenges' },
  { key: 'solutions', title: 'Solutions We Provide' },
  { key: 'architecture', title: 'Sample System Architecture' },
] as const;

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const industry = INDUSTRIES_LIST.find((i) => i.id === id);
  const content = id ? INDUSTRY_CONTENT[id] : null;

  if (!industry || !content) {
    return (
      <div className="container" style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center' }}>
        <p className="t-body" style={{ color: 'var(--text-secondary)' }}>Industry not found.</p>
        <Link to="/industries" className="btn-outline mt-4" style={{ display: 'inline-flex' }}>View all industries</Link>
      </div>
    );
  }

  const caseStudy = content.caseStudy ? CASE_STUDIES_LIST.find((c) => c.id === content.caseStudy) : null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Industry
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            {industry.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            {industry.short}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Talk to Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/case-studies" className="btn-outline">Case Studies</Link>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="space-y-10">
            {SECTIONS.map((sec, i) => (
              <motion.div key={sec.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="glass-card p-8">
                <h2 className="t-h2 mb-4">{sec.title}</h2>
                <p className="t-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {content[sec.key]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {caseStudy && (
        <section className="section-sm">
          <div className="container" style={{ maxWidth: 800 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-8">
              <span className="eyebrow mb-3" style={{ display: 'inline-flex' }}>Case Study Highlight</span>
              <h3 className="t-h3 mb-3">{caseStudy.title}</h3>
              <p className="t-small mb-5">{caseStudy.excerpt}</p>
              <Link to={caseStudy.href} className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--blue)' }}>
                Read case study
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Ready to Build in {industry.name}?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us discuss how we can help transform your business with modern technology.
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
