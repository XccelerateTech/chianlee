describe('Manually ticking the Jasmine clock', function() {
	var timerCallback;

	beforeEach(function() {
		timerCallback = jasmine.createSpy('timerCallback');
		jasmine.clock().install();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});

	it('causes a timeout to be called synchronously', function() {
		setTimeout(function() {
			timerCallback();
		}, 100);

		expect(timerCallback).not.toHaveBeenCalled();
		jasmine.clock().tick(101);
		expect(timerCallback).toHaveBeenCalled();

	});
});