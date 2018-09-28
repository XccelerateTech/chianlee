var codeBase = {
	6: 'a',
	1: 'b',
	7: 'd',
	4: 'e',
	3: 'i',
	2: 'l',
	9: 'm',
	8: 'n',
	0: 'o',
	5: 't'
}


function maya(number) {
	var text = "";
	number = String(number);

	var numArr = number.split('');

	for (let i = 0; i < numArr.length; i += 1) {
		var currentNum = numArr[i];
		text += codeBase[currentNum];
	}

	return text;
}

maya(1234);