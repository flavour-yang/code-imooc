module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
		amd: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			// experimentalObjectRestSpread: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	plugins: ['react'],
	rules: {
		'consistent-return': 0, // 1
		'prefer-destructuring': 0, // 1
		'prefer-promise-reject-errors': 0, // 1
		'prefer-object-spread': 0, // 1
		'array-callback-return': 0, // 1
		'no-console': 0,
		'no-param-reassign': 0, // 给参数重新赋值
		'no-plusplus': 0, // 1
		'no-nested-ternary': 0, // 不允许三元表达式嵌套
		'no-loop-func': 0,
		'no-unneeded-ternary': 0,
		'no-shadow': 0,
		'react/jsx-curly-brace-presence': 0,
		'react/require-default-props': 0,
		'react/no-array-index-key': 0
	}
}
