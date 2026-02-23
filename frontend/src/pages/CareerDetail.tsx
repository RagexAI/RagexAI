import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAREERS_OPENINGS } from '../data/content';

export default function CareerDetail() {
  const { id } = useParams<{ id: string }>();
  const job = CAREERS_OPENINGS.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="container" style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center' }}>
        <p className="t-body" style={{ color: 'var(--text-secondary)' }}>Role not found.</p>
        <Link to="/careers" className="btn-outline mt-4" style={{ display: 'inline-flex' }}>View all roles</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              {job.department}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            {job.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 400, color: 'var(--text-secondary)' }}>
            {job.location} -- {job.type}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-8 mb-8">
            <p className="t-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              We're looking for someone who can own delivery, work with clients and internal teams, and raise the bar on quality. You'll work on AI and web systems across industries. If that sounds like you, we'd love to hear from you.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center">
            <Link to={'/contact?apply=' + job.id} className="btn-primary">
              Apply for This Role
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
