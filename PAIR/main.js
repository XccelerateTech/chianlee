/*
0. split the user input by spaces
1. get the command 

*/

var input = prompt('What are your command?').split(' ');

var command = input[0];
console.log(command);

if (command === "C") {
	var width = Number(input[1]);
	var height = Number(input[2]);
	console.log(width);
	console.log(width);
}
