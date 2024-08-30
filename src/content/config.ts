import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const pubs = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string().optional(),
        publishDate: z.date(),
        publishDesc: z.string(),
        doi: z.string().optional(),
        cite: z.string(),
        additionalInfo: z.string().optional(),
        seo: seoSchema.optional(),
        links: z
            .array(
                z.object({
                    label: z.string(),
                    url: z.string()
                })
            )
            .optional(),
        thumbnail: z.string().optional()
    })
});

export const collections = { pages, pubs };
