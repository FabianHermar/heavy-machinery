/** @type {import('tailwindcss').Config} */
export default {
	content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
	theme: {
		extend: {
			fontFamily: {
				ISRegular: [ 'ISRegular', 'sans-serif' ],
				ISMedium: [ 'ISMedium', 'sans-serif' ],
				ISSemibold: [ 'ISSemibold', 'sans-serif' ],
				ISBold: [ 'ISBold', 'sans-serif' ],
			}
		},
	},
	plugins: [],
}
