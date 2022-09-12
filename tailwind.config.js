module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	daisyui: {
		themes: ['aqua'],
	},
	plugins: [require('daisyui')],
};
