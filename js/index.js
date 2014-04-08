// IMDb ID to Search
var imdbId = "tt1285016";

// Send Request
var http = new XMLHttpRequest();
http.open("GET", "http://www.omdbapi.com/?s=matrix", false);
http.send(null);

// Response to JSON
var omdbData = http.responseText;
var omdbJSON = eval("(" + omdbData + ")");

// Returns Movie Title

for (var i = 0; i < omdbJSON.Search.length; i++) {
	console.log(omdbJSON.Search[i].Title);
};

console.log(omdbJSON);


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
		$("#sugestoes").append("<p id=sugestao" + i + ">" + suggestions.Search[i].Title + "</p>");
	};
}