const mainApp = require('./app.js').mainApp
const request = require('supertest');

describe('Route ', () => {
	it('/ should return 404', (done) => {
		request(mainApp)
			.get('/')
			.expect(404)
			.expect('content-type', /html/)
			.end((err, res) => {
				if(err) throw err;
				done();
			});
	});

	xit('/people should return person page', (done) => {
		request(mainApp)
			.get('/people')
			.expect(200)
			.expect('content-type', /json/)
	});
})