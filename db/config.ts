import { column, defineDb, defineTable } from 'astro:db';

const Certificates = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),

    provider: column.text(),
    date: column.date(),
    duration: column.text(),

    technologies: column.text(), // needed: `JSON.parse()` to read

    certificateUrl: column.text(),

    // Translations:
    title_en: column.text(),
    description_en: column.text(),

    title_es: column.text(),
    description_es: column.text(),
  },
});

export default defineDb({
  tables: {
    Certificates,
  },
});
