function informMe(endpoint, value, callback) {
	var http = new XMLHttpRequest();
	var link = `https://restcountries.eu/rest/v2/${endpoint}/${value}`;
	http.open('GET', link, true);
	// call the ajax here, and get the data
	http.onreadystatechange = function() {
	    if(http.readyState != XMLHttpRequest.DONE) {
	        return;
	    } else if(http.status == 200) {
	    		let data = JSON.parse(http.responseText);
	    		callback(data);
	    } else {
	        console.log('error occurred' + http.status);
	    }
	}
	http.send();
}


informMe('capital', 'Singapore', function(json) {
	console.log(json);
})