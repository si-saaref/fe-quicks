/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-blue': '#2F80ED',
				'main-black': '#4F4F4F',
				'main-gray': '#828282',
				'main-white': '#E0E0E0',
				'main-orange': '#E5A443',
				'secondary-orange': '#FCEED3',
				'main-purple': '#9B51E0',
				'secondary-purple': '#EEDCFF',
				'main-green': '#43B78D',
				'secondary-green': '#D2F2EA',
				'secondary-blue': '#E9F3FF',
				'indicator-orange': '#F8B76B',
				'indicator-purple': '#8785FF',
				'indicator-red': '#EB5757',
				'indicator-yellow': '#F2C94C',
				'label-blue': '#E9F3FF',
				'label-orange': '#FDCFA4',
				'label-yellow': '#F9E9C3',
				'label-tosca': '#AFEBDB',
				'label-green': '#CBF1C2',
				'label-grey': '#CFCEF9',
				'label-pink': '#F9E0FD',
				'label-navy': '#9DD0ED',
			},
		},
	},
	plugins: [],
};
