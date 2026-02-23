import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CASE_STUDIES_LIST } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const INDUSTRY_FILTER = ['All', ...new Set(CASE_STUDIES_LIST.map((c) => c.industry))];

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? CASE_STUDIES_LIST : CASE_STUDIES_LIST.filter((c) => c.industry === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Case Studies
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            Case Studies
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            Real projects, real results. See how we help clients ship AI and web systems that move the needle.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-wrap justify-center gap-2 mb-12">
            {INDUSTRY_FILTER.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setFilter(ind)}
                className="transition-all duration-200"
                style={{
                  padding: '8px 18px',
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  background: filter === ind ? 'var(--blue)' : 'rgba(255,255,255,0.55)',
                  color: filter === ind ? '#fff' : 'var(--text-secondary)',
                  border: filter === ind ? '1px solid var(--blue)' : '1px solid rgba(255,255,255,0.40)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                }}
              >
                {ind}
              </button>
            ))}
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <motion.div key={cs.id} custom={i} variants={fadeUp}>
                <Link to={cs.href} className="block glass-card p-7 group">
                  <span className="eyebrow mb-3" style={{ display: 'inline-flex' }}>{cs.industry}</span>
                  <h2 className="t-h3 mb-3 group-hover:text-[var(--blue)] transition-colors">{cs.title}</h2>
                  <p className="t-small mb-5">{cs.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="space-y-1.5 pt-4" style={{ borderTop: '1px solid rgba(170,190,212,0.35)' }}>
                    {cs.results.map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <span style={{ width: 16, height: 16, borderRadius: 5, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg className="w-2.5 h-2.5" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
