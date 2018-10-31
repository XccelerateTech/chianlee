const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
});

app.post('/info', (req,res) => {
	console.log(req.body);
	res.send('info received');
});

app.listen(3000);