import { useState } from 'react';
import { skillCategories } from '../content/skills';
import { Icon } from './Icon';
import { Placeholder, SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

export function Skills() {
  const [open, setOpen] = useState<string | null>(skillCategories[0]?.id ?? null);

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading index="04" label="Skills" title={<span id="skills-title">Many tools, <span className="grad-text">one curious mind</span></span>}>
            I like working across the stack, from the interface to the server, the database and the model behind it.
          </SectionHeading>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((c, i) => {
            const isOpen = open === c.id;
            const panelId = `skills-${c.id}`;
            return (
              <Reveal key={c.id} delay={(i % 4) * 60}>
                <div className={`skill-card card ${isOpen ? 'is-open' : ''}`}>
                  <h3>
                    <button type="button" className="skill-card__head" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : c.id)}>
                      <span className="skill-card__icon">
                        <Icon name={c.icon} size={20} />
                      </span>
                      <span className="skill-card__title">
                        {c.title}
                        <small>{c.blurb}</small>
                      </span>
                      <Icon name="plus" size={16} className={`skill-card__plus ${isOpen ? 'rot45' : ''}`} />
                    </button>
                  </h3>
                  <div id={panelId} className="skill-card__panel" hidden={!isOpen}>
                    {c.skills.length ? (
                      <ul className="chips chips--sm">
                        {c.skills.map((s) => (
                          <li key={s} className="chip">
                            {s}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Placeholder block where="src/content/skills.ts">
                        Add the technologies you use in this area.
                      </Placeholder>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
