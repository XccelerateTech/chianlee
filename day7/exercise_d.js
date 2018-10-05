class Monster {
	constructor(option) {
		this.name = option.name;
		this.health = option.health;

	}

	wound() {
		this.health -= Math.floor(Math.random() * 16) + 5 
		if (this.health <= 0) console.log('monster dead.');
	}
}

var crappy = new Monster({name: 'crappy', health: 100});


while (crappy.health >= 0) {
	crappy.wound();
}
