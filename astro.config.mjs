import { defineConfig, fontProviders } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://mattaningram.com',

	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Figtree',
			cssVariable: '--font-figtree',
			weights: ['300 700'],
		},
		{
			provider: fontProviders.google(),
			name: 'Lora',
			cssVariable: '--font-lora',
			weights: [400, 500],
		},
	],

	image: {
		responsiveStyles: true,
	},

	vite: {
		css: {
			devSourcemap: true,
		},
	},

	integrations: [icon()],
})
