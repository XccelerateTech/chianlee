const EventEmitter = require('events');

class Timer extends EventEmitter {
	constructor(secondTotal) {
		super();
		this.secondPassed = 0;
		this.secondRemaining = secondTotal;
		this.secondTotal = secondTotal;
	}

	start() {
		var self = this;
		this.timer = setInterval(function() {
			self.secondRemaining = self.secondTotal - self.secondPassed;
			self.emit('tick', self.secondRemaining);
			self.secondPassed += 1;
		}, 1000);
	}

	pause() {
		clearInterval(this.timer);
		this.emit('pause', this.secondRemaining);
	}

	stop() {
		clearInterval(this.timer);
		this.secondPassed = 0;
		this.secondRemaining = this.secondTotal;
		this.emit('stop', this.secondRemaining);
	}
}


module.exports = Timer;