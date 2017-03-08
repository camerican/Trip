// VARIABLES ######################################################################################
// 
// 
var directionsDisplay;
var directionsService;
var map;
// FUNCTIONS ######################################################################################
// 
// 
// initiating the map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'));
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
}
// Calculating the route 
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
// EVENTS ######################################################################################
// 
// 
document.addEventListener("DOMContentLoaded",function(){
	initMap();
	calcRoute();
	document.getElementById("search").addEventListener("submit",function(event){
		event.preventDefault();
		calcRoute();
	});
});