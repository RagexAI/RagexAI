import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

const LEADERSHIP = [
  { name: 'Alex Rivera', role: 'CEO & Co-founder', bio: 'Former VP Engineering at a global SaaS company. 15+ years building product and data teams.' },
  { name: 'Jordan Kim', role: 'CTO & Co-founder', bio: 'Ex-ML lead at a Fortune 500. Focus on AI systems and scalable architecture.' },
  { name: 'Sam Foster', role: 'Head of Delivery', bio: 'PMP, agile coach. Ensures projects ship on time and teams stay aligned.' },
];

const WHY_US = [
  { title: 'Outcome-focused', body: 'We align every sprint to business metrics and ship in phases so you see value early.' },
  { title: 'Technical depth', body: 'Our engineers have shipped AI and web systems at scale. No handoffs to offshore juniors.' },
  { title: 'Transparent process', body: 'You get demos, roadmaps, and access to the team. No black-box delivery.' },
];

const TIMELINE = [
  { year: '2019', event: 'RagexAI founded. First enterprise AI engagement.' },
  { year: '2020', event: 'Launched web and data practice. 20+ projects delivered.' },
  { year: '2022', event: 'Opened second office. SOC 2 Type II certified.' },
  { year: '2024', event: '150+ projects. Named top AI consultancy by industry analysts.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="We build intelligent digital infrastructure."
        subtitle="RagexAI is an AI-first digital engineering firm. We help startups and enterprises ship AI-powered platforms, scalable web systems, and data solutions that last."
      />
      <section className="py-section bg-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate mb-6">Company story</h2>
            <p className="text-slate-muted leading-relaxed mb-4">
              RagexAI started with a simple belief: the best software comes from teams that own strategy, architecture, and delivery end to end. We combined AI/ML expertise with enterprise web and data engineering so clients don't have to juggle multiple vendors or compromise on quality.
            </p>
            <p className="text-slate-muted leading-relaxed">
              Today we work with funded startups and global brands across FinTech, Healthcare, Retail, and SaaS. We're known for clear communication, production-grade code, and a process that gets results without the usual enterprise drama.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <section id="approach" className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Vision & mission" subtitle="Where we're headed and why it matters." />
          </ScrollReveal>
          <div className="mt-14 max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-muted leading-relaxed">
              Our vision is to be the go-to partner for organizations that need to ship AI and modern web systems without the risk and cost of building everything in-house. Our mission is to deliver measurable outcomes through transparent process, strong engineering, and a culture of ownership.
            </p>
          </div>
        </div>
      </section>
      <section className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Leadership" subtitle="The people behind RagexAI." />
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP.map((person) => (
              <ScrollReveal key={person.name}>
                <div className="p-6 rounded-xl bg-page border border-divider shadow-card">
                  <div className="w-14 h-14 rounded-full bg-accent-soft flex items-center justify-center text-accent font-bold text-xl mb-4">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-slate">{person.name}</h3>
                  <p className="text-sm text-accent font-medium">{person.role}</p>
                  <p className="mt-2 text-sm text-slate-muted">{person.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle title="Why choose us" subtitle="What sets RagexAI apart." />
          </ScrollReveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <ScrollReveal key={item.title}>
                <div className="p-6 rounded-xl bg-section border border-divider shadow-card">
                  <h3 className="font-semibold text-slate mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-muted leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate mb-10">Company timeline</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <ScrollReveal key={item.year}>
                <div className="flex gap-6">
                  <span className="font-bold text-accent w-14 shrink-0">{item.year}</span>
                  <p className="text-slate-muted">{item.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-page border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate mb-4">Awards & recognition</h2>
            <p className="text-slate-muted max-w-2xl mx-auto">
              SOC 2 Type II certified. Named a top AI consulting firm by industry analysts. 98% client retention.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <section id="careers" className="py-section bg-slate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join us</h2>
          <p className="text-slate-300 mb-8">We're always looking for talented engineers and designers.</p>
          <Link to="/careers" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate bg-white hover:bg-slate-100 rounded-lg transition-colors">
            View open roles
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
