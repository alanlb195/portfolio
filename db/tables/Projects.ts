import { defineTable, column } from "astro:db";

export const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),

    name: column.text(),

    technologies: column.text(), // String [] - JSON.parse needed

    projectUrl: column.text(), // (live/demo)

    repositoryUrl: column.text(),

    title_en: column.text(),
    description_en: column.text(),

    title_es: column.text(),
    description_es: column.text(),
  },
});