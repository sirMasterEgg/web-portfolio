/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// primary: '#0E2954',
				// secondary: '#1F6E8C',
				// tertiary: '#2E8A99',
				// accent: '#84A7A1',
				background: '#1a1a1a',
				primary: '#ffffff',
				secondary: '#c0c0c0',
				'accent-1': '#ff5252',
				'accent-2': '#03dac6',
				'accent-3': '#e2aaff',
				border: '#444444',
			},
		},
	},
	plugins: [],
};
