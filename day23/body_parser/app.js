var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded( { extended: false }));

app.post('/test', (req, res) => {
	console.log(req.body);
	res.send('post successful');
});

app.listen(3000);