import type { ReactNode } from 'react';

/**
 * Visibly marks content that hasn't been supplied yet.
 * `where` tells the site owner which file to edit.
 */
export function Placeholder({ children, where, block = false }: { children: ReactNode; where?: string; block?: boolean }) {
  const Tag = block ? 'div' : 'span';
  return (
    <Tag className={`placeholder ${block ? 'placeholder--block' : ''}`} title={where ? `Edit ${where}` : undefined}>
      {children}
      {where && block && <span className="placeholder__where mono">{where}</span>}
    </Tag>
  );
}

export function SectionHeading({ index, label, title, children }: { index: string; label: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="section-heading">
      <p className="eyebrow mono">
        <span>{index}</span> — {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </header>
  );
}
