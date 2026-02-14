import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { IconCpu, IconZap, IconUsers, IconShield, IconRocket } from '../icons/FeatureIcons';

const WHY_CHOOSE_US = [
  { title: 'AI-First Approach', description: 'Intelligence built into every solution from day one.', Icon: IconCpu, color: 'text-primary' },
  { title: 'Agile Methodology', description: 'Sprint-based delivery with demos and feedback every two weeks.', Icon: IconZap, color: 'text-amber-600' },
  { title: 'Dedicated Teams', description: 'Experts who own strategy, architecture, and delivery end-to-end.', Icon: IconUsers, color: 'text-cyan-600' },
  { title: 'Security First', description: 'OWASP practices, compliance-ready (SOC 2, HIPAA, GDPR).', Icon: IconShield, color: 'text-accent' },
  { title: 'Post-Launch Support', description: 'We stay with you for scaling, incidents, and the next phase.', Icon: IconRocket, color: 'text-secondary' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-section bg-background gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Why Choose Us"
            subtitle="What sets us apart as your technology partner"
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-4">
                  <item.Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
