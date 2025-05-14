import nav_en from './translations/en/nav';
import presentation_en from './translations/en/presentation';
import blog_en from './translations/en/blog';
import certifications_en from './translations/en/certifications';

// import nav_es from './translations/es/nav';
import presentation_es from './translations/es/presentation';
import blog_es from './translations/es/blog';
import certifications_es from './translations/es/certifications';

export const languages = {
    en: 'Eng',
    es: 'Esp',
};

export const defaultLang = 'en';

export const ui = {
    en: {
    ...nav_en,
    ...presentation_en,
    ...blog_en,
    ...certifications_en,
    },
    es: {
    //* ...nav_es, not necessary for the moment
    ...presentation_es,
    ...blog_es,
    ...certifications_es,
    },
} as const;