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
      title: "Ormskirk",
      html: "<div class='caption'><h3>Ormskirk</h3><p class='text-justify'>Home of Edge Hill University, it's a really small town with only 24k people. There is not much to do, but it is a lovely place. And yes, I study here.</p><p class='text-justify'><strong>Cool things I did here:</strong> Study :P</p></div>"
  });

  var infoWindow = new google.maps.InfoWindow({
      content: "wait for it",
      maxWidth: 200
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(this.html);
      infoWindow.open(map, this);
    });

  var places = [
    {"name": "Liverpool", "country": "England", "lat": 53.40837, "lng": -2.99157, "info": "<div class='caption'><h3>Liverpool</h3><p class='text-justify'>Famous for being the home town of The Beatles. It was also the European City of Culture in 2008 and the home port of the Titanic.</p><p class='text-justify'><strong>Cool things I did here:</strong> The Cavern Club, Titanic Museum, Zip Wire</p></div>"},
    {"name": "Dundee", "country": "Scotland", "lat": 56.46202, "lng": -2.97072, "info": "<div class='caption'><h3>Dundee</h3><p class='text-justify'>4th biggest city of Scotland, it still has many victorian architecture. The University of Dundee is one of the top medical schools in the UK.</p><p class='text-justify'><strong>Cool things I did here:</strong> Laser tag</p></div>"},
    {"name": "Pitlochry", "country": "Scotland", "lat": 56.69918, "lng": -3.71735, "info": "<div class='caption'><h3>Pitlochry</h3><p class='text-justify'>Tourist town, particularly known as a centre for hillwaking and radical sports, surrounded by mountains.</p><p class='text-justify'><strong>Cool things I did here:</strong> Bungee Jump</p></div>"},
    {"name": "Lake District","country": "England", "lat": 54.46087, "lng": -3.08863, "info": "<div class='caption'><h3>Lake District</h3><p class='text-justify'>A National Park that includes the deepest and longest lakes in Europe and the highest mountain (978m). It is a very popular holiday destination. </p><p class='text-justify'><strong>Cool things I did here:</strong> Boat trip around the lake</p></div>"}
  ];

  loadPlaces(map, places);

  $("#titlePlaces").text("Places I've been (" + (places.length+1) + ")");
}

function loadPlaces(map, places) {
  var collapse = 2;

  for(var i = 0; i < places.length; i++) {
    var placesMarkers = new google.maps.Marker({
      position: new google.maps.LatLng(places[i].lat, places[i].lng),
      map: map,
      title: places[i].name,
      html: places[i].info
    });

    var infoWindow = new google.maps.InfoWindow({
      content: "wait for it",
      maxWidth: 200
    });

    google.maps.event.addListener(placesMarkers, 'click', function() {
      infoWindow.setContent(this.html);
      infoWindow.open(map, this);
    })

    if($("#"+places[i].country).length == 0 ){
      $("#accordion").append('<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+collapse+'"><h4 id="'+places[i].country+'">'+places[i].country+'</h4></a><div id="collapse'+collapse+'" class="panel-collapse collapse"><div class="cities" id="cities'+places[i].country+'"><p>'+places[i].name+'</p></div></div>');
      collapse++;
    } else {
      $("#cities"+places[i].country).append('<p>'+places[i].name+'</p>');
      console.log(i);
    }
  }
}


google.maps.event.addDomListener(window, 'load', initialize);


if ( window.addEventListener ) {
  var egg = [];
  var be = "76,85,67,65,83";

  window.addEventListener("keydown", function(e){
    egg.push( e.keyCode );
    if ( egg.toString().indexOf( be ) >= 0 ) {
      $("#be").modal('show');

      egg = [];
    }
  }, true);
}

// if ( window.addEventListener ) {
//     window.addEventListener("keydown", function(e){
//         $("#text").append(e.keyCode + " ");
//         console.log(e.keyCode);
//     }, true);
// }