import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { INDUSTRIES_LIST } from '../data/content';
import { CASE_STUDIES_LIST } from '../data/content';

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

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const industry = INDUSTRIES_LIST.find((i) => i.id === id);
  const content = id ? INDUSTRY_CONTENT[id] : null;

  if (!industry || !content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-muted">Industry not found.</p>
        <Link to="/industries" className="mt-4 inline-block text-accent font-semibold">View all industries</Link>
      </div>
    );
  }

  const caseStudy = content.caseStudy ? CASE_STUDIES_LIST.find((c) => c.id === content.caseStudy) : null;

  return (
    <>
      <PageHero
        title={industry.name}
        subtitle={industry.short}
        primaryCta={{ label: 'Talk to us', href: '/contact' }}
        secondaryCta={{ label: 'Case studies', href: '/case-studies' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold text-slate mb-4">Industry challenges</h2>
              <p className="text-slate-muted leading-relaxed">{content.challenges}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold text-slate mb-4">Solutions we provide</h2>
              <p className="text-slate-muted leading-relaxed">{content.solutions}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold text-slate mb-4">Sample system architecture</h2>
              <p className="text-slate-muted leading-relaxed">{content.architecture}</p>
            </div>
          </ScrollReveal>
          {caseStudy && (
            <ScrollReveal>
              <div className="p-6 rounded-xl bg-page border border-divider">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Case study highlight</p>
                <h3 className="text-lg font-semibold text-slate mb-2">{caseStudy.title}</h3>
                <p className="text-sm text-slate-muted mb-4">{caseStudy.excerpt}</p>
                <Link to={caseStudy.href} className="text-sm font-semibold text-accent hover:text-accent-hover">
                  Read case study →
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
      <section className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to build in {industry.name}?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            Schedule a call
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
