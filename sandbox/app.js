var app = require('express')();

var myLogger = function(req, res, next) {
	console.log('vlogged');
	next();
}
app.use(myLogger);
	
app.get('/', (req, res) => {
	res.send('hello world');
});



app.listen(3000);