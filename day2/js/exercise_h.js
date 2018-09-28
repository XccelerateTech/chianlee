function calculator(operator, num1, num2) {
	if (operator === '+') {
		return num1 + num2;
	} else if (operator === '-') {
		return num1 - num2;
	} else if (operator === '*') {
		return num1 * num2;
	} else if (operator === '/') {
		return num1 / num2;
	} else {
		throw new Error('operator not recognise.');
	}
}