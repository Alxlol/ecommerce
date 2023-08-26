/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#222222',
				dark: '#000000',
				'dark-500': 'rgba(0, 0, 0, 0.5)',
				'dark-200': 'rgba(0, 0, 0, 0.2)',
				light: '#FFFFFF'
			},
			screens: {
				smd: '425px'
			}
		}
	},
	plugins: []
};
