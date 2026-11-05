import { useState } from 'react';
import { profile } from '../content/profile';
import { Icon } from './Icon';

export function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow mono hero__eyebrow">
          {profile.degree} · {profile.university}
        </p>
        <h1 id="hero-title" className="hero__title">
          <span>{first}</span>
          <span className="grad-text">{rest.join(' ')}</span>
        </h1>
        <p className="hero__tagline">
          Code with <em className="grad-text">curiosity</em>. Build with <em className="grad-text">purpose</em>.
        </p>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__ctas">
          <a href="#projects" className="btn btn--primary">
            Explore my work <Icon name="arrowRight" size={16} />
          </a>
          <a href="#resume" className="btn btn--ghost">
            View resume
          </a>
          <a href="#contact" className="btn btn--link">
            Get in touch <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
        <ul className="chips hero__chips" aria-label="Interests">
          {profile.interests.map((i) => (
            <li key={i} className="chip">
              {i}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__visual" aria-hidden={!imgOk}>
        <div className="hero__halo" />
        <div className="hero__ring" />
        {imgOk ? (
          <img
            className="hero__photo"
            src={profile.image.src}
            alt={profile.image.alt}
            width={profile.image.width}
            height={profile.image.height}
            fetchPriority="high"
            decoding="async"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="hero__fallback">
            <span className="grad-text">KW</span>
          </div>
        )}
        <div className="hero__badge">
          <Icon name="cap" size={18} />
          <span>
            {profile.role}
            <small>{profile.university}</small>
          </span>
        </div>
      </div>

      <a href="#about" className="hero__scroll mono" aria-label="Scroll to About">
        scroll <span />
      </a>
    </section>
  );
}
