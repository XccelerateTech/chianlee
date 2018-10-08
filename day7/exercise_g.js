// use inheritance

/*

bat - fly + feedmilk

fish - swim + lay egg

whale - swim + feedmilk

bird - fly + lay egg
*/

class SeaCreature {
	can_swim() { return true; }
}

class FlyingCreature {
	can_fly() { return true; }
}

class Bat extends FlyingCreature {
	feed_milk() { return true; }
}

class Bird extends FlyingCreature {
	lay_egg() { return true; }
}

class Fish extends SeaCreature {
	lay_egg() { return true; }
}

class Whale extends SeaCreature {
	feed_milk() { return true; }
}