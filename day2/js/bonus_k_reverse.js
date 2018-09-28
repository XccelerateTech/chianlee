var codeBase = {
	'a': '6',
	'b': '1',
	'd': '7',
	'e': '4',
	'i': '3',
	'l': '2',
	'm': '9',
	'n': '8',
	'o': '0',
	't': '5'
}


// given a word. convert it to a string of numbers.

function maya(text) {
	var number = "";

	var textArr = text.split('');
	// debugger;
	for (let i = 0; i < textArr.length; i += 1) {
		var currentChar = textArr[i];
		number += codeBase[currentChar];
	}

	return parseInt(number, 10);
}

maya('blie'); // 1234