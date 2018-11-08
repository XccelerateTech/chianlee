const express = require('express');
const app = express();
const faker = require('faker');

app.get('/people', function(req, res) {
	let obj = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email()
	};

	res.json(obj)
});

app.listen(3000);

module.exports.mainApp = app;