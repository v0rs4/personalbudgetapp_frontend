import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';

const webpackConfig = require('../webpack.dev.config');
const webpackCompiler = webpack(webpackConfig);
const webpackServerOptions = {
  hot: true,
  publicPath: webpackConfig.output.publicPath
}
const app = new Express();

app.use(webpackDevMiddleware(webpackCompiler, webpackServerOptions));
app.use(webpackHotMiddleware(webpackCompiler));

app.use(Express.static(path.join(__dirname, '..', 'dist')));

app.use((req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(3001, 'localhost', (err) => {
  console.info('==> Open http://localhost:3001 in a browser to view the app.');
});
