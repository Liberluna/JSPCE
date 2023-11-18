/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function({ addUtilities }) {
			const newUtilities = {
			  ".text-shadow": {
				textShadow: "0px 2px 3px white"
			  },
			  ".text-shadow-xs": {
				textShadow: "0px 1px 3px white"
			  },
			  ".text-shadow-sm": {
				textShadow: "0px 2px 3px white"
			  },
			  ".text-shadow-md": {
				textShadow: "0px 3px 3px white"
			  },
			  ".text-shadow-lg": {
				textShadow: "0px 5px 3px white"
			  },
			  ".text-shadow-xl": {
				textShadow: "0px 7px 3px white"
			  },
			  ".text-shadow-2xl": {
				textShadow: "0px 10px 3px white"
			  },
			  ".text-shadow-3xl": {
				textShadow: "0px 15px 3px white"
			  },
			  ".text-shadow-none": {
				textShadow: "none"
			  }
			};
	  
			addUtilities(newUtilities);
		  }
	], // text-shadow-[power]
	darkMode: "class",
}
