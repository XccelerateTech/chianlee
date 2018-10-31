var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/from/file.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/to/filecopy.txt');

readable.on('data', function(chunk){
    writeable.write(chunk);
});