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
  // Keep the card short: chosen key skills, or the first few skills as a fallback.
  const keySkills = (resume.keySkills?.length ? resume.keySkills : [...new Set(allSkills)]).slice(0, 8);
  const degree = profile.education.find((e) => e.current) ?? profile.education[0];
  const latestJob = resume.experience[0];
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
          <article className="resume-doc" aria-label="Resume summary">
            <header>
              <p className="resume-doc__name">{profile.name}</p>
              <p className="resume-doc__role">
                {profile.role} · {profile.location}
              </p>
            </header>

            <h3>Education</h3>
            <div className="resume-doc__row">
              <p>
                <strong>{degree.title}</strong>
                {degree.period && <span>{degree.period}</span>}
              </p>
              <p className="muted">{degree.place}</p>
            </div>

            {latestJob && (
              <>
                <h3>Experience</h3>
                <div className="resume-doc__row">
                  <p>
                    <strong>{latestJob.title.split(',')[0]}</strong>
                    <span>{latestJob.period}</span>
                  </p>
                  <p className="muted">{latestJob.place.split(',')[0]}</p>
                </div>
              </>
            )}

            {projects.length > 0 && (
              <>
                <h3>Projects</h3>
                <p className="resume-doc__list">
                  {projects.slice(0, 3).map((p) => p.title.split(' — ')[0]).join(' · ')}
                  {projects.length > 3 && <span className="muted"> +{projects.length - 3} more</span>}
                </p>
              </>
            )}

            {certifications.length > 0 && (
              <>
                <h3>Certifications</h3>
                <p className="resume-doc__list">
                  {certifications[0].title}
                  {certifications.length > 1 && <span className="muted"> +{certifications.length - 1} more</span>}
                </p>
              </>
            )}

            {keySkills.length > 0 && (
              <>
                <h3>Key skills</h3>
                <ul className="resume-doc__skills">
                  {keySkills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            <p className="resume-doc__foot">Full details in the downloadable CV</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
