export type Language = 'en' | 'bn';

export interface Translations {
  navbar: {
    process: string;
    comparison: string;
    faq: string;
    joinWaitlist: string;
    language: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    tos: string;
    cookies: string;
    allLegal: string;
    allRights: string;
  };
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    emailPlaceholder: string;
    cta: string;
    security: string;
    verified: string;
  };
  process: {
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  comparison: {
    heading: string;
    subheading: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    loanExperience: string;
    traditional: string;
    tradDays: string;
    gignite: string;
    gigniteMinutes: string;
    testimonialName: string;
    testimonialRole: string;
    testimonialText: string;
  };
  faq: {
    heading: string;
    subheading: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  cta: {
    heading: string;
    description: string;
    emailPlaceholder: string;
    button: string;
  };
}
