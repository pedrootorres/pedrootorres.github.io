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
		$("#sugestoes").append("<a href='' class='sugestao'><p id=sugestao" + i + ">" + suggestions.Search[i].Title + "</p></a>");
	};
};