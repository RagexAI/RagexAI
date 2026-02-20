import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      return 'Please fill in all required fields.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        ...(formData.company.trim() ? { company: formData.company.trim() } : {}),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
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
                  <form onSubmit={handleSubmit} className="space-y-4" aria-busy={isSubmitting}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">Name</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">Email</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate mb-1">Company</label>
                      <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">What do you need help with?</label>
                      <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-divider text-slate focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Request a call'}
                    </button>
                    {errorMessage ? (
                      <p className="text-sm text-red-600" role="alert">{errorMessage}</p>
                    ) : null}
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
                  <p><strong className="text-slate">Email</strong><br /><a href="sanuj12201@gmail.com" className="text-accent hover:text-accent-hover">sanuj12201@gmail.com</a></p>
                  <p><strong className="text-slate">Phone</strong><br />+91 9119175338</p>
                  <p><strong className="text-slate">HQ</strong><br />Delhi</p>
                  <p><strong className="text-slate">Other</strong><br />Remote teams globally</p>
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
