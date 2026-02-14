import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/content';

const ARTICLE_BODIES: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  'ai-vs-traditional': {
    intro: 'CTOs and product leaders often ask: when should we build custom AI versus use an off-the-shelf API? The answer depends on data, control, and cost at scale.',
    sections: [
      { heading: 'When off-the-shelf works', body: 'Use APIs like OpenAI or Claude when you need general capability (summarization, Q&A, code assist) and can accept black-box behavior. Ideal for MVPs and features where accuracy is "good enough" and you don\'t need to fine-tune on proprietary data.' },
      { heading: 'When to go custom', body: 'Build or fine-tune when you have domain-specific data, strict compliance (e.g., no data leaves your perimeter), or need consistent behavior that APIs don\'t guarantee. Custom models also make sense when per-token cost at scale exceeds the cost of training and hosting your own.' },
      { heading: 'A practical framework', body: 'Start with an API for speed. Instrument usage and cost. When you hit limits—accuracy, latency, or cost—evaluate fine-tuning or custom training. Run a small proof-of-concept before committing to a full build.' },
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
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-muted">Article not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-accent font-semibold">Back to blog</Link>
      </div>
    );
  }

  return (
    <>
      <article className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover mb-6 inline-block">
            ← Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
            <h1 className="text-4xl font-bold text-slate mt-2 mb-4">{post.title}</h1>
            <p className="text-slate-muted">{post.date}</p>
          </header>
          <p className="text-lg text-slate-muted leading-relaxed mb-10">{body.intro}</p>
          <div className="space-y-10">
            {body.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-xl font-bold text-slate mb-3">{sec.heading}</h2>
                <p className="text-slate-muted leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>
          <footer className="mt-14 pt-8 border-t border-divider">
            <p className="text-sm text-slate-muted">Share this article</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-accent hover:text-accent-hover text-sm font-medium">Twitter</a>
              <a href="#" className="text-accent hover:text-accent-hover text-sm font-medium">LinkedIn</a>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate mb-2">Related</p>
              <Link to="/blog" className="text-sm text-accent hover:text-accent-hover">View all articles →</Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
