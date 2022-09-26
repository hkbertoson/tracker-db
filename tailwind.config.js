module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	daisyui: {
		themes: ['aqua'],
	},
	plugins: [require('daisyui')],
};
