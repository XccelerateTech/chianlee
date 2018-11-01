const fs = require('fs');


function readstat(path) {
	return new Promise( (resolve, reject) => {
		fs.stat(path, (err, files) => {
			if(err) {
				reject(err);
			} else {
				resolve([path, files]);
			}
		})
	});
}


var stat = readstat('files/project_A/README.md');
stat.then((files) => {
	let stat = files[1];
	let path = files[0];

	if (stat.isDirectory()) {
		console.log(path + ' is a directory.');
	} else if (stat.isFile()) {
		console.log(path + ' is a file.')
	}
});




