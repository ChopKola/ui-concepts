/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-orange": "#D35400",
        "brand-yellow": "#F4C430",
        "brand-brown": "#6B3E26",
        "brand-green": "#2E7D32",
        "brand-white": "#FDF6E3",
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},

			keyframes: {
			},
			animation: {
			},
		},
		screens: {
			xs: "360px",
			ss: "480px",
			sm: "576px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
			xxl: "1700px",
		},
	},
	plugins: [],
}
