import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = new Express();

const htmlTpl = (
  <html>
    <head>
      <title>Server rendered</title>
    </head>
    <body>
      body
    </body>
  </html>
);

app.use((req, res) => {
  res.status(400);
  res.send(`<! doctype html>\n${renderToString(htmlTpl)}`);
});

app.listen(3002, (err) => {
  console.info('==> Open http://localhost:3002 in a browser to view the app.');
});
