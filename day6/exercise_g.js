function middle(numbers) {
	var min = Math.min(...numbers);
	var max = Math.max(...numbers);

	for (let i = 0; i < numbers.length; i += 1) {
		let number = numbers[i];
		if (number > min && number < max) return number;
	}
}

console.log(middle([69, 20,106]));