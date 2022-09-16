/*
 * @Author: Y
 * @Date: 2022-02-11 14:48:51
 * @Description:
 */
const { override, addWebpackAlias, addWebpackPlugin, overrideDevServer, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');
const WebpackBar = require('webpackbar');
const packageName = require('./package.json').name;
const publicPathPlugin = (config) => {
	config.output = {
		library: 'react-app',
		publicPath: '/',
		libraryTarget: 'umd',
		chunkLoadingGlobal: `webpackJsonp_${packageName}`
	};
	return config;
};

module.exports = {
	webpack: override(
		addDecoratorsLegacy(),
		// add an alias for "page" imports
		addWebpackPlugin(new WebpackBar()),
		// dev server plugin
		addWebpackAlias({
			page: path.resolve(__dirname, 'src/page'),
			'@': path.resolve(__dirname, './src')
		}),
		publicPathPlugin
	),
	devServer: overrideDevServer((config) => {
		return {
			...config,
			proxy: {
				'/api/': {
					target: 'http://47.97.32.162/',
					// target: 'http://dev.jiatu.info:9216/',
					changeOrigin: true
					// ws: false,
					// pathRewrite: {
					// 	'^/app/v1': '/app/v1'
					// },
					// secure: false
				}
			},
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		};
	})
};
