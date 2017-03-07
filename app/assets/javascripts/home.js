var map;
function initMap() {
	place = {lat:40.797, lng:-74.044}
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.797, lng: -74.044},
		zoom: 8
	});

	var acOptions = {
		types: ['address']
	};
	var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
	autocomplete.bindTo('bounds',map);

	marker = new google.maps.Marker({
		position: place,
		map: map
	});

	var infoWindowOptions = {
		content: 'Robert Is Here!'
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(marker,'click',function(e){

		infoWindow.open(map, marker);

	});


	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		infoWindow.close();
		var place = autocomplete.getPlace();
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
		marker.setPosition(place.geometry.location);
		infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
		infoWindow.open(map, marker);
		google.maps.event.addListener(marker,'click',function(e){

			infoWindow.open(map, marker);

		});
	});
}