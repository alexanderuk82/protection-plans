/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}", // Include all HTML and JS files in the src folder and its subfolders
		"./*.html", // Include all HTML files in the root directory
		"./js/**/*.{js,jsx}" // Include all JS and JSX files in the js folder and its subfolders
	],
	theme: {
		extend: {
			colors: {
				main: "#2E3FBD", // Custom color 1
				main200: "#4F63F9", // Custom color 2
				greenAccent: "#19B6C7", // Custom color 3
				yellowAction: "#FFC94D", // Custom color 3
				txt: "#2A3653", // Custom color 3
				heading: "#18181B", // Custom color 3
				tag: "#2D2D2D" // Custom color 3
			},
			fontFamily: {
				base: ["Poppins", "sans-serif"] // Set Poppins as the base font
			},
			boxShadow: {
				banner: "0px -5px 35px 22px rgba(0, 0, 0, 0.10)",
				form: "0px 2px 4px 0px rgba(0, 0, 0, 0.50)"
			}
		}
	},
	plugins: []
};
