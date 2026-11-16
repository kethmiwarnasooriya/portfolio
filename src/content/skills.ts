/**
 * Skills, grouped by category.
 * Add the technologies you actually use to each `skills` list, e.g. skills: ['Java', 'Python'].
 * No percentages or ratings are shown by design.
 */
export type IconName = 'code' | 'layout' | 'server' | 'smartphone' | 'brain' | 'database' | 'wrench';

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: IconName;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Programming Languages', blurb: 'The languages I write and think in.', icon: 'code', skills: ['Java', 'TypeScript', 'JavaScript', 'Dart', 'SQL'] },
  { id: 'frontend', title: 'Frontend Development', blurb: 'Interfaces people enjoy using.', icon: 'layout', skills: ['React', 'React Router', 'Vite', 'Responsive Design'] },
  { id: 'backend', title: 'Backend Development', blurb: 'APIs, services and the logic behind them.', icon: 'server', skills: ['Spring Boot', 'Spring Security', 'REST APIs', 'Serverless Functions', 'Supabase'] },
  { id: 'mobile', title: 'Mobile Development', blurb: 'Android and mobile applications.', icon: 'smartphone', skills: ['Flutter', 'Provider', 'Material 3', 'Unit & Widget Testing'] },
  { id: 'ai', title: 'AI & Machine Learning', blurb: 'Models, data and intelligent features.', icon: 'brain', skills: ['OpenAI API', 'LLM Integration'] },
  { id: 'databases', title: 'Databases', blurb: 'Storing and shaping data.', icon: 'database', skills: ['PostgreSQL', 'Supabase', 'Row-Level Security'] },
  { id: 'tools', title: 'Tools & Technologies', blurb: 'What I build and ship with.', icon: 'wrench', skills: ['Git & GitHub', 'Cloudflare Pages', 'Supabase Storage'] },
];
