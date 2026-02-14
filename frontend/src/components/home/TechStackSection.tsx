import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';

const STACK: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'Vue', 'TypeScript'],
  Backend: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
  'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
  Cloud: ['AWS', 'Azure', 'GCP', 'Docker'],
};

export default function TechStackSection() {
  return (
    <section className="py-section bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="Tech Stack Showcase"
            subtitle="We leverage cutting-edge tools and frameworks to deliver exceptional results."
          />
        </ScrollReveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(STACK).map(([category, items]) => (
            <ScrollReveal key={category}>
              <div className="rounded-xl p-6 bg-page border border-divider shadow-card">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 text-sm font-medium text-slate bg-section border border-divider rounded-lg"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
