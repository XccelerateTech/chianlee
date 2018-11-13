const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/people', function(req, res){
    res.render('person');
});

app.get('/something', (req, res) => {
	res.render('views', { layout: 'otherPage' })
});


app.listen(8080);