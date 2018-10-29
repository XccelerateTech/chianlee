var timer = require('./timer');

var clock = new timer(5)

clock.on('tick', function(secondRemaining) {
	if (secondRemaining > 0) {
		console.log(secondRemaining);	
	} else {
		console.log('kaboom');
		clearInterval(clock.timer);
	}
});