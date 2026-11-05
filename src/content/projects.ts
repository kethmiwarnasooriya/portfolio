/**
 * Projects.
 *
 * Thumbnails  → put an image in /public/images/projects/ (16:10 works best, e.g. 1280×800 .webp)
 * Demo videos → either
 *     • a file: put an .mp4 in /public/videos/ and set   video: '/videos/my-project.mp4'
 *     • a link: paste a YouTube, Vimeo or Google Drive link, e.g. video: 'https://youtu.be/abc123'
 *   Each card has its own "Watch demo" button that plays the video in a pop-up player.
 *   Until a video is added the button shows "Demo coming soon".
 *
 * Only fill in the links you have — buttons appear automatically.
 */
export type Project = {
  id: string;
  title: string;
  /** One or two sentences: what it is and why it matters. */
  description: string;
  categories: string[];
  tech: string[];
  features: string[];
  image?: string;
  video?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  /** e.g. 'In progress' — shown as a small label */
  status?: string;
  /** Client work: shows a "Client project" label and explains why the code isn't public. */
  client?: boolean;
};

export const projects: Project[] = [
  {
    id: 'surgidx',
    title: 'SurgiDX Life Care — Company Website',
    description:
      'A fast, responsive website for a Sri Lankan medical-equipment supplier, presenting its product range, services and company profile, with a protected inquiry form that sends requests straight to the team.',
    categories: ['Web', 'Client'],
    tech: ['React', 'Vite', 'React Router', 'Cloudflare Pages', 'Serverless Functions'],
    features: [
      'Multi-page responsive site: Home, About, Solutions and Contact',
      'Product catalogue driven by a simple data file the client can update',
      'Inquiry form with spam protection, validation and email delivery via a serverless function',
      'Security headers, caching rules and a custom domain on a global CDN',
    ],
    image: '/images/projects/surgidx.webp',
    video: '/videos/SurgiDX-website-demo.mp4',
    live: 'https://surgidx.com',
    client: true,
  },
  {
    id: 'skillproof',
    title: 'SkillProof',
    description:
      'A web app that turns course certificates into verified proof of skills. AI reads a certificate and extracts the practical skills it covers, sets hands-on tasks for each one, then reviews the learner\'s GitHub project and scores it, building a vault of verified progress.',
    categories: ['Full-Stack', 'AI / ML'],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'OpenAI API'],
    features: [
      'Paste a certificate link and AI extracts the practical skills it covers',
      'AI Task Hub: hands-on tasks for every skill, at your level and one step above',
      'AI review of the submitted GitHub repository, with requirement and code-quality scores and written feedback',
      'Pass or fail decided by the server against fixed pass marks, with resubmission after feedback',
      'Skill Vault: score history over time and every task by status',
      'Transparency page showing exactly what is sent to the AI and what never is',
    ],
    image: '/images/projects/skillproof.webp',
    video: '/videos/SkillProof-demo.mp4',
    github: 'https://github.com/kethmiwarnasooriya/skillproof',
  },
  {
    id: 'findly',
    title: 'Findly',
    description:
      'A cloud-connected lost-and-found mobile app for campuses and shared spaces. It gives a community one place to report lost and found items, suggests likely matches with a clear explanation, and tracks each report until it is resolved.',
    categories: ['Mobile', 'Full-Stack'],
    tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Provider', 'Material 3'],
    features: [
      'Explainable matching engine: a 0–100 score from category, description, location and date, with the reasons for every suggestion',
      'Lost and found reports with photos, validated on the device and in the database',
      'Search with Lost/Found, Active/Resolved and category filters',
      'Secure accounts with email confirmation and password reset',
      'Owner-only editing enforced by row-level security, verified with a script that tests the API directly',
      'Private photos served through short-lived signed URLs; no contact details collected',
      'Light and dark themes, loading skeletons and clear empty and error states, covered by unit and widget tests',
    ],
    image: '/images/projects/findly.webp',
    video: '/videos/Findly-demo.mp4',
    github: 'https://github.com/kethmiwarnasooriya/Findly',
  },
];

/** How many placeholder cards to show while `projects` is empty. */
export const PLACEHOLDER_PROJECT_SLOTS = 3;
