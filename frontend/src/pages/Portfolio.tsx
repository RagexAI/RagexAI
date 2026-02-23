import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'E-commerce' | 'Enterprise' | 'EdTech';
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 'ecommerce-storefront',
    title: 'Full-Stack E-Commerce Platform',
    description: 'End-to-end fashion e-commerce storefront with product catalog, collections, cart management, and secure checkout. Built mobile-first with a clean editorial design focused on conversion and browsing experience.',
    category: 'E-commerce',
    image: '/RagexAI-website/images/portfolio/ecommerce-storefront.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    metrics: [
      { label: 'Mobile-first design', value: '100%' },
      { label: 'Page load speed', value: '<2s' },
    ],
    liveUrl: 'https://ecommerce-1-19xk.onrender.com/',
  },
  {
    id: 'shree-krishna-schools',
    title: 'Shree Krishna Public School',
    description: 'Official website for Shree Krishna Public School, Bikaner — a RBSE-affiliated senior secondary institution with 20+ years of legacy. Features online admissions, campus information, faculty, gallery, events, and a contact system.',
    category: 'Enterprise',
    image: '/RagexAI-website/images/portfolio/shree-krishna-school.png',
    technologies: ['React', 'Responsive Design', 'SEO Optimised', 'CMS'],
    metrics: [
      { label: 'Years of legacy', value: '20+' },
      { label: 'Success stories', value: '30k+' },
    ],
    liveUrl: 'https://www.shreekrishnaschools.com/',
  },
  {
    id: 'sms-school-management',
    title: 'AI-Powered School Management System',
    description: 'Comprehensive SaaS platform covering every school operation — admissions, fee collection, payroll, transport, exam scheduling, and result management. Integrated AI chatbot handles instant query resolution for staff and parents around the clock, reducing admin overhead significantly.',
    category: 'AI',
    image: '/RagexAI-website/images/portfolio/sms-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI Chatbot', 'REST API'],
    metrics: [
      { label: 'Modules shipped', value: '8+' },
      { label: 'AI chatbot', value: '24/7' },
    ],
    liveUrl: 'https://sms-frontend-x2jx.vercel.app',
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'AI':         { bg: 'rgba(26,86,196,0.08)',  text: '#1a56c4', border: 'rgba(26,86,196,0.18)'  },
  'E-commerce': { bg: 'rgba(13,148,136,0.08)', text: '#0d9488', border: 'rgba(13,148,136,0.18)' },
  'Enterprise': { bg: 'rgba(99,102,241,0.08)', text: '#6366f1', border: 'rgba(99,102,241,0.18)' },
  'EdTech':     { bg: 'rgba(245,158,11,0.08)', text: '#d97706', border: 'rgba(245,158,11,0.18)' },
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filtered = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Portfolio
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            Our Work
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            Real projects. Shipped and live. Built with precision for real clients.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Category filters ────────────────────────────────── */}
      <section style={{ padding: '40px 0 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: selectedCategory === cat
                    ? '1px solid rgba(26,86,196,0.30)'
                    : '1px solid rgba(170,190,212,0.35)',
                  background: selectedCategory === cat
                    ? 'rgba(26,86,196,0.09)'
                    : 'rgba(255,255,255,0.55)',
                  color: selectedCategory === cat ? '#1a56c4' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects grid ───────────────────────────────────── */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {filtered.map(project => {
              const colors = CATEGORY_COLORS[project.category] ?? CATEGORY_COLORS['AI'];
              return (
                <div
                  key={project.id}
                  className="glass-card"
                  style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  {/* Screenshot */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#e8f0f8' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      loading="lazy"
                    />
                    {/* Live badge */}
                    <span style={{
                      position: 'absolute', top: 12, left: 12,
                      fontSize: 9, fontWeight: 700, color: '#059669',
                      background: 'rgba(255,255,255,0.92)',
                      border: '1px solid rgba(5,150,105,0.25)',
                      padding: '3px 9px', borderRadius: 999,
                      backdropFilter: 'blur(8px)',
                    }}>● LIVE</span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>

                    {/* Category pill */}
                    <span style={{
                      display: 'inline-block', alignSelf: 'flex-start',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
                      padding: '3px 10px', borderRadius: 999, marginBottom: 10,
                      background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text,
                    }}>{project.category}</span>

                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#0f172a', lineHeight: 1.3, marginBottom: 10 }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 18, flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} style={{
                          fontSize: 10, fontWeight: 600,
                          padding: '2px 9px', borderRadius: 999,
                          background: 'rgba(170,190,212,0.15)',
                          border: '1px solid rgba(170,190,212,0.28)',
                          color: 'var(--text-muted)',
                        }}>{tech}</span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                      paddingTop: 16, marginBottom: 18,
                      borderTop: '1px solid rgba(170,190,212,0.22)',
                    }}>
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Live link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        fontSize: 13, fontWeight: 600, color: '#fff',
                        padding: '10px 20px', borderRadius: 9,
                        background: 'linear-gradient(135deg, #1D6DB5, #0E8FBF)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        width: 'fit-content',
                        boxShadow: '0 2px 10px rgba(29,109,181,0.25)',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(29,109,181,0.32)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(29,109,181,0.25)'; }}
                    >
                      View Live Project
                      <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-muted)' }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'transparent' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#0f172a', marginBottom: 12 }}>
            Ready to build your next project?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.6 }}>
            Let's talk about how we can engineer something great together.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
