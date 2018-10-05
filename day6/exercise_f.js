function transform(numString) {
	var codex = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd',
		5: 'e',
		6: 'f',
		7: 'g',
		8: 'h',
		9: 'i',
		0: 'j'
	}
	var numArr = numString.split('').map(Number);
	numArr.sort(function(a, b) {
		return a - b;
	});

	numArr = numArr.map(function(element) {
		return codex[element];
	});

	return numArr.join('');
}

console.log(transform('710'));