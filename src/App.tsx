import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Icon } from './components/Icon';
import { profile } from './content/profile';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="backdrop" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>
            <strong>{profile.name}</strong>
            <span className="footer__tagline">{profile.tagline}</span>
          </p>
          <p className="mono">© {new Date().getFullYear()}</p>
          <a href="#home" className="btn btn--ghost btn--sm">
            Back to top <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
