import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const resume = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/resume' }),
	schema: ({ image: img }) =>
		z.object({
			order: z.number(),
			name: z.string(),
			position: z.string().optional(),
			dates: z.string().optional(),
			url: z.string().optional(),
			color: z.string().optional(),
			icon: img().optional(),
		}),
})

export const collections = { resume }
