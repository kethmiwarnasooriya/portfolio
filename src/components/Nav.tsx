import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from './Icon';

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
const IDS = SECTIONS.map((s) => s.id);

export function Nav() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu with Escape, lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav__brand" aria-label="Kethmi Warnasooriya — back to top">
        <span className="logo-mark">
          <span className="grad-text">KW</span>
        </span>
        <span className="nav__name">
          Kethmi <span>Warnasooriya</span>
        </span>
      </a>

      <nav aria-label="Main" className="nav__links">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} aria-current={active === s.id ? 'location' : undefined}>
            {s.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn btn--ghost btn--sm nav__cta">
        Let's talk <Icon name="arrowRight" size={16} />
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? 'close' : 'menu'} size={22} />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className={active === s.id ? 'is-active' : ''}>
              <span className="mono">0{i + 1}</span>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
