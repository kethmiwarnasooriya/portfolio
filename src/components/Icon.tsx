const paths: Record<string, string> = {
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowUpRight: 'M7 17L17 7M8 7h9v9',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  phone: 'M6.6 3h3l1.5 4.5-2.2 1.4a12 12 0 0 0 6.2 6.2l1.4-2.2L21 14.4v3A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3z',
  linkedin: 'M4 9h3.5v11H4zM5.75 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.3v1.6c.5-.9 1.7-1.9 3.6-1.9 3.6 0 4.1 2.3 4.1 5.3V20h-3.5v-5.3c0-1.3 0-2.9-1.8-2.9s-2.2 1.4-2.2 2.8V20H10z',
  github: 'M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.2-1.2-3.2-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.4-1.1-4.4-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.7-2.3 4.5-4.4 4.7.3.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  play: 'M8 5.5v13l10.5-6.5z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  alert: 'M12 8v5M12 16.5v.5M10.3 3.9L2.6 17.3A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.7L13.7 3.9a2 2 0 0 0-3.4 0z',
  plus: 'M12 5v14M5 12h14',
  eye: 'M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12zM12 9.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15',
  layout: 'M3.5 4.5h17v15h-17zM3.5 9h17M9 9v10.5',
  server: 'M4 4.5h16v6H4zM4 13.5h16v6H4zM7.5 7.5h.01M7.5 16.5h.01',
  smartphone: 'M7 2.5h10a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V4A1.5 1.5 0 0 1 7 2.5zM11 18h2',
  brain: 'M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 7 17a3 3 0 0 0 5 1.8V5.7A3 3 0 0 0 9.5 4zM14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 17 17a3 3 0 0 1-5 1.8',
  database: 'M4.5 6c0-1.7 3.4-3 7.5-3s7.5 1.3 7.5 3-3.4 3-7.5 3-7.5-1.3-7.5-3zM4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3',
  wrench: 'M14.7 6.3a4 4 0 0 0 5 5L21 12.6l-1.6 1.6-1.3-1.3a4 4 0 0 1-5-5zM14.2 9.8L4.5 19.5',
  cap: 'M2.5 9L12 4.5 21.5 9 12 13.5zM6.5 11v4.5c0 1.2 2.5 3 5.5 3s5.5-1.8 5.5-3V11M21.5 9v5',
  sparkle: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
};

export type IconKey = keyof typeof paths;

export function Icon({ name, size = 18, className }: { name: IconKey | string; size?: number; className?: string }) {
  const filled = name === 'github' || name === 'linkedin' || name === 'play';
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths.sparkle} />
    </svg>
  );
}
