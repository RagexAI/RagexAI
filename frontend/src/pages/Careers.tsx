import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Careers() {
  return (
    <>
      <PageHero
        title="Careers at RagexAI."
        subtitle="We’re building our team. New opportunities will be posted soon."
      />
      <section className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-divider bg-page p-10 text-center shadow-card">
              <h2 className="text-2xl font-bold text-slate">Careers coming soon</h2>
              <p className="mt-4 text-slate-muted">
                We’re in the building phase and will announce roles here shortly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
