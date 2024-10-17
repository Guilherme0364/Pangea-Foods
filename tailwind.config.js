/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],	
	theme: {
		colors: {
			primaryColor: "#3F8574",
			secondaryColor: "#D5A83C",
			tertiaryColor: "#4F3D25",
			quaternaryColor: "#8F2A29",

			textColor: "#000000",
			headerColor: "#000000",
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],			
			},
		}
	},
	plugins: [],
}