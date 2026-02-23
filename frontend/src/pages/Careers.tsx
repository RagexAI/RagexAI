import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VALUES = [
  {
    title: 'Ownership',
    description: 'We take full responsibility for what we build. Every engineer owns their work from architecture to deployment.',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'Transparency',
    description: 'Open communication, shared roadmaps, and honest feedback. No surprises, no gatekeeping.',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in growth. Access to courses, conferences, and time to explore new technologies.',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
];

const PERKS = [
  'Fully remote work environment',
  'Flexible working hours',
  'Learning & development budget',
  'Work on cutting-edge AI projects',
  'Direct impact on product decisions',
  'Collaborative, no-hierarchy culture',
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Careers
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            Careers at RagexAI
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            We're building our team. Join us to work on production-grade AI and modern web systems.
          </motion.p>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Our Values</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>What drives us every day</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card p-7">
                <div className="icon-box mb-5">{value.icon}</div>
                <h3 className="t-h3 mb-2">{value.title}</h3>
                <p className="t-small">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Perks & Benefits</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>What you get when you join</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card p-8" style={{ maxWidth: 600, margin: '0 auto' }}>
              <div className="grid sm:grid-cols-2 gap-4">
                {PERKS.map((perk, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg className="w-3 h-3" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="t-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Careers Coming Soon</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              We're in the building phase and will announce roles here shortly. In the meantime, send us your resume.
            </p>
            <Link to="/contact" className="btn-primary">
              Send Your Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
