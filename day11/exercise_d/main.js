$(function() {

	$('#coordinate').on("submit", function(e) {
		e.preventDefault();
		var data = $(this).serializeArray();
		var lat = data.find( (obj) => obj.name === 'lat' ).value
		var lng = data.find( (obj) => obj.name === 'lng').value
		$.ajax({
			url: `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`,
			type: "GET",
			success: function(data) {
				console.log(`sunrise time is ${data.results.sunrise}`);
				console.log(`sunset time is ${data.results.sunset}`);
			}
		});		
	})

})