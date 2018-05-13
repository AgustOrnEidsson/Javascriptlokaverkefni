document.getElementById("head").innerHTML+='<title>Flug</title>';

document.addEventListener("DOMContentLoaded", function(event)
{
    timepicker.load({
        interval: 15
    });
});

function depp(){
	$("#flug").html("");
    $.ajax({
		'url': 'http://apis.is/flight',
	  	'type': 'GET',
	  	'dataType': 'json',
		'data': {'language': 'is', 'type': 'departures'},
		'success': function(response) {
			var dic={};	
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
	$("#flug").html("");
	$.ajax({
		'url': 'http://apis.is/flight',
	  	'type': 'GET',
	  	'dataType': 'json',
		'data': {'language': 'is', 'type': 'arrivals'},
		'success': function(response) {
			var dicc={};				  	
		  	for (var x=1;x < response.results.length; x++) {			
				dicc[response.results[x].airline] = {timiplan : response.results[x].date, til : response.results[x].flightNumber,flugfelag : response.results[x].from,for : response.results[x].plannedArrival};
			};
			for (key in dicc){
				if(key!=="null"){
					document.getElementById("flug").innerHTML +='<div id="flugin"><h3>'+dicc[key].til+'</h3><h4>'+dicc[key].flugfelag+'</h4><h5>'+dicc[key].timiplan+'</h5></div>';
				}
			}
			var dep = document.getElementById("komur");
			dep.onclick=function(){
				depp();
			}
		}
	});
}

function leita() { 
    var input = document.getElementById("leita");
    var filter = input.value.toUpperCase();
    var flug = document.getElementById("flug");
    var svar = flug.getElementsByTagName("div");
    for (var i = 0; i < svar.length; i++) {
        h3 = svar[i].getElementsByTagName("h3")[0];
        if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
            svar[i].style.display = "";
        } else {
            svar[i].style.display = "none";

        }
    }
}

function timi() {
    var input = document.getElementById("time");
    var filter = input.value.toUpperCase();
    var flug = document.getElementById("flug");
    var svar = flug.getElementsByTagName("div");
    for (var i = 0; i < svar.length; i++) {
        h5 = svar[i].getElementsByTagName("h5")[0];
        if (h5.innerHTML.indexOf(filter) > -1) {
            svar[i].style.display = "";
        } else {
            svar[i].style.display = "none";

        }
    }
}