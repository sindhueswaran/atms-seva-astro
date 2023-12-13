import { defineCollection, z } from "astro:content";

export const collections = {
    whatwedo: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false), 
      title: z.string(), 
      date: z.date().transform((str) => new Date(str)),
      description: z.string(),
      tags: z.array(z.string()),
      categories: z.array(z.string()),
      img: z.string(),
      set: z.string().array(),
      weight: z.number(),
    }),
  }),
};
