var Timer = require('./timer');


var clock = new Timer(5);
clock.start();
setTimeout( () => {
	clock.pause();
	clock.start();
}, 5000);

setTimeout( () => {
	clock.stop();
	clock.start();
}, 9000);

clock.on('tick', function(secondRemaining) {
	console.log(secondRemaining);
});


clock.on('pause', function(secondRemaining) {
	console.log('i am paused! time remaining is : ' + secondRemaining);
});

clock.on('stop', function(secondRemaining) {
	console.log('i am stopped! time remaining is : ' + secondRemaining);
});
