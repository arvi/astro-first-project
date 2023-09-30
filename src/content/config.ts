// import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
import { format } from 'date-fns'

// define your collection(s)
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      categories: z.array(z.string()),
      date: z.string().transform((str) => format(new Date(str), 'MMM d, yyyy')),
      featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
    }),
})

// export a single `collections` object to register your collection(s).
// this key should match your collection directory name in src/content
export const collections = {
  posts: postsCollection,
}
