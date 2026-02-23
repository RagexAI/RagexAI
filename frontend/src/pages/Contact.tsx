import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'sanuj12201@gmail.com',
    href: 'mailto:sanuj12201@gmail.com',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    label: 'Phone',
    value: '+91 9119175338',
    href: 'tel:+919119175338',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  },
  {
    label: 'HQ',
    value: 'Delhi, India',
    href: undefined,
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    label: 'Other',
    value: 'Remote teams globally',
    href: undefined,
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.40)',
    background: 'rgba(255,255,255,0.45)',
    backdropFilter: 'blur(12px)',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s ease, background 0.2s ease',
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-6">
            <span className="eyebrow">
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              Contact
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="t-h1 text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="t-body text-center mx-auto mt-5" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
            Book a strategy session or send us a message. We'll respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="glass-card p-8">
                <h2 className="t-h2 mb-6">Strategy Session</h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="icon-box mx-auto mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="t-body" style={{ color: 'var(--text-secondary)' }}>Thanks. We'll be in touch shortly to schedule a call.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" aria-busy={isSubmitting}>
                    <div>
                      <label htmlFor="name" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>Name *</label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} style={inputStyle} onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }} />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>Email *</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} style={inputStyle} onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }} />
                    </div>
                    <div>
                      <label htmlFor="company" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>Company</label>
                      <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} style={inputStyle} onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }} />
                    </div>
                    <div>
                      <label htmlFor="message" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>What do you need help with? *</label>
                      <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' as const }} onFocus={e => { e.currentTarget.style.borderColor = 'var(--blue)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }} />
                    </div>
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Request a Call'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    {errorMessage && (
                      <p style={{ fontSize: 13, color: '#ef4444', marginTop: 8 }} role="alert">{errorMessage}</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h2 className="t-h2 mb-8">Office & Contact</h2>
              <div className="space-y-5 mb-10">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="glass-card-sm p-5">
                    <div className="flex items-center gap-4">
                      <div className="icon-box">{info.icon}</div>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' as const, marginBottom: 2 }}>{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="t-h3" style={{ color: 'var(--text-primary)' }}>{info.value}</a>
                        ) : (
                          <p className="t-h3">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6">
                <h3 className="t-h3 mb-4">FAQ Quick Links</h3>
                <div className="space-y-3">
                  {['What makes RagexAI different?', 'Do you work with startups or only enterprises?', 'What is a typical engagement timeline?'].map((q) => (
                    <a key={q} href="/#faq" className="flex items-center gap-2.5 group" style={{ textDecoration: 'none' }}>
                      <span style={{ width: 16, height: 16, borderRadius: 5, background: 'rgba(26,86,196,0.08)', border: '1px solid rgba(26,86,196,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </span>
                      <span className="t-small group-hover:text-[var(--blue)] transition-colors" style={{ fontWeight: 500 }}>{q}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
