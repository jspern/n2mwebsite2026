import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    icon: z.string(),
    tagline: z.string(),
    summary: z.string(),
    metaDescription: z.string(),
    features: z.array(z.string()),
    order: z.number(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    summary: z.string(),
    featured: z.boolean().default(false),
    date: z.string(),
  }),
});

export const collections = { services, work };
