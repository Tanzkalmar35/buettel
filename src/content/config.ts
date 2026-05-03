import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string(),
    isPast: z.boolean().default(false),
    gallery: z.array(z.string()).optional(),
    longDescription: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.any(), // We'll keep it flexible for now or define a more specific schema if needed
});

export const collections = {
  'events': eventsCollection,
  'settings': settingsCollection,
};
