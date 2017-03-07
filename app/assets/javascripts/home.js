var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15
	});

	var acOptions = {
		types: ['address']
	};
	var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
	autocomplete.bindTo('bounds',map);

	var infoWindowOptions = {
		content: 'Robert Is Here!'
	};
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			marker = new google.maps.Marker({
				position: pos,
				map: map
			});
			marker2 = new google.maps.Marker({
				map: map
			})
			var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
			google.maps.event.addListener(marker2,'click',function(e){

				infoWindow.open(map, marker2);

			});
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:7,
    center: pos
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
  directionsService = new google.maps.DirectionsService();
}

function calcRoute() {
  var start = marker
  var end = marker2
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		infoWindow.close();
		var place = autocomplete.getPlace();
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
			console.log(directionsService);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
		marker2.setPosition(place.geometry.location);
		infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
		infoWindow.open(map, marker2);
		google.maps.event.addListener(marker2,'click',function(e){

			infoWindow.open(map, marker2);
		});
	});
			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
}