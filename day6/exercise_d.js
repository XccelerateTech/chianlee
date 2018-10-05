function average(score) {
	var sum = score.reduce(function(sum, num) {
		return sum + num;
	});

	return Math.round(sum / score.length);
}


console.log(average([2,4,5]));