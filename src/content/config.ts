import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        isDraft: z.boolean(),
    })
});

export const collections = {
    'blog': blogCollection
};