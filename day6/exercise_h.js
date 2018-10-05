/*
move forward by 10 alphabet 

find the index of the current alphabet. 
add 10 to that index
if > 25 , then index - 26 , resets to 0
*/

function move(string) {
	var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var strArr = string.toLowerCase().split('');
	strArr = strArr.map((alphabet) => {
		let index = letterArray.indexOf(alphabet);
		index += 10;
		if (index > 25) { index -= 26; }
		return letterArray[index];
	});

	return strArr.join('');
}

console.log(move('dog'));