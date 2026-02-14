import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconSearch, IconLayers, IconPalette, IconZap, IconRocket, IconHeadphones } from '../icons/FeatureIcons';

const PROCESS_STEPS = [
  { title: 'Discovery', body: 'Align on goals, scope, success metrics, and technical constraints.', Icon: IconSearch },
  { title: 'Strategy', body: 'Define roadmap, architecture direction, and delivery approach.', Icon: IconLayers },
  { title: 'Design', body: 'UX/UI and system design. We choose stack and patterns that fit your scale.', Icon: IconPalette },
  { title: 'Development', body: 'Sprint-based delivery with demos and feedback every two weeks.', Icon: IconZap },
  { title: 'Deployment', body: 'Launch, CI/CD, and production hardening. We harden before go-live.', Icon: IconRocket },
  { title: 'Support', body: 'Monitor, iterate, and stay available for scaling and the next phase.', Icon: IconHeadphones },
];

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-section bg-surface section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Our Process"
            subtitle="Discovery → Strategy → Design → Development → Deployment → Support"
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.title}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="h-full"
              >
                <div
                  className={`h-full rounded-2xl border bg-white p-6 transition-all duration-300 ${
                    active === i ? 'border-primary shadow-lg shadow-primary/10' : 'border-border shadow-sm hover:border-primary/50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-colors ${active === i ? 'bg-primary/15 text-primary' : 'bg-surface text-body'}`}>
                      <step.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-body mb-2">Step {i + 1}</span>
                    <h3 className="font-bold text-heading text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-body leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
