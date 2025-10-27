import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Certificates, count } from 'astro:db';

export const getCertificatesPaginated = defineAction({
    input: z.object({
        limit: z.number().min(1).max(50).default(5),
        offset: z.number().min(0).default(0),
    }),
    handler: async ({ limit = 10, offset = 0 }) => {

        const data = await db
            .select()
            .from(Certificates)
            .limit(limit)
            .offset(offset);


        const [totalRecords] = await db
            .select({ count: count() })
            .from(Certificates);

        const total = Number(totalRecords.count);

        return {
            data: data.map((cert) => ({
                ...cert,
                technologies: JSON.parse(cert.technologies),
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
