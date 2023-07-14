/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-gray': '#1F2123',
				'red': '#FF5145',
				'green': '#38A852',
				'blue': '#3D8BFF',
				'yellow': '#FFBB01',
				'white': '#FEFEFE',
			},
		},
	},
	plugins: [],
}
