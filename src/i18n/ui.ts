import nav_en from './translations/en/shared/nav';
import presentation_en from './translations/en/portfolio/presentation';
import blog_en from './translations/en/blog/blog';
import certifications_en from './translations/en/portfolio/certifications';
import projects_en from './translations/en/portfolio/projects'
import about_me_en from './translations/en/portfolio/about_me';
import technologies_en from './translations/en/portfolio/technologies';

// import nav_es from './translations/es/nav';
import presentation_es from './translations/es/portfolio/presentation';
import blog_es from './translations/es/blog/blog';
import certifications_es from './translations/es/portfolio/certifications';
import projects_es from './translations/es/portfolio/projects'
import about_me_es from './translations/es/portfolio/about_me';
import technologies_es from './translations/es/portfolio/technologies';

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
        ...projects_en,
        ...about_me_en,
        ...technologies_en
    },
    es: {
        //* ...nav_es, not necessary for the moment (Links with no traduction Portfolio & Blog)
        ...presentation_es,
        ...blog_es,
        ...certifications_es,
        ...projects_es,
        ...about_me_es,
        ...technologies_es,
    },
} as const;