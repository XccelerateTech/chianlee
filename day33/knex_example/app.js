const axios = require('axios');

axios.get('https://google.com')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(err) {
		console.log(err);
	})