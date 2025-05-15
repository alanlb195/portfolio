// actions/portfolio/get-certificates-paginated.ts
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Certificates } from 'astro:db';

export const getCertificatesPaginated = defineAction({
    input: z.object({
        limit: z.number().min(1).max(50).default(5),
        offset: z.number().min(0).default(0),
    }),
    handler: async ({ limit, offset }) => {
        const all = await db.select().from(Certificates);
        const paginated = all.slice(offset, offset + limit);

        return {
            data: paginated.map((cert) => ({
                ...cert,
                technologies: JSON.parse(cert.technologies),
            })),
            meta: {
                offset,
                limit,
                total: all.length,
                hasMore: offset + limit < all.length,
            },
        };
    },
});
