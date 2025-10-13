import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://mattaningram.com',

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
