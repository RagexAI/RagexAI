import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/content';

const ARTICLE_BODIES: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  'ai-vs-traditional': {
    intro: 'CTOs and product leaders often ask: when should we build custom AI versus use an off-the-shelf API? The answer depends on data, control, and cost at scale.',
    sections: [
      { heading: 'When off-the-shelf works', body: 'Use APIs like OpenAI or Claude when you need general capability (summarization, Q&A, code assist) and can accept black-box behavior. Ideal for MVPs and features where accuracy is "good enough" and you don\'t need to fine-tune on proprietary data.' },
      { heading: 'When to go custom', body: 'Build or fine-tune when you have domain-specific data, strict compliance (e.g., no data leaves your perimeter), or need consistent behavior that APIs don\'t guarantee. Custom models also make sense when per-token cost at scale exceeds the cost of training and hosting your own.' },
      { heading: 'A practical framework', body: 'Start with an API for speed. Instrument usage and cost. When you hit limits -- accuracy, latency, or cost -- evaluate fine-tuning or custom training. Run a small proof-of-concept before committing to a full build.' },
    ],
  },
  'saas-pricing': {
    intro: 'Architecting SaaS for multiple pricing tiers requires clear mapping between plans, features, and billing. Here\'s how we do it.',
    sections: [
      { heading: 'Feature flags and entitlements', body: 'Store plan limits and feature flags in your database or config. Check entitlements at the API and UI layer so users only see and use what they\'re allowed. Use a single source of truth (e.g., Stripe subscription + metadata) to avoid drift.' },
      { heading: 'Billing alignment', body: 'Sync subscription state with your billing provider. Handle webhooks for upgrades, downgrades, and cancellations. Prorate when possible so changes mid-cycle are fair and predictable.' },
      { heading: 'Scaling the model', body: 'As you add tiers, keep the logic in one place. Consider a small entitlements service or a well-documented module so product and engineering can add new plans without rewriting core logic.' },
    ],
  },
  'data-mesh': {
    intro: 'Data mesh promises domain-owned data products without central bottlenecks. In practice, we\'ve learned a few things that make it work.',
    sections: [
      { heading: 'Start with ownership', body: 'Assign clear owners to domains (e.g., billing, product, growth). Owners define schemas, SLAs, and access. Without ownership, "mesh" becomes a free-for-all.' },
      { heading: 'Standards over centralization', body: 'Use a thin platform layer for discovery, lineage, and access control. Let domains choose tools and storage as long as they publish metadata and meet SLAs. Avoid forcing one data warehouse on everyone.' },
      { heading: 'Incremental adoption', body: 'Don\'t boil the ocean. Pilot with one or two domains. Prove value with a few high-impact data products. Then expand. Data mesh works when it grows organically, not as a big-bang reorg.' },
    ],
  },
};

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);
  const body = id ? ARTICLE_BODIES[id] : null;

  if (!post || !body) {
    return (
      <div className="container" style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center' }}>
        <p className="t-body" style={{ color: 'var(--text-secondary)' }}>Article not found.</p>
        <Link to="/blog" className="btn-outline mt-4" style={{ display: 'inline-flex' }}>Back to blog</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container relative" style={{ zIndex: 2, maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8" style={{ color: 'var(--blue)' }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Blog
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.06 }}>
            <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>{post.category}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="t-h1" style={{ maxWidth: 700 }}>
            {post.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="t-small mt-4">
            {post.date}
          </motion.p>
        </div>
      </section>

      {/* Article Body */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="t-body mb-10" style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: 17 }}>
            {body.intro}
          </motion.p>

          <div className="space-y-10">
            {body.sections.map((sec, i) => (
              <motion.div key={sec.heading} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <h2 className="t-h2 mb-4">{sec.heading}</h2>
                <p className="t-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{sec.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(170,190,212,0.35)' }}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="t-small" style={{ fontWeight: 500 }}>Share this article</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)' }}>Twitter</a>
                  <a href="#" style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)' }}>LinkedIn</a>
                </div>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--blue)' }}>
                View all articles
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
