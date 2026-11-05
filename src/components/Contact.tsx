import { useState, type FormEvent } from 'react';
import { contact } from '../content/contact';
import { Icon } from './Icon';
import { Placeholder, SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: 'idle' | 'sending' | 'success' | 'error'; message?: string };

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  if (f.subject.trim().length < 3) e.subject = 'Please add a short subject.';
  if (f.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.';
  return e;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const update = (k: keyof Fields) => (e: { target: { value: string } }) => {
    const next = { ...fields, [k]: e.target.value };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    if (ENDPOINT) {
      setStatus({ kind: 'sending' });
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus({ kind: 'success', message: "Thank you! Your message has been sent. I'll get back to you soon." });
        setFields({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      } catch {
        setStatus({ kind: 'error', message: 'Something went wrong while sending. Please try again, or reach me through the links on this page.' });
      }
      return;
    }

    if (contact.email) {
      const body = `${fields.message}\n\n— ${fields.name} (${fields.email})`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: 'success', message: 'Your email app should open with the message ready to send.' });
      return;
    }

    setStatus({ kind: 'error', message: "The contact form isn't connected yet. Please use one of the links on this page for now." });
  }

  const field = (k: keyof Fields, label: string, type = 'text', extra: Record<string, unknown> = {}) => {
    const err = touched[k] ? errors[k] : undefined;
    const Tag = (type === 'textarea' ? 'textarea' : 'input') as 'input';
    return (
      <div className={`field ${err ? 'has-error' : ''} ${k === 'message' || k === 'subject' ? 'field--wide' : ''}`}>
        <label htmlFor={`cf-${k}`}>{label}</label>
        <Tag
          id={`cf-${k}`}
          name={k}
          type={type === 'textarea' ? undefined : type}
          value={fields[k]}
          onChange={update(k)}
          onBlur={blur(k)}
          aria-invalid={!!err}
          aria-describedby={err ? `cf-${k}-err` : undefined}
          required
          {...extra}
        />
        {err && (
          <p id={`cf-${k}-err`} className="field__error">
            <Icon name="alert" size={14} /> {err}
          </p>
        )}
      </div>
    );
  };

  const links = [
    { key: 'email', label: 'Email', icon: 'mail', value: contact.email, href: contact.email && `mailto:${contact.email}` },
    { key: 'phone', label: 'Phone', icon: 'phone', value: contact.phone, href: contact.phone && `tel:${contact.phone.replace(/\s/g, '')}` },
    { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: contact.linkedin && contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: contact.linkedin },
    { key: 'github', label: 'GitHub', icon: 'github', value: contact.github && contact.github.replace(/^https?:\/\/(www\.)?/, ''), href: contact.github },
    ...contact.other.map((o) => ({ key: o.url, label: o.label, icon: 'link', value: o.url.replace(/^https?:\/\/(www\.)?/, ''), href: o.url })),
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <Reveal>
            <SectionHeading index="07" label="Contact" title={<span id="contact-title">Let's build <span className="grad-text">something</span>.</span>}>
              Have an opportunity, a project idea or just want to say hello? My inbox is open.
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <ul className="contact-links">
              {links.map((l) => (
                <li key={l.key}>
                  <span className="contact-links__icon">
                    <Icon name={l.icon} size={18} />
                  </span>
                  <span className="contact-links__text">
                    <span className="mono">{l.label}</span>
                    {l.value && l.href ? (
                      <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {l.value}
                      </a>
                    ) : (
                      <Placeholder where="src/content/contact.ts">add your {l.label.toLowerCase()}</Placeholder>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form className="contact-form card" onSubmit={onSubmit} noValidate aria-describedby="cf-status">
            {field('name', 'Name', 'text', { autoComplete: 'name' })}
            {field('email', 'Email', 'email', { autoComplete: 'email' })}
            {field('subject', 'Subject')}
            {field('message', 'Message', 'textarea', { rows: 5 })}
            <div className="contact-form__foot">
              <p id="cf-status" className={`form-status form-status--${status.kind}`} role="status" aria-live="polite">
                {status.kind === 'success' && <Icon name="check" size={16} />}
                {status.kind === 'error' && <Icon name="alert" size={16} />}
                {status.message}
              </p>
              <button type="submit" className="btn btn--primary" disabled={status.kind === 'sending'}>
                {status.kind === 'sending' ? 'Sending…' : 'Send message'} <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
