function initialize() {
  var ormskirk = new google.maps.LatLng(53.56894, -2.88506);
  var originalPosition = new google.maps.LatLng(49.5711465, 7.940688)

  var mapOptions = {
    zoom: 5,
    center: originalPosition,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var home = 'img/home_icon.png'

  var marker = new google.maps.Marker({
      position: ormskirk,
      map: map,
      icon: home,
      title: "Ormskirk"
  });

  loadPlaces(map);
}

var places = [
  {"name": "Liverpool", "lat": 53.40837, "lng": -2.99157},
  {"name": "Dundee", "lat": 56.46202, "lng": -2.97072}
];

function loadPlaces(map) {
  for(var i = 0; i < places.length; i++) {
    var placesMarkers = new google.maps.Marker({
      position: new google.maps.LatLng(places[i].lat, places[i].lng),
      map: map,
      title: places[i].name
    });
  }
}

loadPlaces();
google.maps.event.addDomListener(window, 'load', initialize);