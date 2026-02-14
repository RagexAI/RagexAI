import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import { CAREERS_OPENINGS } from '../data/content';

const BENEFITS = [
  'Remote-first with flexible hours',
  'Health, dental, vision insurance',
  'Learning budget and conference attendance',
  'Competitive salary and equity',
  'Modern tooling and cloud credits',
];

const CULTURE = [
  'We ship in small teams with clear ownership. No endless meetings.',
  'We value writing: specs, docs, and code that others can maintain.',
  'We invest in security and compliance so our clients can trust us with sensitive data.',
];

export default function Careers() {
  return (
    <>
      <PageHero
        title="Careers at RagexAI."
        subtitle="Join a team that builds AI and web systems for startups and enterprises. Remote-friendly, impact-driven."
        primaryCta={{ label: 'See open roles', href: '#roles' }}
      />
      <section className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Open roles" subtitle="Full-time positions. Remote unless noted." />
          </ScrollReveal>
          <div id="roles" className="mt-14 space-y-4">
            {CAREERS_OPENINGS.map((job) => (
              <ScrollReveal key={job.id}>
                <Link
                  to={'/careers/' + job.id}
                  className="block p-6 rounded-xl bg-page border border-divider shadow-card hover:shadow-lg hover:border-slate-200 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-slate">{job.title}</h2>
                      <p className="text-sm text-slate-muted mt-1">{job.department} · {job.location} · {job.type}</p>
                    </div>
                    <span className="text-accent font-medium text-sm">Apply →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Benefits" subtitle="What we offer." />
          </ScrollReveal>
          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <ScrollReveal key={b}>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-section border border-divider">
                  <span className="text-accent shrink-0">✓</span>
                  <span className="text-slate-muted">{b}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Culture" subtitle="How we work." />
          </ScrollReveal>
          <ul className="mt-14 space-y-4">
            {CULTURE.map((c) => (
              <ScrollReveal key={c.slice(0, 20)}>
                <li className="text-slate-muted leading-relaxed pl-6 border-l-2 border-accent-soft">{c}</li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't see a fit? Get in touch.</h2>
          <p className="text-slate-300 mb-6">We're always open to meeting talented people.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
