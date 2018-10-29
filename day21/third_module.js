var randomLetterGenerator = require('./second_module');
var randomNumberGenerator = require('./first_module');

function textGenerator(length) {
	var result = '';
	for(let i = 0; i < length; i += 1) {
		result += randomLetterGenerator(randomNumberGenerator);	
	}
	return result;
}

console.log(textGenerator(5));