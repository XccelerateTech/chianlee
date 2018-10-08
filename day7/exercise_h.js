class Swimmable {
	can_swim() { return true; }
}

class Flyable {
	can_fly() { return true; }
}

class Milkable {
	feed_milk() { return true; }
}

class LayEggable {
	lay_egg() { return true; }
}

class Bat {
	constructor() {
		this.flyable = new Flyable();
		this.milkable = new Milkable();
	}

	can_fly() { return this.flyable.can_fly(); }

	feed_milk() { return this.milkable.feed_milk(); }
}

class Bird {
	constructor() {
		this.flyable = new Flyable();
		this.layEggable = new LayEggable();
	}

	can_fly() { return this.flyable.can_fly(); }
	lay_egg() { return this.layEggable.lay_egg(); }
}

class Fish {
	constructor() {
		this.swimmable = new Swimmable();
		this.layEggable = new LayEggable();
	}

	can_swim() { return this.swimmable.can_swim(); }
	lay_egg() { return this.layEggable.lay_egg(); }
}

class Whale {
	constructor() {
		this.swimmable = new Swimmable();
		this.milkable = new Milkable();
	}

	can_swim() { return this.swimmable.can_swim(); }
	feed_milk() { return this.milkable.feed_milk(); }
}