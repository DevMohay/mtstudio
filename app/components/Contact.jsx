import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project_type, setProjectType] = useState('Website / Landing');
  const [budget, setBudget] = useState('$1k – $3k');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Name, Email, and Message cannot be empty.');
      return;
    }

    setStatus('sending');
    setError('');

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, project_type, budget, message }),
    });

    if (res.ok) {
      setStatus('SUCCESS');
      setName('');
      setEmail('');
      setProjectType('Website / Landing');
      setBudget('$1k – $3k');
      setMessage('');
    } else {
      setStatus('ERROR');
    }
  };

  const GlowText = ({ children, className = "" }) => (
    <span
      className={`[text-shadow:_0_0_16px_rgba(57,255,20,0.75)] drop-shadow-[0_0_16px_rgba(57,255,20,0.5)] ${className}`}
    >
      {children}
    </span>
  );

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's build your <GlowText>vision</GlowText>
          </h2>
          <p className="mt-2 text-neutral-400">
            Tell us a little about your project. We'll get back within 1
            business day.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-300">
              Project Type
            </label>
            <select value={project_type} onChange={(e) => setProjectType(e.target.value)} className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60">
              <option>Website / Landing</option>
              <option>SaaS / Web App</option>
              <option>Mobile App</option>
              <option>Brand & Creative</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-300">
              Budget
            </label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60">
              <option>$999/Month</option>
              <option>$1999/Month</option>
              <option>$2999/Month</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-300">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
              placeholder="Tell us what you're building..."
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-4 text-sm text-neutral-400">
              <div className="flex flex-row justify-between w-full">
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-emerald-300" /> +880 1518969244
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-emerald-300" />{" "}
                  mtbdstudio@gmail.com
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="size-4 text-emerald-300" /> Holding No. 306,
                Shop No. 00, Teghori, Shibganj, Bogura
              </div>
            </div>
            <button
              className="rounded-2xl bg-emerald-400/90 px-6 py-3 font-semibold text-neutral-900 shadow-[0_0_32px_rgba(57,255,20,0.5)] hover:bg-emerald-400"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Request'}
            </button>
          </div>
          {status === 'SUCCESS' && <p className="text-emerald-400">Message sent successfully! <br /> We'll contact you within 1 business day.</p>}
          {status === 'ERROR' && <p className="text-red-500">Something went wrong. Please try again.</p>}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
