import { certifications } from '../content/certifications';
import { Icon } from './Icon';
import { SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

export function Certifications() {
  if (!certifications.length) return null;

  return (
    <section id="certifications" className="section certs" aria-labelledby="certs-title">
      <div className="container">
        <Reveal>
          <SectionHeading index="05" label="Certifications" title={<span id="certs-title">Learning, <span className="grad-text">verified.</span></span>}>
            Courses I've completed, each with a public link so you can check it.
          </SectionHeading>
        </Reveal>

        <div className="certs-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 80}>
              <article className="cert-card card">
                {c.image && (
                  <div className="cert-card__media">
                    <img src={c.image} alt={`${c.title} certificate`} loading="lazy" width={1200} height={921} />
                  </div>
                )}
                <div className="cert-card__body">
                  <p className="cert-card__issuer mono">
                    {c.issuer}
                    {c.platform && <span> · {c.platform}</span>}
                  </p>
                  <h3 className="cert-card__title">{c.title}</h3>
                  <ul className="chips chips--sm">
                    <li className="chip">{c.date}</li>
                    {c.grade && <li className="chip">Grade {c.grade}</li>}
                    {c.hours && <li className="chip">{c.hours}</li>}
                  </ul>
                  {(c.verifyUrl || c.pdf) && (
                    <div className="cert-card__actions">
                      {c.verifyUrl && (
                        <a className="btn btn--ghost btn--sm" href={c.verifyUrl} target="_blank" rel="noreferrer">
                          <Icon name="check" size={16} /> Verify on {c.platform ?? 'issuer site'} <Icon name="arrowUpRight" size={14} />
                        </a>
                      )}
                      {c.pdf && (
                        <a className="btn btn--ghost btn--sm" href={c.pdf} target="_blank" rel="noreferrer">
                          <Icon name="eye" size={16} /> View PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
