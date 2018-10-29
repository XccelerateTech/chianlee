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
			console.log(self.secondRemaining);
		}, 1000);
	}

	pause() {
		clearInterval(this.timer);
		console.log('i am pause');

		/*
			clear interval

		*/
	}

	stop() {
		clearInterval(this.timer);
		this.secondPassed = 0;
		this.secondRemaining = this.secondTotal;
		console.log('i am stoped');
	}
}

var clock = new Timer(5);
clock.start();

setTimeout(function() {
	clock.pause();
	clock.start();
}, 4000);


setTimeout(function() {
	clock.stop();
	clock.start();
}, 9000);

module.exports = Timer;