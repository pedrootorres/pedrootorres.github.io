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
      html: "<div class='caption'><h3>Ormskirk</h3><p class='text-justify'>Home of Edge Hill University, it's a really small town with only 24k people. There is not much to do, but it is a lovely place. And yes, I study here.</p><p class='text-justify'><strong>Cool things I did here:</strong> Study :P, Kart</p></div>"
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
    {"name": "Lake District", "country": "England", "lat": 54.46087, "lng": -3.08863, "info": "<div class='caption'><h3>Lake District</h3><p class='text-justify'>A National Park that includes the deepest and longest lakes in Europe and the highest mountain (978m). It is a very popular holiday destination. </p><p class='text-justify'><strong>Cool things I did here:</strong> Boat trip around the lake</p></div>"},
    {"name": "Conwy", "country": "Wales", "lat": 53.28287, "lng": -3.82948, "info": "<div class='caption'><h3>Conwy</h3><p class='text-justify'>A city surrounded by walls of an old castle in ruins. And it's also the city of the smallest house in the United Kingdom.</p><p class='text-justify'><strong>Cool things I did here:</strong> First castle i visited</p></div>"},
  ];

  var friends =[
    {"name": "Recife", "country": "Brazil", "lat": -8.04755, "lng": -34.87696},
    {"name": "Fortaleza", "country": "Brazil", "lat": -3.73186, "lng": -38.52667},
    {"name": "São Paulo", "country": "Brazil", "lat": -23.55052, "lng": -46.63331},
    {"name": "Salvador", "country": "Brazil", "lat": -12.97223, "lng": -38.50142},
    {"name": "Belo Horizonte", "country": "Brazil", "lat": -19.92452, "lng": -43.93527},
    {"name": "Brasília", "country": "Brazil", "lat": -15.79415, "lng": -47.88255},
    {"name": "Araranguá", "country": "Brazil", "lat": -28.93612, "lng": -49.49230},
    {"name": "Rajkot", "country": "India", "lat": 22.30389, "lng": 70.80216},
    {"name": "Chongqing", "country": "China", "lat": 29.56301, "lng": 106.55156},
    {"name": "Beijing", "country": "China", "lat": 39.90403, "lng": 116.40753},
    {"name": "Shenzhen", "country": "China", "lat": 22.54310, "lng": 114.05787},
    {"name": "Lusaka", "country": "Zambia", "lat": -15.41667, "lng": 28.28333},
    {"name": "Hefei", "country": "China", "lat": 31.82059, "lng": 117.22724},
    {"name": "Macau", "country": "China", "lat": 22.19874, "lng": 113.54387},
    {"name": "Chandigarh", "country": "India", "lat": 30.73331, "lng": 76.77942},
    {"name": "Xichang", "country": "China", "lat": 27.89450, "lng": 102.26445},
    {"name": "Zhongshan", "country": "China", "lat": 22.51700, "lng": 113.39272},
    {"name": "York", "country": "England", "lat": 53.95997, "lng": -1.08730},
    {"name": "Santa Maria Capua Vetere", "country": "Italy", "lat": 41.08209, "lng": 14.25419},
    {"name": "Jeonju", "country": "Korea", "lat": 35.82422, "lng": 127.14795},
    {"name": "Iksan", "country": "Korea", "lat": 35.94829, "lng": 126.95760},
    {"name": "Daejeon", "country": "Korea", "lat": 36.35041, "lng": 127.38455},
    {"name": "Oldenburg", "country": "Germany", "lat": 53.14345, "lng": 8.21455},
    {"name": "London", "country": "England", "lat": 51.50735, "lng": -0.12776},
    {"name": "Manchester", "country": "England", "lat": 53.47932, "lng": -2.24849},
    {"name": "Heywood", "country": "England", "lat": 53.59263, "lng": -2.22565},
    {"name": "Huesca", "country": "Spain", "lat": 42.13184, "lng": -0.40781},
    {"name": "Zaragoza", "country": "Spain", "lat": 41.64882, "lng": -0.88909},
    {"name": "Mülheim an der Ruhr", "country": "Germany", "lat": 51.41857, "lng": 6.88452},
    {"name": "Freehold", "country": "USA", "lat": 40.22438, "lng": -74.29905},
    {"name": "Oklahoma", "country": "USA", "lat": 35.46756, "lng": -97.51643},
    {"name": "Caen", "country": "France", "lat": 49.18286, "lng": -0.37068},
    {"name": "Guadalajara", "country": "Mexico", "lat": 20.65970, "lng": -103.34961},
    {"name": "Amfreville-Sur-Iton", "country": "France", "lat": 49.14717, "lng": 1.14912},
    {"name": "Hong Kong", "country": "China", "lat": 22.39865, "lng": 114.09465},
  ];

  loadPlaces(map, places);
  // loadFriends(map, friends);

  var friendsMarker = [];

  $("#friendsCheckbox").change(function() {
    if(this.checked) {
      loadFriends(map, friends, friendsMarker);
    } else {
      for (var i = 0; i < friendsMarker.length; i++) {
        friendsMarker[i].setMap(null);
      };

      $("#accordion2").empty();
    }
  })

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
    }
  }
}

function loadFriends(map, friends, friendsMarker) {
  var colapso = 1;
  var icon = 'img/friends_icon.png';

  for(var i = 0; i < friends.length; i++) {
    var placesMarkers = new google.maps.Marker({
      position: new google.maps.LatLng(friends[i].lat, friends[i].lng),
      map: map,
      icon: icon,
      title: friends[i].name
    });

    friendsMarker.push(placesMarkers);

    if($("#"+friends[i].country+"2").length == 0 ){
      $("#accordion2").append('<a data-toggle="collapse" data-parent="#accordion2" href="#colapso'+colapso+'"><h4 id="'+friends[i].country+'2">'+friends[i].country+'</h4></a><div id="colapso'+colapso+'" class="panel-collapse collapse"><div class="cities" id="friends'+friends[i].country+'"><p>'+friends[i].name+'</p></div></div>');
      colapso++;
    } else {
      $("#friends"+friends[i].country).append('<p>'+friends[i].name+'</p>');
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