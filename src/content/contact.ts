/**
 * Contact details. Leave a field empty to hide it (a placeholder shows until you fill it in).
 */
export const contact = {
  email: 'kethmiwarnasooriya@gmail.com',
  phone: '+94 77 620 5853',
  linkedin: 'https://www.linkedin.com/in/kethmi-warnasooriya-36b25b326/', // full URL, e.g. https://www.linkedin.com/in/your-name
  github: 'https://github.com/kethmiwarnasooriya', // full URL, e.g. https://github.com/your-name
  /** Any other professional links, e.g. { label: 'Medium', url: 'https://…' } */
  other: [] as { label: string; url: string }[],
};

/**
 * Resume / CV. Put your PDF at /public/resume.pdf and set `file` to '/resume.pdf'.
 */
export const resume = {
  file: '',
  /** Work experience, internships, volunteering. Shown in About (Experience) and the resume preview. */
  experience: [
    {
      title: 'Trainee, Job Skills Development Training Programme',
      place: 'Bank of Ceylon, Nittambuwa Super Grade Branch',
      period: 'Feb 2024 – Jul 2024',
      details:
        "Handled customer service in the front office and supported back-office branch operations, through a programme for school leavers run by BOC's Training & Development Department.",
    },
  ] as { title: string; place: string; period: string; details?: string }[],
};
