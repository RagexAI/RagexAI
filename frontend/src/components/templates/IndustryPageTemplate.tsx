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

interface IndustryPageTemplateProps {
  industry: {
    name: string;
    title: string;
    description: string;
    icon: string;
    image?: string;
    challenges: string[];
    ourApproach: string[];
    solutions: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    technologies: string[];
    caseStudies: Array<{
      title: string;
      client: string;
      challenge: string;
      solution: string;
      results: string[];
    }>;
    benefits: string[];
    keyMetrics: Array<{
      metric: string;
      value: string;
    }>;
  };
}

const IndustryPageTemplate = ({ industry }: IndustryPageTemplateProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              {industry.name}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            {industry.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 600, color: 'var(--text-secondary)' }}>
            {industry.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {industry.image && (
        <section className="section-sm">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="glass-image">
                <img src={industry.image as string} alt={industry.name} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Metrics */}
      <section className="section-sm">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-stat px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {industry.keyMetrics.map((metric, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <div className="stat-number">{metric.value}</div>
                    <div className="stat-label">{metric.metric}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">{industry.name} Industry Challenges</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Common obstacles we help overcome</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industry.challenges.map((challenge, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card-sm p-6 text-center">
                <div className="mx-auto mb-4" style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(26,86,196,0.08)', border: '1px solid rgba(26,86,196,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="t-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{challenge}</p>
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
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>How we transform {industry.name.toLowerCase()} businesses</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.ourApproach.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold mb-5" style={{ background: 'rgba(26,86,196,0.10)', border: '1px solid rgba(26,86,196,0.15)', color: 'var(--blue)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < industry.ourApproach.length - 1 && i % 3 !== 2 && <div className="step-connector hidden lg:block" />}
                <p className="t-h3">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Our Solutions</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Tailored technology solutions for {industry.name.toLowerCase()}</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((sol, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-8">
                <h3 className="t-h3 mb-3">{sol.title}</h3>
                <p className="t-small mb-6" style={{ lineHeight: 1.7 }}>{sol.description}</p>
                <div className="pt-5" style={{ borderTop: '1px solid rgba(170,190,212,0.35)' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', marginBottom: 10, letterSpacing: '0.03em', textTransform: 'uppercase' }}>Key Features</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {sol.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span style={{ width: 16, height: 16, borderRadius: 5, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg className="w-2.5 h-2.5" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
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
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Proven technologies for {industry.name.toLowerCase()}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card-sm p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {industry.technologies.map((tech, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="tag">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      {industry.caseStudies.length > 0 && (
        <section className="section">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <h2 className="t-h2">Success Stories</h2>
              <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Real results from our {industry.name.toLowerCase()} clients</p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 gap-6">
              {industry.caseStudies.map((cs, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-8">
                  <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>{cs.client}</span>
                  <h3 className="t-h3 mb-3">{cs.title}</h3>
                  <div className="space-y-3 mb-5">
                    <p className="t-small"><strong style={{ color: 'var(--text-primary)' }}>Challenge:</strong> {cs.challenge}</p>
                    <p className="t-small"><strong style={{ color: 'var(--text-primary)' }}>Solution:</strong> {cs.solution}</p>
                  </div>
                  <div className="pt-5 space-y-2" style={{ borderTop: '1px solid rgba(170,190,212,0.35)' }}>
                    {cs.results.map((result, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <span style={{ width: 18, height: 18, borderRadius: 6, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg className="w-3 h-3" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{result}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Why Partner With Us</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Benefits of choosing us for {industry.name.toLowerCase()}</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((benefit, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="flex items-start gap-4">
                  <div className="icon-box">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h2 className="t-h2 mb-4">Ready to Transform Your {industry.name} Business?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us discuss how we can help you overcome challenges and achieve your goals.
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
};

export default IndustryPageTemplate;
