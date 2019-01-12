const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const globImporter = require('node-sass-glob-importer');

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							importer: globImporter(),
							sourceMap: true
						}
					}
				]
			}
		]
	}
});