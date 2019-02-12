var express = require('express');

const port = 8568;
var server = express();

server.set('view engine', 'ejs');
server.use('/public', express.static('public'));

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/docs', (req, res) => {
  res.render('docs');
});

server.get('/*', (req, res) => {
  res.send('fourohfour');
});

server.listen(port);
