import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
})

const microblog = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    url: z.string().url(),
  }),
})

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    blog: z.string().optional(),
  }),
})

export const collections = {
  blog,
  microblog,
  projects,
}
