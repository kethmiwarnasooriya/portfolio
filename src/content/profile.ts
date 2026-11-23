/**
 * Personal information.
 * Edit this file to update the text on the site. Empty strings / empty arrays are shown
 * on the site as clearly marked placeholders until you fill them in.
 */
export const profile = {
  name: 'Kethmi Warnasooriya',
  firstName: 'Kethmi',
  tagline: 'Code with curiosity. Build with purpose.',
  role: 'Computer Science Undergraduate',
  degree: 'BSc (Hons) Computer Science',
  university: 'NSBM Green University',
  location: 'Sri Lanka',

  /** One or two sentences shown under your name on the landing page. */
  /** Short line shown under the hero tagline. */
  status: 'Open to software engineering & AI internships',

  intro:
    'Building full-stack web applications, native mobile experiences, and ML-powered systems—from real-time safety predictors to AI skill-verification platforms.',

  interests: [
    'Software Engineering',
    'Artificial Intelligence & Machine Learning',
    'Full-Stack Development',
    'Backend Development',
    'Android & Mobile Development',
  ],

  image: {
    src: '/images/kethmi.webp',
    alt: 'Portrait of Kethmi Warnasooriya',
    width: 1024,
    height: 1536,
  },

  about: {
    /** Your introduction in your own words: 2–3 short paragraphs. */
    paragraphs: [
      "Hi, I'm a third-year Computer Science undergraduate at NSBM Green University. I initially got into Computer Science because I was curious about how technology works and how software can solve real-world problems. As I explored programming, I became more interested in building things rather than just learning the theory behind them.",
      "I enjoy developing full-stack applications, exploring AI and machine learning, and integrating AI into practical software solutions. What excites me most is taking an idea, understanding the problem behind it, and turning it into something useful. I'm particularly interested in building intelligent applications that combine good software engineering with AI to make everyday tasks easier and more efficient.",
      "I'm still learning and improving, but I genuinely enjoy challenging myself, experimenting with new technologies, and turning ideas into working products.",
    ] as string[],
    /** How you approach problems / technology. */
    approach:
      "I start by understanding the problem and who it's for before I write any code, then build in small, working steps. I keep security on the server rather than trusting the interface, and I test the core logic so I can change things with confidence. When I use AI, I treat it as one part of a well-engineered system: I validate what it returns and keep the important decisions in my own code.",
    /** Career aspirations. */
    aspirations:
      "Right now I'm looking for an internship in software engineering, mobile or AI development, where I can learn from experienced engineers and contribute to real products. Longer term, I want to grow into a software engineer who builds intelligent applications, combining solid engineering with AI to make everyday tasks easier.",
  },

  education: [
    {
      title: 'BSc (Hons) Computer Science',
      place: 'NSBM Green University, Sri Lanka',
      /** e.g. '2023 – 2027 (expected)' */
      period: '2024-2028 (expected)',
      current: true,
      details: '',
    },
    {
      /** e.g. 'G.C.E. Advanced Level (Physical Science)' once confirmed */
      title: 'School Education',
      place: "St. Joseph's Balika Vidyalaya, Kegalle",
      period: '',
      current: false,
      details: '',
    },
  ],
};

export type Profile = typeof profile;
