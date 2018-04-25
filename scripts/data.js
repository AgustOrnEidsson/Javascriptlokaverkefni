$.ajax({
	'url': 'http://apis.is/flight',
	'type': 'GET',
	'dataType': 'json',
	'data': {'language': 'is', 'type': 'departures'},
	'success': function(response) {
	console.log(response);
	}
});



$.getJSON( "data.json", function( data ) {
var concertEvents = [];
	
for(let i = 0; i<data.results.length; i++){
	concertEvents.push
	({
		airline:data.results[i].airline,
		date:data.results[i].date,
		to:data.results[i].to
	});
	}
	console.log(concertEvents);
	console.log(concertEvents[0].name);
});