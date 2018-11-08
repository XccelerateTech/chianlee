const express = require('express');
const basicAuth = require('express-basic-auth');


const app = express();

const USERS = [
]

let myAuthFunc = (username, password) => {
	return Users.some((user) => {
		return user.username === username && user.password == password
	})
}

app.use(basicAuth({
	authorizer: myAuthFunc,
	challenge: true
}));



app.get('/', (req, res) => {
	res.send('hello there, mr authenticated');
});

app.listen(8080, () => {
	console.log('I am running on port 8080, please authenticated me')
});