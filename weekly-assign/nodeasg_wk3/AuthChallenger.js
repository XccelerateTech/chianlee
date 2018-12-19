const AuthChallenger = function(knex) {
	return function(username, password, callback) {
		let query = knex.select('username')
			.from('users')
			.where('username', username)
			.where('password', password);

			query.then((rows) => {
				if(rows.length ===1) {
					callback(null, true);

				} else {
					callback(null, false);
				}
			}).catch((err) => {
				callback(err);
			})
	}
}

module.exports = AuthChallenger;