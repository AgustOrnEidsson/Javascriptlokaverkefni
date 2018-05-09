var fors = document.getElementById("forsida");
var dep = document.getElementById("komur");
var arr = document.getElementById("farir");

dep.onclick=function(){
	depp();
}

arr.onclick=function(){
	arrr();
}

function depp(){
    $.ajax({
		'url': 'http://apis.is/flight',
	  	'type': 'GET',
	  	'dataType': 'json',
		'data': {'language': 'is', 'type': 'departures'},
		'success': function(response) {
			document.getElementById("head").innerHTML+='<title>Komur</title>';	
			document.body.innerHTML+='<div id="flug"></div>'
		  	var dic = {}
		  	for (x=1;x < response.results.length; x++) {		
				dic[response.results[x].airline] = {timiplan : response.results[x].date, til : response.results[x].flightNumber,flugfelag : response.results[x].to,for : response.results[x].plannedArrival};
			};
			for (key in dic){
				if(key!=="null"){
					document.getElementById("flug").innerHTML +='<div id="flugin"><h3>'+dic[key].til+'</h3><h4>'+dic[key].flugfelag+'</h4><h5>'+dic[key].timiplan+'</h5></div>';
				}
			}
			var arr = document.getElementById("farir");
			arr.onclick=function(){
				arrr();
			}
		  }
	});
	
}
function arrr(){
	$.ajax({
		'url': 'http://apis.is/flight',
	  	'type': 'GET',
	  	'dataType': 'json',
		'data': {'language': 'is', 'type': 'arrivals'},
		'success': function(response) {
			document.body.innerHTML+='<div id="flug"></div>'
			document.getElementById("head").innerHTML+='<title>Farir</title>';			  	
			var dic = {}
		  	for (x=1;x < response.results.length; x++) {			
				dic[response.results[x].airline] = {timiplan : response.results[x].date, til : response.results[x].flightNumber,flugfelag : response.results[x].from,for : response.results[x].plannedArrival};
			};
			for (key in dic){
				if(key!=="null"){
					document.getElementById("flug").innerHTML +='<div id="flugin"><h3>'+dic[key].til+'</h3><h4>'+dic[key].flugfelag+'</h4><h5>'+dic[key].timiplan+'</h5></div>';
				}
			}
			var dep = document.getElementById("komur");
			dep.onclick=function(){
				depp();
			}
		}
	});
}