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
  // contentBase: 'http://localhost:3002',
  // quiet: true,
  // noInfo: true,
  hot: true,
  // inline: true,
  // lazy: false,
  publicPath: webpackConfig.output.publicPath
  // headers: {'Access-Control-Allow-Origin': '*'},
  // stats: {colors: true}
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

// const webpackServer = new Express();
// const webpackConfig = require('../webpack.dev.config');
// const webpackCompiler = webpack(webpackConfig);
// const webpackServerOptions = {
//   // publicPath: config.output.publicPath,
//   // hot: true,
//   // stats: {
//   //   color: true
//   // }
//   contentBase: 'http://localhost:3002',
//   quiet: true,
//   noInfo: true,
//   hot: true,
//   inline: true,
//   lazy: false,
//   publicPath: 'http://localhost:3001',
//   headers: {'Access-Control-Allow-Origin': '*'},
//   stats: {colors: true}
// }
//
// webpackServer.use(webpackDevMiddleware(webpackCompiler, webpackServerOptions));
// webpackServer.use(webpackHotMiddleware(webpackCompiler));
//
// webpackServer.listen(3002, 'localhost', (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.info('==> Webpack development server listening on port 3002');
//   }
// });
