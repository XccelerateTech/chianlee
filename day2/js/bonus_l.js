function countChar(string, char) {
	let count = 0;

	char = char.toLowerCase();

	for (let c of string) {
		if (c.toLowerCase() === char) {
			count += 1;
		}
 	}

 	return count;
}