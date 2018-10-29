$(function() {
	var turn = 0;
	var circle = [];
	var cross = [];
	var position;

	$("table").on("click", "td", function(e) {
		$td = $(this);
		position = $td.prop("id");

		if (turn === 0) {
			$td.toggleClass("circle");
			turn = 1;
			circle.push(position);
		} else if (turn === 1) {
			$td.toggleClass("cross");
			turn = 0;
			cross.push(position);
		}

		var condition = checkWinning(circle, cross);
		if (condition === 'circle won') {
			console.log('circle won')
			return;
		} else if (condition === 'cross won') {
			console.log('cross won');
			return;
		} 

	});

	function checkWinning(circle, cross) {
		var winning = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];

		for (let i = 0; i < winning.length ; i += 1) {
			 let winningPattern = winning[i];

			 var circlePoint = winningPattern.every((number) => {
			 	return circle.indexOf(number) !== -1;
			 });

			 var crossPoint = winningPattern.every( (number) => {
			 	return cross.indexOf(number) !== -1;
			 })

			 if (circlePoint) {
			 	return 'circle won';
			 } else if (crossPoint) {
			 	return 'cross won';
			 } else {
			 	false;
			 }
		}
	}


});