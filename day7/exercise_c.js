/*


*/


function Gambler(cash, loseProb) {
	this.cash = cash;
	this.loseProb = loseProb;
}

Gambler.prototype.bet = function() {
	var chance = getRandomInt(10);

	if (chance < this.loseProb) {
		this.cash -= 50;
	} else {
		this.cash += 50;
	}
}

var gamblerOne = new Gambler(100, 0.4, 40);
var gamblerTwo = new Gambler(300, 0.6, 20);


function casino() {
	var players = []

	var bankrupt = [];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
