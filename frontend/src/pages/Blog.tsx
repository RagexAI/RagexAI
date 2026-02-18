import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog."
        subtitle="Our blog is in the works. Fresh insights are coming soon."
      />
      <section className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-divider bg-page p-10 text-center shadow-card">
              <h2 className="text-2xl font-bold text-slate">Blog coming soon</h2>
              <p className="mt-4 text-slate-muted">
                We’re preparing practical articles on AI, engineering, and product delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
