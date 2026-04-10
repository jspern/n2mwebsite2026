import React, { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  how: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    how: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', phone: '', email: '', message: '', how: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Unable to send your message. Please call us at 248-247-2626.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <path d="m9 11 3 3L22 4"/>
          </svg>
        </div>
        <h3>Message received!</h3>
        <p>Thank you for reaching out. A member of our team will contact you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company" className="form-label">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="form-input"
            placeholder="Acme Corp"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="jane@acme.com"
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(248) 555-0100"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">How can we help? *</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="form-input form-textarea"
          placeholder="Tell us about your business and what you're looking for..."
          rows={5}
        />
      </div>

      <div className="form-group">
        <label htmlFor="how" className="form-label">How did you hear about us?</label>
        <select
          id="how"
          name="how"
          value={form.how}
          onChange={handleChange}
          className="form-input form-select"
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="referral">Referral from a colleague</option>
          <option value="linkedin">LinkedIn</option>
          <option value="existing-client">Existing N2M client</option>
          <option value="other">Other</option>
        </select>
      </div>

      {status === 'error' && (
        <div className="form-error" role="alert">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
