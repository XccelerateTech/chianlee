function Player(name) {
	this.name = name;
	this.health = 100;
	this.counter = 0;
}

Player.prototype.attack = function(enemy) {
	enemy.health -= 10;
	this.counter += 1;
	if (this.counter === 3) {
		this.counter = 0;
		this.health();
	}
	enemy.counter = 0;
}

Player.prototype.health = function() {
	this.health += 5;
}

var tom = new Player('tom');
var jerry = new Player('jerry');
var players = [tom, jerry];

while (tom.health > 0 && jerry.health > 0) {
	let attackerIndex = getRandomInt(2);
	let attacker = players[attackerIndex];
	let defenderIndex = attackerIndex === 1 ? 0 : 1;
	let defender = players[defenderIndex];

	attacker.attack(defender);
}

if (tom.health === 0) {
	console.log("the winner is " + jerry.name);	
	console.log('health jerry ' + jerry.health);
	console.log('health tommy ' + tom.health);
} else {
	console.log("the winner is " + tom.name);	
	console.log('score jerry ' + jerry.health);
	console.log('score tommy ' + tom.health);
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}