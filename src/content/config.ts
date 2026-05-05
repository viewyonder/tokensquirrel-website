import { defineCollection, z } from 'astro:content';

const levelSchema = z.object({
  title: z.string(),
  level: z.union([z.literal('100'), z.literal('200'), z.literal('300')]),
  summary: z.string(),
  order: z.number(),
});

const guides = defineCollection({
  type: 'content',
  schema: levelSchema,
});

const tutorials = defineCollection({
  type: 'content',
  schema: levelSchema,
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { guides, tutorials, blog };
