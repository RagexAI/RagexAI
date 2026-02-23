import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UPCOMING_TOPICS = [
  {
    title: 'Building Production-Grade RAG Pipelines',
    category: 'AI Engineering',
    description: 'A deep dive into retrieval-augmented generation systems that actually work in production.',
  },
  {
    title: 'Scaling SaaS from 0 to 10K Users',
    category: 'Product Engineering',
    description: 'Architecture decisions, database strategies, and infrastructure patterns for growth-stage SaaS.',
  },
  {
    title: 'The State of Agentic AI in 2026',
    category: 'AI Trends',
    description: 'How autonomous agents are transforming business workflows and what it means for engineering teams.',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Blog
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            Insights & Engineering Notes
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            Practical articles on AI, engineering, and product delivery from the RagexAI team.
          </motion.p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-10 text-center mb-14">
            <div className="icon-box mx-auto mb-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </div>
            <h2 className="t-h2 mb-3">Blog Coming Soon</h2>
            <p className="t-body mx-auto" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              We're preparing practical articles on AI systems, engineering best practices, and product delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Upcoming Topics</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>What we're working on</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING_TOPICS.map((topic, i) => (
              <motion.div key={topic.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card p-7">
                <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>{topic.category}</span>
                <h3 className="t-h3 mb-3">{topic.title}</h3>
                <p className="t-small">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Stay Updated</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Get notified when we publish new articles and insights.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
