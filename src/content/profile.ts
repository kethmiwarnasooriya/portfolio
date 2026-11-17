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
    paragraphs: [] as string[],
    /** How you approach problems / technology. */
    approach: '',
    /** Career aspirations. */
    aspirations: '',
  },

  education: [
    {
      title: 'BSc (Hons) Computer Science',
      place: 'NSBM Green University, Sri Lanka',
      /** e.g. '2023 – 2027 (expected)' */
      period: '',
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
