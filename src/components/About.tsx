import { profile } from '../content/profile';
import { resume } from '../content/contact';
import { Icon } from './Icon';
import { Placeholder, SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

export function About() {
  const { about, education } = profile;

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__portrait">
          <div className="portrait-frame">
            <img src={profile.image.src} alt="" loading="lazy" decoding="async" width={profile.image.width} height={profile.image.height} />
          </div>
          <p className="about__caption mono">
            <Icon name="cap" size={16} /> {profile.university}
          </p>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <SectionHeading
              index="02"
              label="About"
              title={
                <span id="about-title">
                  Hello, I'm {profile.firstName}.<br />
                  <span className="grad-text">I build to understand.</span>
                </span>
              }
            />
          </Reveal>

          <Reveal delay={80} className="about__text">
            {about.paragraphs.length ? (
              about.paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <Placeholder block where="src/content/profile.ts → about.paragraphs">
                Your introduction in your own words: who you are, what got you into Computer Science, and what you enjoy building.
              </Placeholder>
            )}
          </Reveal>

          <Reveal delay={140}>
            <h3 className="subhead mono">Education</h3>
            <ol className="timeline">
              {education.map((e) => (
                <li key={e.title} className={e.current ? 'is-current' : ''}>
                  <p className="timeline__meta mono">{e.current ? 'Now' : e.period || 'Earlier'}</p>
                  <p className="timeline__title">{e.title}</p>
                  <p className="timeline__place">
                    {e.place}
                    {e.current && (
                      <>
                        {' · '}
                        {e.period || <Placeholder where="profile.ts → education.period">study years</Placeholder>}
                      </>
                    )}
                  </p>
                  {e.details && <p className="timeline__details">{e.details}</p>}
                </li>
              ))}
            </ol>
          </Reveal>

          {resume.experience.length > 0 && (
            <Reveal delay={170}>
              <h3 className="subhead mono">Experience</h3>
              <ol className="timeline">
                {resume.experience.map((x) => (
                  <li key={x.title + x.place}>
                    <p className="timeline__meta mono">{x.period}</p>
                    <p className="timeline__title">{x.title}</p>
                    <p className="timeline__place">{x.place}</p>
                    {x.details && <p className="timeline__details">{x.details}</p>}
                  </li>
                ))}
              </ol>
            </Reveal>
          )}

          <Reveal delay={200} className="about__cards">
            <article className="card">
              <h3 className="card__label mono">My approach</h3>
              {about.approach ? <p>{about.approach}</p> : <Placeholder where="profile.ts → about.approach">How you approach problems and technology.</Placeholder>}
            </article>
            <article className="card">
              <h3 className="card__label mono">Where I'm headed</h3>
              {about.aspirations ? <p>{about.aspirations}</p> : <Placeholder where="profile.ts → about.aspirations">Your career aspirations.</Placeholder>}
            </article>
          </Reveal>

          <Reveal delay={240}>
            <h3 className="subhead mono">Interests</h3>
            <ul className="chips">
              {profile.interests.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
