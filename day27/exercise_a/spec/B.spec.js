const Jedi = require('../starwars').Jedi;
const Sith = require('../starwars').Sith;

/*
should have a correct name
correct power
health
whether attack is called right.

attack should injure the opponent
should die when health less than 0
*/


describe('Jedi functions testings', () => {

	var newJedi;
	var newSith;

	beforeEach( () => {
		newJedi = new Jedi('newJedi', 100, 1000);
		newSith = new Sith('newSith', 100, 2000);
	});

	it('should have a correct name', function() {
		expect(newJedi.name).toBe('newJedi');
	});

	it('should have a correct power', function() {
		expect(newJedi.power).toBe(100);
	});

	it('should have a correct health', function() {
		expect(newJedi.health).toBe(1000);
	});

	it('should attack the correct target', function() {
		spyOn(newJedi, 'attack');
		newJedi.attack(newSith);
		expect(newJedi.attack).toHaveBeenCalledWith(newSith);
		expect(newJedi.attack).toHaveBeenCalledTimes(1);
	});

	it('attack should injure the right opponent', function() {
		spyOn(newSith, 'injure');
		newJedi.attack(newSith);
		expect(newSith.injure).toHaveBeenCalled();
		expect(newSith.injure).toHaveBeenCalledTimes(1);

	});


	it('should be injured the by correct amount of damage', function() {
		newJedi.injure(50);
		expect(newJedi.health).toBe(950);
	});

	it('should die when health is below 0', function() {
		newJedi.injure(2000);
		expect(newJedi.dead()).toBeTruthy();
	});


}
	
	

)
