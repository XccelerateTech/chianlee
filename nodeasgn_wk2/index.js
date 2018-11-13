const express = require('express');
const fs = require('fs');
const path = require('path');
const hb = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

const app = express();

const config = require('./config.json')[process.env.NODE_ENV || 'development'];
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());


app.use(basicAuth({
    authorizer: new AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))),
    challenge: true,
    realm: 'Note Taking application'
}));

let noteService = new NoteService(path.join(__dirname, config.notes));

app.get('/', function(req, res, next) {
	console.log('getting');
	next();
});

app.get('/', function(req, res, next) {
	noteService.list(req.auth.user).then(function(notes) {
		res.render('index', {
			user: req.auth.user,
			notes: notes
		})
	});
});

app.use('/api/notes', (new NoteRouter(noteService)).router());

app.listen(config.port, () => console.log(`Notes taking listening on port ${config.port}`))