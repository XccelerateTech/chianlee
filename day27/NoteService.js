const fs = require('fs');


class NoteService {
	constructor(filename) {
		this.filename = filename;
		this.notes = [];
	}

	listNote() {
		return new Promise( (resolve, reject) => {
			fs.readFile(this.filename, 'utf-8', (err, data) => {
				if (err) {
					reject(err);
					return;
				}
				this.note = JSON.parse(data);
				resolve(JSON.parse(data));
			});
		});
	}

	addNote(note) {
		return new Promise((resolve, reject) => {
			this.notes.push(note);
			fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
				if(err) {
					reject(err);
					return;
				}
				resolve();
			});
		});
	}

	deleteNote() {

	}
}


module.exports = NoteService;