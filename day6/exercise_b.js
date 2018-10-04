function reverse(number) {
	var numStr = number.toString();
	var result = [];
	for (let i = 0; i < numStr.length; i += 1) {
		result.unshift(Number(numStr[i]));	
	}
	return result;
}

console.log(reverse(123456));