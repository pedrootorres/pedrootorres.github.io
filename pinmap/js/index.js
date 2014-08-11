function initialize() {
  var ormskirk = new google.maps.LatLng(53.5693158,-2.8753524);
  var originalPosition = new google.maps.LatLng(49.5711465, 7.940688)

  var mapOptions = {
    zoom: 5,
    center: originalPosition,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var home = 'img/home_icon.png'

  var beachMarker = new google.maps.Marker({
      position: ormskirk,
      map: map,
      icon: home
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$.ajax({
  url: "data.json",
  success: function (data) {
    var obj = JSON.parse(data);
  }
});