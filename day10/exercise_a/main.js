do {
	var second = prompt('How many seconds ?');
	var milisecond = parseInt(second) * 1000;

} while (milisecond < 1000 || milisecond > 60000)

setTimeout(function() {
	console.log("Alarm ringing at " + (new Date()).toTimeString() );
}, milisecond)