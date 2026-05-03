// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // WICHTIG für Astro 5!

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,json}", base: "./src/content/pages" }),
  schema: z.object({
    // Home Page
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroImage: z.string().optional(),
    highlightsTitle: z.string().optional(),
    highlightsSubtitle: z.string().optional(),
    highlights: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),

    // About Page
    historyTitle: z.string().optional(),
    valuesTitle: z.string().optional(),
    values: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    boardTitle: z.string().optional(),
    boardMembers: z.array(z.object({
      name: z.string(),
      role: z.string(),
    })).optional(),
    membershipTitle: z.string().optional(),
    membershipSubtitle: z.string().optional(),
    membershipFees: z.array(z.object({
      label: z.string(),
      price: z.string(),
    })).optional(),

    // Global Settings
    villageName: z.string().optional(),
    slogan: z.string().optional(),
    address: z.string().optional(),
    email: z.string().optional(),
    copyright: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  // Der Loader sagt Astro 5 exakt, wo die Dateien des CMS liegen
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  
  // Das Schema lassen wir zum Testen erst mal sehr locker
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    isPast: z.boolean().default(false),
    image: z.string().optional(),
    description: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  events: eventsCollection,
  pages: pagesCollection
};
