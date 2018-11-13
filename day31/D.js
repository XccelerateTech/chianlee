var pg = require('pg');
var config = {
	user: 'chian',
	database: 'fruits',
	password: 'password',
	host: 'localhost',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
}

var client = new pg.Client(config);

client.connect();

client.query('SELECT * FROM ft2018 WHERE payment >= 70', function(err, results) {
	if(err) { console.log(err); }
	console.log(results.rows);
});