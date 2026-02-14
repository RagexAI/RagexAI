import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconBrain, IconRobot, IconTarget, IconArrowRight } from '../icons/FeatureIcons';

const PILLARS = [
  {
    title: 'Core AI',
    description: 'Custom AI models, NLP, computer vision, predictive analytics, and recommendation systems.',
    href: '/ai/core-ai',
    Icon: IconBrain,
    gradient: 'from-violet-500/10 to-primary/10',
    iconColor: 'text-primary',
  },
  {
    title: 'Agentic AI',
    description: 'Autonomous agents, workflow automation, AI chat assistants, and multi-agent systems.',
    href: '/ai/agentic-ai',
    Icon: IconRobot,
    gradient: 'from-cyan-500/10 to-primary/10',
    iconColor: 'text-cyan-600',
  },
  {
    title: 'AI Solutions',
    description: 'Industry-specific AI for E-commerce, Healthcare, FinTech, and enterprise integration.',
    href: '/ai/solutions',
    Icon: IconTarget,
    gradient: 'from-accent/10 to-emerald-500/10',
    iconColor: 'text-accent',
  },
];

export default function AIFirstSection() {
  return (
    <section className="py-section bg-surface section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="AI First"
            subtitle="What AI-First means and why it matters for your business"
          />
        </ScrollReveal>
        <p className="mt-6 text-center text-body max-w-3xl mx-auto leading-relaxed text-base">
          We lead with artificial intelligence in every solution—so your products are smarter, faster, and ready for the future. AI-First means building intelligence into the core of your systems, not bolting it on later.
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <ScrollReveal key={pillar.title}>
              <Link
                to={pillar.href}
                className="group block h-full rounded-2xl border border-border bg-white p-8 shadow-sm gradient-card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6`}>
                  <pillar.Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">{pillar.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-6 min-h-[3.5rem]">{pillar.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 gap-1 transition-all">
                  Explore {pillar.title}
                  <IconArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
