$.ajax({
	'url': 'http://apis.is/flight',
  	'type': 'GET',
  	'dataType': 'json',
	'data': {'language': 'is', 'type': 'arrivals'},
	'success': function(response) {
		console.log(response)
	  	var dic = {}
	  	for (x=1;x < response.results.length; x++) {			
			dic[response.results[x].airline] = {timiplan : response.results[x].date, til : response.results[x].flightNumber,flugfelag : response.results[x].from,for : response.results[x].plannedArrival};
		};
		for (key in dic){
			if(key!=="null"){
				document.getElementById("flug").innerHTML +='<div id="flugin"><h3>'+dic[key].til+'</h3><h4>'+dic[key].flugfelag+'</h4><h5>'+dic[key].timiplan+'</h5></div>';
			}
		}
	  }
});