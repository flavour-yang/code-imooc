/*
 * @Author: Y
 * @Date: 2022-02-11 14:48:51
 * @Description:
 */

const { override, addWebpackAlias, addWebpackPlugin, overrideDevServer, watchAll } = require('customize-cra')
const path = require('path')
const WebpackBar = require('webpackbar')
module.exports = {
	webpack: override(
		// add an alias for "page" imports
		addWebpackPlugin(new WebpackBar()),
		// dev server plugin
		addWebpackAlias({
			page: path.resolve(__dirname, 'src/page'),
			'@': path.resolve(__dirname, './src')
		})
	),
	devServer: overrideDevServer(watchAll())
}
