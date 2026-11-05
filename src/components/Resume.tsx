import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { skillCategories } from '../content/skills';
import { resume } from '../content/contact';
import { certifications } from '../content/certifications';
import { Icon } from './Icon';
import { Placeholder, SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

/** The preview is generated from the same content files, so it never goes out of date. */
export function Resume() {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const hasFile = !!resume.file;

  return (
    <section id="resume" className="section resume" aria-labelledby="resume-title">
      <div className="container resume__grid">
        <div>
          <Reveal>
            <SectionHeading index="06" label="Resume" title={<span id="resume-title">My profile, <span className="grad-text">at a glance.</span></span>}>
              Preview it here, or take a copy with you.
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <div className="hero__ctas">
              {hasFile ? (
                <>
                  <a className="btn btn--primary" href={resume.file} download>
                    <Icon name="download" size={16} /> Download CV (PDF)
                  </a>
                  <a className="btn btn--ghost" href={resume.file} target="_blank" rel="noreferrer">
                    <Icon name="eye" size={16} /> Open full view
                  </a>
                </>
              ) : (
                <>
                  <button className="btn btn--primary" type="button" disabled aria-describedby="cv-missing">
                    <Icon name="download" size={16} /> Download CV (PDF)
                  </button>
                  <Placeholder where="public/resume.pdf + contact.ts → resume.file">
                    <span id="cv-missing">CV file not added yet</span>
                  </Placeholder>
                </>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="resume__doc-wrap">
          <article className="resume-doc" aria-label="Resume preview">
            <header>
              <p className="resume-doc__name">{profile.name}</p>
              <p className="resume-doc__role">
                {profile.role} · {profile.location}
              </p>
            </header>

            <h3>Education</h3>
            {profile.education.map((e) => (
              <div key={e.title} className="resume-doc__row">
                <p>
                  <strong>{e.title}</strong>
                  <span>{e.period || '—'}</span>
                </p>
                <p className="muted">{e.place}</p>
              </div>
            ))}

            <h3>Projects</h3>
            {projects.length ? (
              projects.slice(0, 4).map((p) => (
                <div key={p.id} className="resume-doc__row">
                  <p>
                    <strong>{p.title}</strong>
                  </p>
                  <p className="muted">{p.tech.join(' · ')}</p>
                </div>
              ))
            ) : (
              <p className="resume-doc__empty">Added automatically from your projects.</p>
            )}

            {certifications.length > 0 && (
              <>
                <h3>Certifications</h3>
                {certifications.map((c) => (
                  <div key={c.id} className="resume-doc__row">
                    <p>
                      <strong>{c.title}</strong>
                      <span>{c.date}</span>
                    </p>
                    <p className="muted">
                      {c.issuer}
                      {c.platform && ` · ${c.platform}`}
                    </p>
                  </div>
                ))}
              </>
            )}

            <h3>Technical skills</h3>
            {allSkills.length ? <p className="muted">{allSkills.join(' · ')}</p> : <p className="resume-doc__empty">Added automatically from your skills.</p>}

            <h3>Experience</h3>
            {resume.experience.length ? (
              resume.experience.map((x) => (
                <div key={x.title + x.place} className="resume-doc__row">
                  <p>
                    <strong>{x.title}</strong>
                    <span>{x.period}</span>
                  </p>
                  <p className="muted">{x.place}</p>
                </div>
              ))
            ) : (
              <p className="resume-doc__empty">Optional: internships, volunteering, clubs.</p>
            )}
          </article>
        </Reveal>
      </div>
    </section>
  );
}
