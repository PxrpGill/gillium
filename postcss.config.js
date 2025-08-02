const path = require('path');

module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-mixins': {
			mixinsDir: path.resolve(__dirname, 'shared/styles/mixins'),
		},
		'postcss-nested': {},
		'postcss-simple-vars': {
			variables: {
				'mantine-breakpoint-xs': '36em',
				'mantine-breakpoint-sm': '48em',
				'mantine-breakpoint-md': '62em',
				'mantine-breakpoint-lg': '75em',
				'mantine-breakpoint-xl': '88em',
			},
		},
		'postcss-import': {
			path: [path.resolve(__dirname, 'shared/styles')],
		},
		'postcss-preset-mantine': {},
	},
};
