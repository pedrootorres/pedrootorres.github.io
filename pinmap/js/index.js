$(".panel-heading").click(function() {
  if($("#leftMenu").css("margin-left") != "0px") {
    $("#leftMenu").animate({"margin-left": "0px"}, 500);
  } else {
    $("#leftMenu").animate({"margin-left": "-200px"}, 500);
  }
});

function initialize() {
  var ormskirk = new google.maps.LatLng(53.56894, -2.88506);
  var originalPosition = new google.maps.LatLng(30, 0)

  var mapOptions = {
    zoom: 3,
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
    {"name": "Dublin", "country": "Ireland", "lat": 53.34981, "lng": -6.26031, "info": "<div class='caption'><h3>Dublin</h3><p class='text-justify'>Capital of Ireland, Dublin is a small city with both modern and medieval architecture. There you can find the Trinity College, Christ Church Cathedral and many others churches.</p><p class='text-justify'><strong>Cool things I did here:</strong> Guiness Storehouse</p></div>"},
    {"name": "Galway", "country": "Ireland", "lat": 53.27056, "lng": -9.05667, "info": "<div class='caption'><h3>Galway</h3><p class='text-justify'>Galway is the biggest city close to a lot of natural attractions, like the Cliffs of Moher. Therefore, it is the place where the tours depart from.</p><p class='text-justify'><strong>Cool things I did here:</strong> -</p></div>"},
    {"name": "Liscannor", "country": "Ireland", "lat": 52.97188, "lng": -9.42651, "info": "<div class='caption'><h3>Liscannor</h3><p class='text-justify'>Home of the Cliffs of Moher, Ireland's most visited natural attraction.</p><p class='text-justify'><strong>Cool things I did here:</strong> Cliffs of Moher</p></div>"},
    {"name": "Ballyvaughan", "country": "Ireland", "lat": 53.08913, "lng": -9.14367, "info": "<div class='caption'><h3>Ballyvaughan</h3><p class='text-justify'>Home of the Aillwee Cave</p><p class='text-justify'><strong>Cool things I did here:</strong> Aillwee Cave</p></div>"},
    {"name": "Belfast", "country": "Northen Ireland", "lat": 54.59729, "lng": -5.93012, "info": "<div class='caption'><h3>Belfast</h3><p class='text-justify'>Belfast is the capital of Northen Ireland which is part of the UK. It is known for the shipbuilder Harland and Wolff that built the Titanic. Also, Belfast is close to some natural attractions and to places where Game of Thrones was filmed.</p><p class='text-justify'><strong>Cool things I did here:</strong> Titanic Museum</p></div>"},
    {"name": "Bushmills", "country": "Northen Ireland", "lat": 55.24081, "lng": -6.51156, "info": "<div class='caption'><h3>Bushmills</h3><p class='text-justify'>40.000 hexagonal columns resulted of a volcanic eruption.</p><p class='text-justify'><strong>Cool things I did here:</strong> Giant's Causeway</p></div>"},
    {"name": "Carrick-A-Rede", "country": "Northen Ireland", "lat": 55.23947, "lng": -6.33267, "info": "<div class='caption'><h3>Carrick-a-Rede</h3><p class='text-justify'>It's a bridge that links the mainland to the island of Carrickarede.</p><p class='text-justify'><strong>Cool things I did here:</strong> Carrick-a-Rede (rope bridge)</p></div>"},
    {"name": "Paris", "country": "France", "lat": 48.85661, "lng": 2.35222, "info": "<div class='caption'><h3>Paris</h3><p class='text-justify'>'The City of Light'. Paris is the capital of France, famous for its culture and monuments.</p><p class='text-justify'><strong>Cool things I did here:</strong> Drive a Ferrari, Eiffel Tower, Notre Dame, Triumphal Arch, Pont des Arts, Louvre Museum, Catacombs, Palace of Versailles, Moulin Rouge</p></div>"},
    {"name": "Manchester", "country": "England", "lat": 53.48076, "lng": -2.24263, "info": "<div class='caption'><h3>Manchester</h3><p class='text-justify'>United Kingdom's second most populous urban. Manchester was the site of the world's first railway station and is where scientists first split the atom.</p><p class='text-justify'><strong>Cool things I did here:</strong> Indoor skiing, Cloud 23, Indoor Skydiving</p></div>"},
    {"name": "Monthey", "country": "Switzerland", "lat": 46.25642, "lng": 6.95717, "info": "<div class='caption'><h3>Monthey</h3><p class='text-justify'>Small city with a population of 17.000. It is located on the french part of Switzerland.</p><p class='text-justify'><strong>Cool things I did here:</strong> First time I saw snow on a mountain!</p></div>"},
    {"name": "Milan", "country": "Italy", "lat": 45.46542, "lng": 9.18592, "info": "<div class='caption'><h3>Milan</h3><p class='text-justify'>Milan is not only the most richest city in Italy, but also the main industrial, commercial and financial centre of the country.</p><p class='text-justify'><strong>Cool things I did here:</strong> Galleria Vittorio Emanuele II, Duomo di Milano</p></div>"},
    {"name": "Pisa", "country": "Italy", "lat": 43.72284, "lng": 10.40169, "info": "<div class='caption'><h3>Pisa</h3><p class='text-justify'>Really small town basically known by its leaning tower.</p><p class='text-justify'><strong>Cool things I did here:</strong> Tower of Pisa, Best Gnocchi </p></div>"},
    {"name": "Rome", "country": "Italy", "lat": 41.90278, "lng": 12.49637, "info": "<div class='caption'><h3>Rome</h3><p class='text-justify'>Capital of Italy and 'Capital of the World'. Rome is a city-museum with buildings, monuments and ruins everywhere.</p><p class='text-justify'><strong>Cool things I did here:</strong> Piazza Venezia, Piazza del Popolo, Pantheon, Colosseum, Fontana di Trevi, Piazza Navona, Foro Romano, Palatino, Città del Vaticano</p></div>"},
    {"name": "Vatican City", "country": "Vatican City", "lat": 41.90292, "lng": 12.45339, "info": "<div class='caption'><h3>Vatican City</h3><p class='text-justify'>Smallest country in the world, the Città del Vaticano is the home of the catholic church, where the Pope lives.</p><p class='text-justify'><strong>Cool things I did here:</strong> Vatican museum, The Creation of Adam, La Pieta</p></div>"},
    {"name": "Genoa", "country": "Italy", "lat": 44.40565, "lng": 8.94626, "info": "<div class='caption'><h3>Genoa</h3><p class='text-justify'>One of the best Christmas lunches I had in my life, with a genuine Italian family. An wonderful experience I had luck to have.</p><p class='text-justify'><strong>Cool things I did here:</strong> Spent Christmas with an Italian family</p></div>"},
    {"name": "Florence", "country": "Italy", "lat": 43.77103, "lng": 11.24800, "info": "<div class='caption'><h3>Florence</h3><p class='text-justify'>Centre of medieval European trade and finance, Florence is the birthplace of Renaissance.</p><p class='text-justify'><strong>Cool things I did here:</strong> Duomo di Firenze, Ponte Vecchio, Piazzale Michelangelo</p></div>"},
    {"name": "Bologne", "country": "Italy", "lat": 44.49489, "lng": 11.34262, "info": "<div class='caption'><h3>Bologne</h3><p class='text-justify'>Bologne is known by its towers and its 7 secrets</p><p class='text-justify'><strong>Cool things I did here:</strong> Fontana del Netuno, Piazza Maggiore, Towers of Bologne</p></div>"},
    {"name": "Venice", "country": "Italy", "lat": 45.44085, "lng": 12.31552, "info": "<div class='caption'><h3>Venice</h3><p class='text-justify'>Small island separated by canals and linked by little bridges. The means of transport are gondola and vaporetto</p><p class='text-justify'><strong>Cool things I did here:</strong> Walk the whole island</p></div>"},
    {"name": "Berlin", "country": "Germany", "lat": 52.52001, "lng": 13.40495, "info": "<div class='caption'><h3>Berlin</h3><p class='text-justify'>Fantastic and sad at the same time. Berlin is full of WWII monuments, memorials and museums.</p><p class='text-justify'><strong>Cool things I did here:</strong> Holocaust Memorial, Reichstag, Brandenburg Gate, Berlin Wall, Checkpoint Charlie, Alexanderplatz, Berliner Dom</p></div>"},
    {"name": "Amsterdam", "country": "Netherlands", "lat": 52.37022, "lng": 4.89517, "info": "<div class='caption'><h3>Amsterdam</h3><p class='text-justify'>A mix of a calm and beautiful city divided by canals with drugs and sex</p><p class='text-justify'><strong>Cool things I did here:</strong> 'I amsterdam' sign, Red Light District, Heineken Experience</p></div>"},
    {"name": "Brussels", "country": "Belgium", "lat": 50.85034, "lng": 4.35171, "info": "<div class='caption'><h3>Brussels</h3><p class='text-justify'>Capital of Belgium and home of 'french' fries, waffles, the saxophone, The Son of Man Painting and Jean-Claude Van Damme</p><p class='text-justify'><strong>Cool things I did here:</strong> Manneken Pis, Delirium Bar, Atomium, Grand-Place, Tintin art mural</p></div>"},
    {"name": "London", "country": "England", "lat": 51.50735, "lng": -0.12776, "info": "<div class='caption'><h3>London</h3><p class='text-justify'>Capital of England, London is the most richest and populous city in the UK. Well, it's London.</p><p class='text-justify'><strong>Cool things I did here:</strong> Big Ben, Tower Bridge, Camden Town, London Eye, Trafalgar Square, Natural History Museum, Abbey Road, Piccadilly Circus, Greenwich Park, Buckingham Palace, Change of Guards</p></div>"},
    {"name": "Marrakech", "country": "Morocco", "lat": 31.63000, "lng": -8.00889, "info": "<div class='caption'><h3>Marrakech</h3><p class='text-justify'>Capital of Morocco, Marrakech is one of the most populous city in the country. The difference from the Europe is intensive, especially because of its poverty.</p><p class='text-justify'><strong>Cool things I did here:</strong> Jemaa El-Fnaa, Palais Bahia, Palais Badi, Tombeaux Saadian, Kasbah, Atlas Mountains</p></div>"},
    {"name": "Merzouga", "country": "Morocco", "lat": 31.09917, "lng": -4.01167, "info": "<div class='caption'><h3>Merzouga</h3><p class='text-justify'>Very close to Algeria, Merzouga is the city that the adventurers use as base when they camp in the desert.</p><p class='text-justify'><strong>Cool things I did here:</strong> Camping in the Sahara Desert, Camel riding</p></div>"},
    {"name": "Essaouira", "country": "Morocco", "lat": 31.50849, "lng": -9.75950, "info": "<div class='caption'><h3>Essaouira</h3><p class='text-justify'>Beach city in western Morocco, Essaouira is known by its Portuguese fortress that encloses the city.</p><p class='text-justify'><strong>Cool things I did here:</strong> Beach, Fortress</p></div>"},
    {"name": "Oslo", "country": "Norway", "lat": 59.91387, "lng": 10.75225, "info": "<div class='caption'><h3>Oslo</h3><p class='text-justify'>Oslo, a city rich but also very expensive, is the capital or Norway, the country that has the highest Human Development Index (HDI) in the world.</p><p class='text-justify'><strong>Cool things I did here:</strong> Walked on a frozen lake, Opera House, Greenhouse</p></div>"},
    {"name": "Stockholm", "country": "Sweden", "lat": 59.32932, "lng": 18.06858, "info": "<div class='caption'><h3>Stockholm</h3><p class='text-justify'>In contrast with its neighbor Oslo, Stockholm is also expensive but poorer. The capital of Sweden is considered the 'Silicon Valley' of Europe.</p><p class='text-justify'><strong>Cool things I did here:</strong> Drank a white hot chocolate</p></div>"},
    {"name": "Warsaw", "country": "Poland", "lat": 52.22968, "lng": 21.01223, "info": "<div class='caption'><h3>Warsaw</h3><p class='text-justify'>Capital of Poland, Warsaw is a modern city but still preserves its Old Town, which has been placed on the UNESCO's list of World Heritage Sites.</p><p class='text-justify'><strong>Cool things I did here:</strong> National Stadium Warsaw</p></div>"},
    {"name": "Krakow", "country": "Poland", "lat": 50.06465, "lng": 19.94498, "info": "<div class='caption'><h3>Krakow</h3><p class='text-justify'>Second largest city in Poland, Krakow is normally visited by people who go to Auschwitz. But besides the concentration camp, Krakow is a beautiful city listed on UNESCO World Heritage Sites and hometown of John Paul II.</p><p class='text-justify'><strong>Cool things I did here:</strong> Auschwitz concentration camp, first Caipirinha in Europe</p></div>"},
    {"name": "Prague", "country": "Czech Republic", "lat": 50.07554, "lng": 14.43780, "info": "<div class='caption'><h3>Prague</h3><p class='text-justify'>Capital and largest city in Czech Republic, Prague is also the historical capital of Bohemia and 5th most visited European city.</p><p class='text-justify'><strong>Cool things I did here:</strong> Dancing House, Astronomical Clock</p></div>"},
    {"name": "Vienna", "country": "Austria", "lat": 48.20817, "lng": 16.37382, "info": "<div class='caption'><h3>Vienna</h3><p class='text-justify'>Vienna is the capital and largest city of Austria. It is said to be 'The City of Dreams' because it is the hometown of Sigmund Freud, world's first psycho-analyst.</p><p class='text-justify'><strong>Cool things I did here:</strong> -</p></div>"},
    {"name": "Bratislava", "country": "Slovakia", "lat": 48.14589, "lng": 17.10714, "info": "<div class='caption'><h3>Bratislava</h3><p class='text-justify'>Small city with 500.000 habitants but still the largest city and capital of Slovakia. Unfortunately, Bratislava had its tourism declined by 75% after the movie 'The Hostel'.</p><p class='text-justify'><strong>Cool things I did here:</strong> 85 meters deep well</p></div>"},
    {"name": "Budapest", "country": "Hungary", "lat": 47.49791, "lng": 19.04023, "info": "<div class='caption'><h3>Budapest</h3><p class='text-justify'>Two cities Buda and Pest separated by the river Danube. Budapest became a single city in 1873. Now, it is the capital of Hungary, listed on the World Heritage Site and cited as one of the most beautiful cities in Europe.</p><p class='text-justify'><strong>Cool things I did here:</strong> Segway, Cat Cafe, Thermal Water Pools</p></div>"},
    {"name": "Munich", "country": "Germany", "lat": 48.13513, "lng": 11.58198, "info": "<div class='caption'><h3>Munich</h3><p class='text-justify'>Third largest city in Germany, after Berlin and Hamburg. Munich is home of the Oktoberfest.</p><p class='text-justify'><strong>Cool things I did here:</strong> Allianz Arena, Mini Oktoberfest</p></div>"},
    {"name": "Athens", "country": "Greece", "lat": 37.98392, "lng": 23.72936, "info": "<div class='caption'><h3>Athens</h3><p class='text-justify'>Capital and largest city in Greece, Athens is one of the oldest city in the world. It is a centre of arts and philosophy home of Plato and Aristotle.</p><p class='text-justify'><strong>Cool things I did here:</strong> Acropolis, Parthenon, Odeon of Herodes, Temple of Olympian Zeus, Panathenaic Stadium, Mount Lycabettus, Temple of Hephaustos, Ancient Agora, Filopappos Hill</p></div>"},
    {"name": "Lisbon", "country": "Portugal", "lat": 38.72225, "lng": -9.13934, "info": "<div class='caption'><h3>Lisbon</h3><p class='text-justify'>Capital of Portugal, Lisbon is the 'Brazil in Europe'. Its old and small streets come to life at night with live music and covers. Food and wines are delicious and must be tasted as tourist attraction.</p><p class='text-justify'><strong>Cool things I did here:</strong> Bairro Alto, Praça do Comércio, Padrão dos Descobrimentos, Torre de Belém, Castelo de São Jorge, rent a car</p></div>"},
    {"name": "Sintra", "country": "Portugal", "lat": 38.80287, "lng": -9.38166, "info": "<div class='caption'><h3>Sintra</h3><p class='text-justify'>Small and medieval town part of the 'Grande Lisboa', Sintra has one of the most beautiful and preserved castles of Europe.</p><p class='text-justify'><strong>Cool things I did here:</strong> Castelo dos Mouros</p></div>"},
    {"name": "Cabo da Roca", "country": "Portugal", "lat": 38.78028, "lng": -9.49889, "info": "<div class='caption'><h3>Cabo da Roca</h3><p class='text-justify'>Cabo da Roca is the westernmost extent of continental Europe.</p><p class='text-justify'><strong>Cool things I did here:</strong> Westernmost extent of continental Europe</p></div>"},
    {"name": "Faro", "country": "Portugal", "lat": 37.01935, "lng": -7.93044, "info": "<div class='caption'><h3>Faro</h3><p class='text-justify'>Part of the Algarve region, it is the southernmost city in Portugal.</p><p class='text-justify'><strong>Cool things I did here:</strong> Went to the beach</p></div>"},
    {"name": "Óbidos", "country": "Portugal", "lat": 39.36042, "lng": -9.15820, "info": "<div class='caption'><h3>Óbidos</h3><p class='text-justify'>Really small city surrounded by walls of an old castle</p><p class='text-justify'><strong>Cool things I did here:</strong> Óbidos Castle</p></div>"},
    {"name": "Porto", "country": "Portugal", "lat": 41.15794, "lng": -8.62911, "info": "<div class='caption'><h3>Porto</h3><p class='text-justify'>Second largest city in Portugal, Porto is the home of the port wine</p><p class='text-justify'><strong>Cool things I did here:</strong> Best cheese I've ever had</p></div>"},
    {"name": "Guimarães", "country": "Portugal", "lat": 41.44253, "lng": -8.29179, "info": "<div class='caption'><h3>Guimarães</h3><p class='text-justify'>City in the district of Braga, Guimarães was the birthplace of the first king of Portugal, Afonso I</p><p class='text-justify'><strong>Cool things I did here:</strong> Paço do Duque de Bragança</p></div>"},
    {"name": "Derby", "country": "England", "lat": 52.92253, "lng": -1.47462, "info": "<div class='caption'><h3>Derby</h3><p class='text-justify'>Derby is home of the first factory in the world and considered the birthplace of the Industrial Revolution</p><p class='text-justify'><strong>Cool things I did here:</strong> Download Festival</p></div>"},
    {"name": "Bristol", "country": "England", "lat": 51.45451, "lng": -2.58791, "info": "<div class='caption'><h3>Bristol</h3><p class='text-justify'>Sixth biggest city in England, Bristol is built around the River Avon. It is also know by its hot air balloons.</p><p class='text-justify'><strong>Cool things I did here:</strong> Suspension Bridge</p></div>"},
    {"name": "Southport", "country": "England", "lat": 53.64571, "lng": -3.01011, "info": "<div class='caption'><h3>Southport</h3><p class='text-justify'>Seaside town in the northeast of England. Has a small amusement park called Pleasureland.</p><p class='text-justify'><strong>Cool things I did here:</strong> First beach in England</p></div>"},
    {"name": "Blackpool", "country": "England", "lat": 53.81751, "lng": -3.03567, "info": "<div class='caption'><h3>Blackpool</h3><p class='text-justify'>Another seaside town in the northeast of England, noted for its political autonomy, independent of Lancashire county. Main attractions are: Blackpool Zoo, Illumination and Tower, Pleasure Beach and Winter Gardens.</p><p class='text-justify'><strong>Cool things I did here:</strong> Blackpool Pleasure Beach</p></div>"},
    {"name": "Salford", "country": "England", "lat": 53.48752, "lng": -2.29013, "info": "<div class='caption'><h3>Salford</h3><p class='text-justify'>City part of Greater Manchester, covers an area that includes Eccles, Swinton and Pendlebury.</p><p class='text-justify'><strong>Cool things I did here:</strong> Work in the BBC Sport in MediaCityUK</p></div>"},
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
    {"name": "Walgrave", "country": "England", "lat": 52.34147, "lng": -0.82277},
    {"name": "Bolton", "country": "England", "lat": 53.57686, "lng": -2.42822},
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

  // $("#titlePlaces").text("Places I've been (" + (places.length+1) + ")");
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

    if($("#"+places[i].country.replace(" ", "_")).length == 0 ){
      $("#accordion").append('<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+collapse+'"><h4 id="'+places[i].country.replace(" ", "_")+'">'+places[i].country+'</h4></a><div id="collapse'+collapse+'" class="panel-collapse collapse"><div class="cities" id="cities'+places[i].country.replace(" ", "_")+'"><p>'+places[i].name+'</p></div></div>');
      collapse++;
    } else {
      $("#cities"+places[i].country.replace(" ", "_")).append('<p>'+places[i].name+'</p>');
    }
  }

  $("#titlePlaces").text("Places I've been (" + ($(".cities").length) + ")");
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