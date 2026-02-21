import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Full-Stack E-Commerce Platform',
    category: 'E-commerce · Storefront',
    desc: 'Fashion storefront with product catalog, cart, secure Stripe checkout, and order tracking — mobile-first and fast.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    metrics: ['Mobile-first', '<2s load'],
    image: `${import.meta.env.BASE_URL}/images/portfolio/ecommerce-storefront.png`,
    windowTitle: 'ecommerce — storefront',
    liveUrl: 'https://ecommerce-1-19xk.onrender.com/',
  },
  {
    title: 'Shree Krishna Public School',
    category: 'Education · Web Platform',
    desc: 'Official school website with online admissions, academics, events, gallery, and RBSE curriculum — 20+ year legacy institution.',
    tags: ['React', 'CMS', 'SEO', 'Responsive'],
    metrics: ['20+ yr legacy', '30k+ alumni'],
    image: `${import.meta.env.BASE_URL}/images/portfolio/shree-krishna-school.png`,
    windowTitle: 'shreekrishna — school website',
    liveUrl: 'https://www.shreekrishnaschools.com/',
  },
  {
    title: 'AI School Management System',
    category: 'EdTech SaaS · AI Chatbot',
    desc: 'Complete school ops platform — admissions, fees, payroll, transport, exams. Integrated AI chatbot for 24/7 instant query resolution.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AI Chatbot'],
    metrics: ['8+ modules', 'AI 24/7'],
    image: `${import.meta.env.BASE_URL}/images/portfolio/sms-dashboard.png`,
    windowTitle: 'sms — school management',
    liveUrl: 'https://sms-frontend-x2jx.vercel.app',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function PortfolioPreviewSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="eyebrow mb-5 inline-flex">Featured work</span>
            <h2 className="t-h2 mt-4">Projects that ship & scale</h2>
          </div>
          <Link to="/portfolio" className="btn-outline self-start md:self-auto whitespace-nowrap">
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="glass-card overflow-hidden"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Browser chrome + screenshot */}
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '8px 12px',
                  background: 'rgba(235,242,252,0.95)',
                  borderBottom: '1px solid rgba(200,215,235,0.7)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff5f57', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#febc2e', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ marginLeft: 8, fontSize: 9, fontWeight: 600, color: '#7a92b0', fontFamily: 'JetBrains Mono, monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.windowTitle}
                  </span>
                  <span style={{
                    fontSize: 8, fontWeight: 700, color: '#059669', flexShrink: 0,
                    background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.18)',
                    padding: '1px 6px', borderRadius: 999,
                  }}>● LIVE</span>
                </div>

                {/* Real screenshot */}
                <div style={{ height: 190, overflow: 'hidden', background: '#e8f0f8' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, letterSpacing: '0.04em' }}>
                  {p.category}
                </div>
                <h3 className="t-h3 mb-2">{p.title}</h3>
                <p className="t-small mb-4" style={{ color: 'var(--text-secondary)', flex: 1 }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={{
                      fontSize: 10, fontWeight: 600,
                      padding: '2px 8px', borderRadius: 999,
                      background: 'rgba(170,190,212,0.15)',
                      border: '1px solid rgba(170,190,212,0.28)',
                      color: 'var(--text-muted)',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Metrics + live link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.metrics.map((m, j) => (
                      <span key={j} style={{
                        fontSize: 11, fontWeight: 700,
                        padding: '3px 10px', borderRadius: 999,
                        background: 'rgba(26,86,196,0.07)',
                        border: '1px solid rgba(26,86,196,0.14)',
                        color: 'var(--blue)',
                      }}>{m}</span>
                    ))}
                  </div>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                      fontSize: 11, fontWeight: 600, color: 'var(--blue)',
                      textDecoration: 'none',
                    }}
                  >
                    View live
                    <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
