import { defineTable, column } from "astro:db";

export const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),

    title_en: column.text(),
    title_es: column.text(),

    projectUrl: column.text({ optional: true }), // link to see the live/demo
    repositoryUrl: column.text({ optional: true }), // github repository

    mediaUrl: column.text({ optional: true }), // can be imagen or video
    mediaType: column.text({ optional: true, default: "image" }), // "image" | "video"
  },
});