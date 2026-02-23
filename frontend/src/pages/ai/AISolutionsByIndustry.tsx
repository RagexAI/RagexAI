import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industryDetails } from '../../data/industryDetails';
import { industryPageData } from '../../data/ai/industryPageData';

const SOLUTION_IMAGES: Record<string, string> = {
  ecommerce: '/RagexAI-website/images/ai/solutions/ecommerce.jpg',
  healthcare: '/RagexAI-website/images/ai/solutions/healthcare.jpg',
  fintech: '/RagexAI-website/images/ai/solutions/fintech.jpg',
  saas: '/RagexAI-website/images/ai/solutions/enterprise.jpg',
};

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

export default function AISolutionsByIndustry() {
  const { slug } = useParams();
  const industryKey = slug ?? 'ecommerce';
  const industry = industryDetails[industryKey as keyof typeof industryDetails] ?? industryDetails.ecommerce;
  const industryPage = industryPageData[industryKey as keyof typeof industryPageData] ?? industryPageData.ecommerce;
  const solutionImage = SOLUTION_IMAGES[industryKey] ?? SOLUTION_IMAGES.ecommerce;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              AI Solutions
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            {industry.heroTitlePrefix} {industry.heroTitleHighlight} {industry.heroTitleSuffix}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 600, color: 'var(--text-secondary)' }}>
            {industry.heroSubtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Get a Free AI Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/contact" className="btn-outline">Talk to Experts</Link>
          </motion.div>
        </div>
      </section>

      {/* Industry Detail */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="t-h2 mb-6">{industry.title}</h2>
              <div className="space-y-4">
                {industry.paragraphs.map((p) => (
                  <p key={p} className="t-body" style={{ color: 'var(--text-secondary)' }}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="glass-image">
                <img src={solutionImage} alt={industry.title} className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Capabilities */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">{industryPage.services.title}</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>{industryPage.services.subtitle}</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryPage.services.items.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="icon-box mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                      i % 4 === 0 ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" :
                      i % 4 === 1 ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" :
                      i % 4 === 2 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" :
                      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    } />
                  </svg>
                </div>
                <h3 className="t-h3 mb-2">{item.title}</h3>
                <p className="t-small">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">{industryPage.process.title}</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>{industryPage.process.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryPage.process.steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative text-center">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-5" style={{ background: 'rgba(26,86,196,0.10)', border: '1px solid rgba(26,86,196,0.15)', color: 'var(--blue)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="t-h3 mb-2">{step.title}</h3>
                <p className="t-small">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">{industryPage.benefits.title}</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>{industryPage.benefits.subtitle}</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPage.benefits.items.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} className="glass-card p-7">
                <div className="icon-box mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                      i % 3 === 0 ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" :
                      i % 3 === 1 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" :
                      "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    } />
                  </svg>
                </div>
                <h3 className="t-h3 mb-3">{item.title}</h3>
                <p className="t-small" style={{ lineHeight: 1.7 }}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="t-h2">{industryPage.techStack.title}</h2>
            <p className="t-body mx-auto mt-4" style={{ maxWidth: 520, color: 'var(--text-secondary)' }}>{industryPage.techStack.subtitle}</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPage.techStack.categories.map((cat, i) => (
              <motion.div key={cat.title} custom={i} variants={fadeUp} className="glass-card-sm p-6">
                <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, letterSpacing: '0.01em' }}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {industryPage.faq && (
        <section className="section">
          <div className="container" style={{ maxWidth: 760 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="t-h2">{industryPage.faq.title}</h2>
            </motion.div>
            <div className="space-y-4">
              {industryPage.faq.items.map((item, i) => (
                <motion.div key={item.question} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="glass-faq">
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
            <h2 className="t-h2 mb-4">Transform Your Industry with AI</h2>
            <p className="t-body mx-auto mb-8" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
              Let us discuss how industry-specific AI solutions can drive your business forward.
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
