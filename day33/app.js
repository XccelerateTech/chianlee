const knex = require('knex')({
	client: 'postgresql',
	connection: {
		database: "fruits",
		user: "chian",
		password: "password"
	}
});

var client = new pg.Client('postgres://accelerate:password@localhost:5432/bookings');

client.connect();

let query = knex.select('*').from('users').innerJoin('groups')