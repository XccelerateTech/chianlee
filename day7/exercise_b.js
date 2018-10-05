function Player(name) {
	this.name = name;
	this.health_point = 100;
	this.counter = 0;
}

Player.prototype.attack = function(enemy) {
	enemy.health_point -= 10;
	this.counter += 1;
	if (this.counter === 3) {
		this.counter = 0;
		this.health();
	}
	enemy.counter = 0;
}

Player.prototype.health = function() {
	this.health_point += 5;
}

var tom = new Player('tom');
var jerry = new Player('jerry');
var players = [tom, jerry];

while (tom.health_point > 0 && jerry.health_point > 0) {
	let attackerIndex = getRandomInt(2);
	let attacker = players[attackerIndex];
	let defenderIndex = attackerIndex === 1 ? 0 : 1;
	let defender = players[defenderIndex];

	attacker.attack(defender);
}

if (tom.health_point === 0) {
	console.log("the winner is " + jerry.name);	
	console.log('health jerry ' + jerry.health_point);
	console.log('health tommy ' + tom.health_point);
} else {
	console.log("the winner is " + tom.name);	
	console.log('score jerry ' + jerry.health_point);
	console.log('score tommy ' + tom.health_point);
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}