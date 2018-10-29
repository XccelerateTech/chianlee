var randomNumberGenerator = require('./first_module');

function randomLetterGenerator(randomNumber) {
	var index = randomNumber() - 1;
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	return letters[index];

}

module.exports = randomLetterGenerator;
