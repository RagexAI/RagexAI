import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const SECTIONS = [
  {
    title: 'Custom Web Applications',
    body: 'From internal tools to customer-facing products, we build responsive, accessible web apps with modern frameworks and clear architecture. You get a codebase your team can maintain and extend.',
  },
  {
    title: 'SaaS Development',
    body: 'Multi-tenant architecture, subscription billing, role-based access, and usage-based features. We design for scale from day one and integrate with your existing identity and payment providers.',
  },
  {
    title: 'Enterprise Software',
    body: 'Integration-heavy systems that connect legacy ERP, CRM, and data sources. We focus on APIs, event-driven design, and security so enterprise IT can govern and audit effectively.',
  },
  {
    title: 'E-commerce Systems',
    body: 'Headless commerce, custom storefronts, and order-management logic. We build for high traffic, complex catalogs, and regional compliance (tax, shipping, returns).',
  },
  {
    title: 'Platform Modernization',
    body: 'Incremental migration from monoliths to modular systems. We extract services, introduce APIs, and improve deployment and observability without big-bang rewrites.',
  },
];

const COMPARISON = [
  { aspect: 'Architecture', traditional: 'Monolith-first, refactor later', ragexai: 'Modular from start, API-first' },
  { aspect: 'Delivery', traditional: 'Waterfall or long sprints', ragexai: 'Agile, 2-week increments, demos' },
  { aspect: 'Quality', traditional: 'Testing at the end', ragexai: 'Automated tests, CI/CD, code review' },
  { aspect: 'Security', traditional: 'Retrofitted', ragexai: 'Designed in, OWASP, compliance-ready' },
];

export default function WebSolutions() {
  return (
    <>
      <PageHero
        title="Scalable Web & SaaS Platforms."
        subtitle="We build and modernize web applications and SaaS products that scale with your business and your team."
        primaryCta={{ label: 'Start a project', href: '/contact' }}
        secondaryCta={{ label: 'Case studies', href: '/case-studies' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SECTIONS.map((sec) => (
            <ScrollReveal key={sec.title}>
              <div>
                <h2 className="text-2xl font-bold text-slate mb-4">{sec.title}</h2>
                <p className="text-slate-muted leading-relaxed">{sec.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Traditional Dev vs. RagexAI Approach"
              subtitle="How we deliver differently."
            />
          </ScrollReveal>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[600px] border border-divider rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-page">
                  <th className="text-left p-4 font-semibold text-slate">Aspect</th>
                  <th className="text-left p-4 font-semibold text-slate">Traditional</th>
                  <th className="text-left p-4 font-semibold text-accent">RagexAI</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.aspect} className="border-t border-divider">
                    <td className="p-4 font-medium text-slate">{row.aspect}</td>
                    <td className="p-4 text-slate-muted">{row.traditional}</td>
                    <td className="p-4 text-slate">{row.ragexai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a technical partner for your next build?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            Get in touch
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
