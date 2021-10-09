// app4.mjs
// middlewares:
// morgan, which logs requests received
// compression, which compresses responses when necessary
// static, which serves static files

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
let app = express();

import morgan from 'morgan';
import compression from 'compression';
app.use(morgan('tiny'));
app.use(compression());

app.get('/', (req, res) => {
  res.redirect('/page1.html');
});

// any file in '/public' has a name the matches the URL?
app.use(express.static(__dirname + '/public'));

// try to move this route before the static middleware
app.get('/page2.html', (req, res) => {
  res.send('you should not see page 2');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
