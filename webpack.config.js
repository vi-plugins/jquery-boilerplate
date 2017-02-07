var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('dist/styles.css');

module.exports = {
	// application entry file
	entry: "./src/index.ts",

	// bundled application output file
	output: {
		path: __dirname,
		filename: "/dist/boilerplate.min.js"
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: ['.ts']
	},

	// Source maps support ('inline-source-map' also works)
	devtool: 'source-map',

	// Add the loader for .ts files.
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.scss$/,
				use: extractCSS.extract([
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				])
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			compress: {
				warnings: true
			}
		}),
		extractCSS
	]
};
