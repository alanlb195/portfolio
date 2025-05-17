import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Projects, count } from 'astro:db';

export const getProjectsPaginated = defineAction({
    input: z.object({
        limit: z.number().min(1).max(50).default(5),
        offset: z.number().min(0).default(0),
    }),
    handler: async ({ limit, offset }) => {
        const data = await db
            .select()
            .from(Projects)
            .limit(limit)
            .offset(offset);

        const [totalRecords] = await db
            .select({ count: count() })
            .from(Projects);

        const total = Number(totalRecords.count);

        return {
            data: data.map((project) => ({
                ...project,
                technologies: JSON.parse(project.technologies),
            })),
            meta: {
                offset,
                limit,
                total,
                hasMore: offset + limit < total,
            },
        };
    },
});
