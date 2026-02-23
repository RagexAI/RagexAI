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

interface SolutionPageTemplateProps {
  solution: {
    title: string;
    description: string;
    icon: string;
    image?: string;
    challenges: string[];
    ourApproach: string[];
    whatWeDeliver: string[];
    useCases: Array<{
      title: string;
      description: string;
      results: string[];
    }>;
    technologies: string[];
    benefits: string[];
    hideCaseStudies?: boolean;
    hideFaq?: boolean;
    hideSecondaryCta?: boolean;
  };
  caseStudies?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

const SolutionPageTemplate = ({ solution }: SolutionPageTemplateProps) => {
  const faqs = [
    {
      question: `Is ${solution.title} right for my business?`,
      answer: 'We start with a discovery call to understand your needs and determine if this solution is the best fit. We provide honest recommendations even if it means suggesting alternatives.',
    },
    {
      question: 'How do you ensure the solution meets our requirements?',
      answer: 'We follow an agile development process with regular demos and feedback sessions. You are involved in every stage from planning to deployment.',
    },
    {
      question: 'What happens after the solution is deployed?',
      answer: 'We provide training, documentation, and ongoing support. We also offer maintenance packages to ensure your solution continues to perform optimally.',
    },
    {
      question: 'Can the solution scale as we grow?',
      answer: 'Absolutely. We build solutions with scalability in mind, using modern architecture patterns that can handle growth in users, data, and features.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Solutions
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            {solution.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 600, color: 'var(--text-secondary)' }}>
            {solution.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Let's Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            {!solution.hideSecondaryCta && <Link to="/portfolio" className="btn-outline">View Portfolio</Link>}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {solution.image && (
        <section className="section-sm">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="glass-image">
                <img src={solution.image as string} alt={solution.title} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Business Challenges</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Problems this solution helps you overcome</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 gap-6">
            {solution.challenges.map((challenge, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="flex items-start gap-4">
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </span>
                  <p className="t-body" style={{ fontSize: 15 }}>{challenge}</p>
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
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>How we deliver results</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.ourApproach.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold mb-5" style={{ background: 'rgba(26,86,196,0.10)', border: '1px solid rgba(26,86,196,0.15)', color: 'var(--blue)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < solution.ourApproach.length - 1 && i % 3 !== 2 && <div className="step-connector hidden lg:block" />}
                <p className="t-h3">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">What We Deliver</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Comprehensive solutions tailored to your needs</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solution.whatWeDeliver.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card-sm p-5">
                <div className="flex items-center gap-3">
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg className="w-3 h-3" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="t-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Use Cases & Results</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Real-world applications and measurable outcomes</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid lg:grid-cols-3 gap-6">
            {solution.useCases.map((uc, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-8">
                <h3 className="t-h3 mb-3">{uc.title}</h3>
                <p className="t-small mb-6" style={{ lineHeight: 1.7 }}>{uc.description}</p>
                <div className="space-y-2.5 pt-5" style={{ borderTop: '1px solid rgba(170,190,212,0.35)' }}>
                  {uc.results.map((result, j) => (
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

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">Technology Stack</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Proven technologies we leverage</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card-sm p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {solution.technologies.map((tech, i) => (
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
            <h2 className="t-h2">Key Benefits</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>Why choose this solution</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="flex items-start gap-4">
                  <div className="icon-box">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {i % 3 === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {i % 3 === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                      {i % 3 === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    </svg>
                  </div>
                  <p className="t-h3">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {!solution.hideFaq && (
        <section className="section">
          <div className="container" style={{ maxWidth: 760 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="t-h2">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="glass-faq">
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{item.question}</h3>
                  <p className="t-small">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-12 text-center">
            <h2 className="t-h2 mb-4">Ready to Transform Your Business?</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us explore how {solution.title.toLowerCase()} can drive your success.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SolutionPageTemplate;
