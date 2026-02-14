import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { PROCESS_STEPS } from '../../data/content';

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-section bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="How We Work"
            subtitle="A proven process that reduces risk and delivers measurable outcomes."
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.title}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`rounded-xl p-6 border transition-all duration-300 ${
                  active === i
                    ? 'bg-section border-accent shadow-card'
                    : 'bg-section border-divider shadow-card hover:border-slate-200'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-accent-soft text-accent flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-light mb-2">Step {i + 1}</span>
                  <h3 className="font-semibold text-slate text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
