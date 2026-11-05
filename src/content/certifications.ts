/**
 * Certifications.
 *
 * Images → put the certificate in /public/images/certificates/ (landscape, ~1000px wide).
 * verifyUrl → the public "Verify at" link printed on the certificate.
 * Optional fields that are left empty are simply not shown.
 */
export type Certification = {
  id: string;
  title: string;
  /** Who created / authorised the course. */
  issuer: string;
  /** Where it was taken, e.g. Coursera. */
  platform?: string;
  /** e.g. 'September 2026' */
  date: string;
  grade?: string;
  hours?: string;
  image?: string;
  verifyUrl?: string;
  /** Optional PDF copy in /public/certificates/ */
  pdf?: string;
};

export const certifications: Certification[] = [
  {
    id: 'supervised-ml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    platform: 'Coursera',
    date: 'September 2026',
    grade: '100%',
    hours: '~33 hours',
    image: '/images/certificates/supervised-ml.jpg',
    verifyUrl: 'https://coursera.org/verify/VPVOWKDRYSQ0',
    pdf: '/certificates/supervised-ml.pdf',
  },
];
