import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { BLOG_POSTS } from '../data/content';

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map((p) => p.category))];

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = BLOG_POSTS.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOG_POSTS[0];

  return (
    <>
      <PageHero
        title="Blog."
        subtitle="Technical insights on AI, engineering, and building at scale."
      />
      <section className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 max-w-md px-4 py-2.5 rounded-lg border border-divider text-slate placeholder-slate-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === cat ? 'bg-accent text-white' : 'bg-page text-slate-muted hover:bg-accent-soft'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {featured && category === 'All' && !search && (
            <ScrollReveal>
              <Link
                to={featured.href}
                className="block mb-10 p-8 rounded-2xl bg-page border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured</span>
                <h2 className="text-2xl font-bold text-slate mt-2 mb-2">{featured.title}</h2>
                <p className="text-slate-muted mb-4">{featured.excerpt}</p>
                <span className="text-sm text-accent font-medium">{featured.date} · Read more →</span>
              </Link>
            </ScrollReveal>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <ScrollReveal key={post.id}>
                <Link
                  to={post.href}
                  className="block p-6 rounded-xl bg-page border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h2 className="text-lg font-semibold text-slate mt-2 mb-2">{post.title}</h2>
                  <p className="text-sm text-slate-muted mb-4">{post.excerpt}</p>
                  <span className="text-sm text-slate-light">{post.date}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
