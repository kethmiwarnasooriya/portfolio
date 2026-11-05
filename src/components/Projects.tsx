import { useEffect, useMemo, useRef, useState } from 'react';
import { projects, PLACEHOLDER_PROJECT_SLOTS, type Project } from '../content/projects';
import { Icon } from './Icon';
import { Placeholder, SectionHeading } from './Placeholder';
import { Reveal } from './Reveal';

export function Projects() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((p) => p.categories)))], []);
  const [filter, setFilter] = useState('All');
  const [video, setVideo] = useState<Project | null>(null);

  const shown = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));
  const sorted = [...shown].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" label="Projects" title={<span id="projects-title">Things I'm <span className="grad-text">building</span></span>}>
            A selection of what I've built: what it does, how it's made, and where to see it.
          </SectionHeading>
        </Reveal>

        {projects.length > 0 && categories.length > 2 && (
          <Reveal delay={60}>
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((c) => (
                <button key={c} type="button" className={`chip chip--button ${filter === c ? 'is-on' : ''}`} aria-pressed={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <div className="project-grid">
          {projects.length === 0
            ? Array.from({ length: PLACEHOLDER_PROJECT_SLOTS }, (_, i) => (
                <Reveal key={i} delay={i * 80}>
                  <PlaceholderCard index={i + 1} />
                </Reveal>
              ))
            : sorted.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <ProjectCard project={p} onPlay={() => setVideo(p)} />
                </Reveal>
              ))}
        </div>
        {projects.length > 0 && sorted.length === 0 && <p className="empty-note">No projects in this category yet.</p>}
      </div>

      <VideoDialog project={video} onClose={() => setVideo(null)} />
    </section>
  );
}

function ProjectCard({ project: p, onPlay }: { project: Project; onPlay: () => void }) {
  const [open, setOpen] = useState(false);
  const featuresId = `features-${p.id}`;
  const hasVideo = !!p.video;
  return (
    <article className="project-card card">
      <div className="project-card__media">
        {p.image ? (
          <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" decoding="async" />
        ) : (
          <div className="project-card__art" aria-hidden="true">
            <span className="grad-text">{p.title.slice(0, 1)}</span>
          </div>
        )}
        {hasVideo && (
          <button type="button" className="project-card__play" onClick={onPlay} aria-label={`Play demo video of ${p.title}`}>
            <Icon name="play" size={22} />
          </button>
        )}
        <div className="project-card__labels">
          {p.client && <span className="label">Client project</span>}
          {p.status && <span className="label label--status">{p.status}</span>}
        </div>
      </div>
      <div className="project-card__body">
        {p.featured && <p className="project-card__tag mono">Featured</p>}
        <h3 className="project-card__title">{p.title}</h3>
        <p className="project-card__desc">{p.description}</p>
        <ul className="chips chips--sm" aria-label="Technologies used">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        {p.features.length > 0 && (
          <>
            <button type="button" className="project-card__toggle mono" aria-expanded={open} aria-controls={featuresId} onClick={() => setOpen((o) => !o)}>
              Key features <Icon name="plus" size={14} className={open ? 'rot45' : ''} />
            </button>
            <ul id={featuresId} className="project-card__features" hidden={!open}>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </>
        )}
        {p.client && !p.github && <p className="project-card__note">Source code is private (client work).</p>}
        <div className="project-card__links">
          {hasVideo ? (
            <button type="button" className="btn btn--primary btn--sm" onClick={onPlay}>
              <Icon name="play" size={14} /> Watch demo
            </button>
          ) : (
            <button type="button" className="btn btn--ghost btn--sm" disabled title="A demo video will be added soon">
              <Icon name="play" size={14} /> Demo coming soon
            </button>
          )}
          {p.live && (
            <a className="btn btn--ghost btn--sm" href={p.live} target="_blank" rel="noreferrer">
              Visit site <Icon name="arrowUpRight" size={16} />
            </a>
          )}
          {p.github && (
            <a className="btn btn--ghost btn--sm" href={p.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  return (
    <article className="project-card card project-card--placeholder">
      <div className="project-card__media">
        <div className="project-card__art" aria-hidden="true">
          <span className="mono">0{index}</span>
        </div>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">
          <Placeholder>Project name</Placeholder>
        </h3>
        <Placeholder block where="src/content/projects.ts">
          Description, technologies, main features, screenshot, demo video, GitHub and live links.
        </Placeholder>
      </div>
    </article>
  );
}

/** Turns YouTube / Vimeo / Google Drive links into embeddable players; anything else is treated as a video file. */
function videoSource(url: string): { kind: 'embed' | 'file'; src: string } {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) return { kind: 'embed', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: 'embed', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) return { kind: 'embed', src: `https://drive.google.com/file/d/${drive[1]}/preview` };
  return { kind: 'file', src: url };
}

function VideoDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  const source = project?.video ? videoSource(project.video) : null;

  return (
    <dialog
      ref={ref}
      className="video-dialog"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={project ? `${project.title}: demo video` : undefined}
    >
      {project && source && (
        <div className="video-dialog__inner">
          <div className="video-dialog__head">
            <p>
              <span className="mono">Demo</span> {project.title}
            </p>
            <button type="button" className="icon-btn" onClick={onClose} aria-label="Close video">
              <Icon name="close" size={20} />
            </button>
          </div>
          <div className={`video-dialog__frame ${source.kind === 'file' ? 'video-dialog__frame--file' : ''}`}>
            {source.kind === 'embed' ? (
              <iframe src={source.src} title={`${project.title} demo video`} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen />
            ) : (
              <video src={source.src} poster={project.image} controls autoPlay playsInline preload="metadata">
                Your browser can't play this video.
              </video>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
