const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
  	'./src/index.js',
  	'webpack-hot-middleware/client'
  ],
  devtool: 'inline-source-map',
  devServer: {
  	contentbase: './dist',
  	hot: true
  },
  plugins: [
  	new CleanWebpackPlugin(),
  	new HtmlWebpackPlugin({
  		title: 'Output Management'
  	}),
  	new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};