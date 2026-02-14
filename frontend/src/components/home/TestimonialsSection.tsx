import { useState, useEffect } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../data/content';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="py-section bg-section border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Leaders from startups and enterprises share their experience working with RagexAI."
          />
        </ScrollReveal>
        <ScrollReveal className="mt-14 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-page border border-divider p-8 lg:p-12 shadow-card">
            <blockquote className="text-lg text-slate leading-relaxed">"{t.quote}"</blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent font-semibold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate">{t.name}</p>
                <p className="text-sm text-slate-muted">{t.title}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? 'bg-accent' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
