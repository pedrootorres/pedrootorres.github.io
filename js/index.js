var typingTimer;
var interval = 1000;
$("#busca").keyup(function() {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(suggestMovies, interval);
});

$("#busca").keydown(function() {
	clearTimeout(typingTimer);
});

function suggestMovies () {
	var text = $("#busca").val();
	
	var http = new XMLHttpRequest();
	http.open("GET", "http://www.omdbapi.com/?s=" + text, false);
	http.send(null);

	var data = http.responseText;
	var suggestions = eval("(" + data + ")");

	$("#sugestoes").empty();
	for (var i = 0; i < suggestions.Search.length; i++) {
		$("#sugestoes").append("<a href='#' onclick='addMovie(this)' class='sugestao'><p id=sugestao" + i + ">" + suggestions.Search[i].Title + "</p></a>");
	};
};

function addMovie(me) {
	var movieName = $(me).first("p").text();
	
	$.ajax({
		url: "http://www.omdbapi.com/?t=" + movieName,
		
		dataType: 'jsonp',

		success: function(movie) {
			$("#filmes").append("<img src=" + movie.Poster + " class='filme'>");
		}
	});

	// var http = new XMLHttpRequest();
	// http.open("GET", "http://www.omdbapi.com/?t=" + movieName, false);
	// http.send(null);

	// var data = http.responseText;
	// var movie = eval("(" + data + ")");

	// $("#filmes").append("<img src=" + movie.Poster + " class='filme'>");
}