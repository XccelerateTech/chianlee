var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('GET request to the homepage');
});

app.post('/', function(req, res) {
	res.send('POST request to the homepage')
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

app.listen(3000);