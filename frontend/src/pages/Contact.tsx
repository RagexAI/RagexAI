import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Get in touch."
        subtitle="Book a strategy session or send us a message. We'll respond within one business day."
      />
      <section id="schedule" className="py-section bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-slate mb-6">Strategy session</h2>
                {submitted ? (
                  <p className="text-slate-muted">Thanks. We'll be in touch shortly to schedule a call.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">Name</label>
                      <input id="name" name="name" type="text" required className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">Email</label>
                      <input id="email" name="email" type="email" required className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate mb-1">Company</label>
                      <input id="company" name="company" type="text" className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">What do you need help with?</label>
                      <textarea id="message" name="message" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                      Request a call
                    </button>
                  </form>
                )}
                <p className="mt-6 text-sm text-slate-muted">
                  Or use the Calendly placeholder below to pick a time. We'll send a confirmation and prep questions.
                </p>
                <div className="mt-6 h-64 rounded-xl bg-page border border-divider flex items-center justify-center text-slate-light text-sm">
                  Calendly embed placeholder
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-slate mb-6">Office & contact</h2>
                <div className="space-y-6 text-slate-muted">
                  <p><strong className="text-slate">Email</strong><br /><a href="mailto:hello@ragexai.com" className="text-accent hover:text-accent-hover">hello@ragexai.com</a></p>
                  <p><strong className="text-slate">Phone</strong><br />+1 (555) 123-4567</p>
                  <p><strong className="text-slate">HQ</strong><br />San Francisco, CA</p>
                  <p><strong className="text-slate">Other</strong><br />London · Remote teams globally</p>
                </div>
                <div className="mt-10">
                  <h3 className="font-semibold text-slate mb-3">FAQ quick links</h3>
                  <a href="/#faq" className="block text-sm text-accent hover:text-accent-hover mb-2">What makes RagexAI different?</a>
                  <a href="/#faq" className="block text-sm text-accent hover:text-accent-hover mb-2">Do you work with startups or only enterprises?</a>
                  <a href="/#faq" className="block text-sm text-accent hover:text-accent-hover mb-2">What is a typical engagement timeline?</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
