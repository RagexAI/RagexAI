import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CORE_AI_SERVICES, AGENTIC_AI_SERVICES } from '../../data/ai.content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: 'easeOut' as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const AI_SOLUTIONS_ITEMS = [
  { id: 'ecommerce', label: 'AI for E-commerce', href: '/ai/solutions/ecommerce', desc: 'Personalisation & dynamic pricing' },
  { id: 'healthcare', label: 'AI for Healthcare', href: '/ai/solutions/healthcare', desc: 'HIPAA-compliant clinical AI' },
  { id: 'fintech', label: 'AI for FinTech', href: '/ai/solutions/fintech', desc: 'Fraud detection & credit scoring' },
  { id: 'saas', label: 'Enterprise AI Integration', href: '/ai/solutions/saas', desc: 'AI-powered SaaS copilots' },
];

export default function AI() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              AI First
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            All AI Capabilities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 600, color: 'var(--text-secondary)' }}>
            Production-grade AI infrastructure across Core AI, Agentic AI, and industry-specific solutions. SOC 2, GDPR, and HIPAA aligned.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Discuss Your AI Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core AI */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>Core AI</span>
            <h2 className="t-h2">Custom Models & Intelligence</h2>
            <p className="t-body mx-auto mt-3" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>
              Fine-tuned LLMs, NLP, computer vision, predictive analytics, and recommendation systems.
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_AI_SERVICES.map((svc, i) => (
              <motion.div key={svc.id} custom={i} variants={fadeUp}>
                <Link to={`/ai/core-ai/${svc.id}`} className="block glass-card p-6 group">
                  <div className="icon-box mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h3 className="t-h3 mb-2 group-hover:text-[var(--blue)] transition-colors">{svc.title}</h3>
                  <p className="t-small">{svc.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium mt-4" style={{ color: 'var(--blue)' }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mt-8">
            <Link to="/ai/core-ai" className="btn-outline">View all Core AI</Link>
          </motion.div>
        </div>
      </section>

      {/* Agentic AI */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>Agentic AI</span>
            <h2 className="t-h2">Autonomous Agents & Workflows</h2>
            <p className="t-body mx-auto mt-3" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>
              Self-directed reasoning, workflow automation, conversational AI, and multi-agent systems.
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENTIC_AI_SERVICES.map((svc, i) => (
              <motion.div key={svc.id} custom={i} variants={fadeUp}>
                <Link to={`/ai/agentic-ai/${svc.id}`} className="block glass-card p-6 group">
                  <div className="icon-box mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="t-h3 mb-2 group-hover:text-[var(--blue)] transition-colors">{svc.title}</h3>
                  <p className="t-small">{svc.shortDescription}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium mt-4" style={{ color: 'var(--blue)' }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mt-8">
            <Link to="/ai/agentic-ai" className="btn-outline">View all Agentic AI</Link>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions by Industry */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>AI Solutions</span>
            <h2 className="t-h2">Industry-Specific AI</h2>
            <p className="t-body mx-auto mt-3" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>
              AI built for E-commerce, Healthcare, FinTech, and Enterprise SaaS.
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_SOLUTIONS_ITEMS.map((item, i) => (
              <motion.div key={item.id} custom={i} variants={fadeUp}>
                <Link to={item.href} className="block glass-card p-6 group">
                  <div className="icon-box mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h3 className="t-h3 mb-2 group-hover:text-[var(--blue)] transition-colors">{item.label}</h3>
                  <p className="t-small">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium mt-4" style={{ color: 'var(--blue)' }}>
                    Explore
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mt-8">
            <Link to="/ai/solutions" className="btn-outline">View all AI Solutions</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Ready to Build With AI?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              From custom models to agentic workflows and industry solutions, we deliver production-grade AI.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
