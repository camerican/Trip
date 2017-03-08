var directionsDisplay;
var directionsService;
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'));
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
}

function calcRoute() {
	var start = document.getElementById('origin').value;
	var end = document.getElementById('destination').value;
	var mode = document.getElementById('mode').value;
	var request = {
		origin: start,
		destination: end,
		travelMode: mode
	};
	directionsService.route(request, function(result, status) {
		if (status == 'OK') {
			directionsDisplay.setDirections(result);
		}
	});
}

document.addEventListener("DOMContentLoaded",function(){
	initMap();
	calcRoute();
	document.getElementById("search").addEventListener("submit",function(event){
		calcRoute();
	});
});