function check_num(number) {
	if (isNaN(number) || number < 0 || number === 0) {
		return 'ERROR';
	}

	while (number < 1000000) {
		number = number * 10;
	}

	return number;
}