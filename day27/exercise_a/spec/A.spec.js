const Jedi = require('../starwars').Jedi;
const Sith = require('../starwars').Sith;
const duel = require('../starwars').duel;

describe('starwars duel testing', () => {

	var dummyAnakin;
	var dummyObiwan;

	beforeEach( () => {
		dummyAnakin = new Sith('Anakin Skywalker', 100, 1000);
		dummyObiwan = new Jedi('Obiwan Kenobi', 120, 1000);
		jasmine.clock().install();
		spyOn(dummyAnakin, 'attack');
		spyOn(dummyObiwan, 'attack');
		spyOn(dummyAnakin, 'injure');
		spyOn(dummyAnakin, 'dead');	
	});

	afterEach( () => {
		jasmine.clock().uninstall();
	});

	it('tracks if the function in duel has been have been called', function() {
		duel(dummyObiwan, dummyAnakin);

		expect(dummyObiwan.attack).toHaveBeenCalledTimes(6);
		expect(dummyObiwan.attack).toHaveBeenCalledWith(dummyAnakin);

		expect(dummyAnakin.attack).toHaveBeenCalledTimes(6);
		expect(dummyAnakin.attack).toHaveBeenCalledWith(dummyObiwan);
	});

	it('should always have the same outcome, Anakin becomes injured', function() {

		duel(dummyAnakin, dummyObiwan);
	
		dummyAnakin.injure(dummyAnakin.health - 10);
		dummyAnakin.dead();

		expect(dummyAnakin.injure).toHaveBeenCalledWith(dummyAnakin.health - 10);
		expect(dummyAnakin.dead).toHaveBeenCalledTimes(1);
		expect(dummyAnakin.dead).toBeTruthy();
	});

	it('Anakin should be rescued by Darth Sidious after 5000 miliseconds', () => {
		duel(dummyObiwan, dummyAnakin);
		jasmine.clock().tick(5100);

		expect(dummyAnakin.health).toEqual(800);
		expect(dummyAnakin.power).toEqual(90);
	});
})