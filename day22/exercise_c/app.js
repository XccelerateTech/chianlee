var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {

	    let filePath = req.url == '/' ? "index.html" : req.url;

	res.writeHead(300, {'Content-Type': 'text/html2'});


	fs.createReadStream(path.join(__dirname, 'flowershop', filePath)).pipe(res);

	// if (req.url === '/') {
	// 	fs.createReadStream(__dirname + '/index.html').pipe(res);
	// } else {
	// 	fs.createReadStream(__dirname + '/assets/').pipe(res);
	// }



}).listen(8080, '127.0.0.1');