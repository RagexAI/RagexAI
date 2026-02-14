import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const SECTIONS = [
  {
    title: 'AI Strategy Consulting',
    problem: 'You need to know where AI can drive ROI without betting the farm on unproven use cases.',
    approach: 'We run discovery workshops, assess data readiness, and prioritize use cases by impact and feasibility.',
    deliverables: 'Strategy doc, prioritized roadmap, data assessment, and proof-of-concept scope.',
    useCase: 'A regional bank used our strategy to launch a document-understanding pilot that cut processing time by 40%.',
  },
  {
    title: 'Generative AI Development',
    problem: 'Off-the-shelf models don’t fit your data, brand, or compliance requirements.',
    approach: 'We fine-tune or build custom models, wrap them in secure APIs, and integrate with your products.',
    deliverables: 'Custom or fine-tuned models, APIs, guardrails, and monitoring.',
    useCase: 'A legal tech client deployed a custom contract-summary model with strict PII handling and audit trails.',
  },
  {
    title: 'AI Agents & Automation',
    problem: 'Repetitive workflows and handoffs between systems create bottlenecks and errors.',
    approach: 'We design agentic workflows that use LLMs and tools to execute multi-step tasks with human-in-the-loop where needed.',
    deliverables: 'Agent design, tooling, orchestration, and operational runbooks.',
    useCase: 'An insurance carrier automated claims triage and routing, reducing average handling time by 35%.',
  },
  {
    title: 'ML Pipelines',
    problem: 'Models in notebooks don’t scale; you need production-grade training and inference.',
    approach: 'We build repeatable pipelines for feature engineering, training, deployment, and monitoring.',
    deliverables: 'Pipeline code, feature store integration, model registry, and monitoring dashboards.',
    useCase: 'A retailer runs daily demand-forecast retrains and serves predictions to 2,000+ stores in real time.',
  },
  {
    title: 'Data Engineering for AI',
    problem: 'AI initiatives stall when data is siloed, messy, or inaccessible.',
    approach: 'We design data lakes, warehouses, and feature stores so ML teams have clean, governed data.',
    deliverables: 'Data architecture, pipelines, governance, and documentation.',
    useCase: 'A healthcare client unified EHR and claims data into a single feature store for multiple ML use cases.',
  },
];

const USE_CASES = [
  { industry: 'Finance', examples: 'Fraud detection, credit scoring, document extraction, chatbots.' },
  { industry: 'Retail', examples: 'Demand forecasting, personalization, pricing, inventory optimization.' },
  { industry: 'Healthcare', examples: 'Clinical decision support, prior auth, coding, patient engagement.' },
  { industry: 'SaaS', examples: 'Recommendations, search, support automation, content generation.' },
];

export default function AISolutions() {
  return (
    <>
      <PageHero
        title="Enterprise AI Systems Built for Scale."
        subtitle="From strategy to production: we build custom AI and ML systems that integrate with your data and workflows."
        primaryCta={{ label: 'Discuss your AI roadmap', href: '/contact' }}
        secondaryCta={{ label: 'View case studies', href: '/case-studies' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SECTIONS.map((sec) => (
            <ScrollReveal key={sec.title}>
              <div>
                <h2 className="text-2xl font-bold text-slate mb-4">{sec.title}</h2>
                <p className="text-slate-muted mb-4"><strong className="text-slate">The problem.</strong> {sec.problem}</p>
                <p className="text-slate-muted mb-4"><strong className="text-slate">Our approach.</strong> {sec.approach}</p>
                <p className="text-slate-muted mb-4"><strong className="text-slate">Deliverables.</strong> {sec.deliverables}</p>
                <p className="text-slate-muted italic">Example: {sec.useCase}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="AI Use Cases by Industry" subtitle="Where we apply AI and ML to drive measurable outcomes." />
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((uc) => (
              <ScrollReveal key={uc.industry}>
                <div className="p-6 rounded-xl bg-section border border-divider shadow-card">
                  <h3 className="font-semibold text-slate mb-2">{uc.industry}</h3>
                  <p className="text-sm text-slate-muted">{uc.examples}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to scale AI in your organization?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            Schedule a call
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
