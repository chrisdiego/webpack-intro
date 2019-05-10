const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicpath: config.output.publicpath
}))

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function() {
	console.log('app listening on port 3000');
});