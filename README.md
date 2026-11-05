# Kethmi Warnasooriya — Portfolio

*Code with curiosity. Build with purpose.*

React + TypeScript + Vite. No backend.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Update your content

All text lives in `src/content/`, so you never need to edit the components. Empty fields appear on the site as yellow dashed placeholders until you fill them in.

| What | File |
|---|---|
| Intro, About text, education | `src/content/profile.ts` |
| Projects (screenshots → `public/images/projects/`, videos → `public/videos/`) | `src/content/projects.ts` |
| Skills per category | `src/content/skills.ts` |
| Certifications (images → `public/images/certificates/`, PDFs → `public/certificates/`) | `src/content/certifications.ts` |
| Email, phone, LinkedIn, GitHub, CV file, experience | `src/content/contact.ts` |
| CV PDF | `public/resume.pdf` |
| Photo | `public/images/kethmi.webp` |

## Contact form (free)

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint URL.
2. Copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT=<your URL>`.

If no endpoint is set, the form opens the visitor's email app addressed to the email in `contact.ts`.

## Deploy (free)

Push the repository to GitHub and import it into Vercel or Netlify. Use build command `npm run build` and output folder `dist`. Add `VITE_CONTACT_ENDPOINT` as an environment variable there.
