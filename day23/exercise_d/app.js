var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/test', (req, res) => {
	var array = JSON.parse(req.body["name"]);

	var sum = array.reduce( (sum, x) => {
		return sum + x;
	});

	res.send(`${sum}`);
});

app.listen(3000);