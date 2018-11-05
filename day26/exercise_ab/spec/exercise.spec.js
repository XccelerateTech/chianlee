describe('testing exercise a', () => {
	it('should return block one' , function() {
		let text = "I am the it block one!";
		expect(text).toBe("I am the it block one!");
	});

	it('should return block two' , function() {
		let text = "I am the it block two!";
		expect(text).toBe("I am the it block two!");
	});

	it('should return block three' , function() {
		let text = "I am the it block three!";
		expect(text).toBe("I am the it block three!");
	});

	it('should return block four' , function() {
		let text = "I am the it block four!";
		expect(text).toBe("I am the it block four!");
	});

	it('should return block five' , function() {
		let text = "I am the it block five!";
		expect(text).toBe("I am the it block one!");
	});

	it('deep equality', function() {
		let obj = {a: 1}
		expect(obj).toBe({a: 1});
	});
});