const NoteService = require('../NoteService');
const fs = require('fs');

describe('Testing NoteService', function() {
	beforeEach( function() {
		fs.unlinkSync('test.json');
		fs.writeFileSync('test.json', '[]');
	});

	it('list our note using listNote()', function(done) {
		const noteService = new NoteService();
		noteService.listNote().then( (result) => {
			expect(result).toEqual(["test"]);
			done();
		}).catch((err) => {
			console.log(err);
		});

	});

	it('add a note using addNote', function(done) {
		const noteService = new NoteService('test.json');
		noteService.addNote('test').then(() => {
			return noteService.listNote();
		}).then((result) => {
			expect(result).toEqual(['test']);
			done();
		}).catch((err) => {
			done.fail(err);
		})
	});

	it('should be able to add more than one note using addNote()', function(done) {
		// create a new noteService instance
		// add one note
		// then, add another note
		// then list the 

		const noteService = new NoteService('test.json');
		noteService.addNote('test').then( () => {
			return noteService.listNote();
		});
	});
});
