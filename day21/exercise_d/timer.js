const EventEmitter = require('events');

class Timer extends EventEmitter {
	constructor(secondTotal) {
		super();
		var self = this;
		var secondPassed = 0;
		var secondRemaining;
		this.timer = setInterval(function() {
			secondRemaining = secondTotal - secondPassed;
			self.emit('tick', secondRemaining);
			secondPassed += 1;
		}, 1000);

	}
}

var clock = new Timer(5);


module.exports = Timer;