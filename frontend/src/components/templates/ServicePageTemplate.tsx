import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

interface ServicePageTemplateProps {
  service: {
    title: string;
    description: string;
    icon: string;
    image?: string;
    problems: string[];
    approach: string[];
    features: string[];
    technologies: string[];
    benefits: string[];
    pricing?: {
      starter: string;
      enterprise: string;
    };
    [key: string]: unknown;
  };
  caseStudies?: unknown[];
}

const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Services
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 600, color: 'var(--text-secondary)' }}>
            {service.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Let's Build Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {service.image && (
        <section className="section-sm">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="glass-image">
                <img src={service.image as string} alt={service.title} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges We Solve */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Challenges We Solve</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Common problems businesses face that we help overcome</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.problems.map((problem, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="flex items-start gap-4">
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg className="w-3.5 h-3.5" style={{ color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  <p className="t-body" style={{ fontSize: 15 }}>{problem}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Our Approach</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>How we deliver exceptional results</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.approach.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold mb-5" style={{ background: 'rgba(26,86,196,0.10)', border: '1px solid rgba(26,86,196,0.15)', color: 'var(--blue)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < service.approach.length - 1 && i % 3 !== 2 && <div className="step-connector hidden lg:block" />}
                <p className="t-h3">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Features We Build</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Comprehensive features tailored to your needs</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.features.map((feature, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card-sm p-5">
                <div className="flex items-center gap-3">
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg className="w-3 h-3" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="t-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Technology Stack</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Modern, proven technologies we use</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card-sm p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {service.technologies.map((tech, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="tag">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Benefits & Results</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Measurable impact on your business</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="flex items-start gap-4">
                  <div className="icon-box">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="t-h3">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Ready to Get Started?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us discuss how {service.title.toLowerCase()} can transform your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/portfolio" className="btn-outline">View Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicePageTemplate;
