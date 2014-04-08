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
	
	$.ajax({
		url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=qv67jaxpgqksy7cfvmcryhau&q=" + text,

		dataType: 'jsonp',

		success: function(suggestions) {
			for (var i = 0; i < suggestions.movies.length; i++) {
				$("#sugestoes").append("<a href='#' onclick='addMovie(this)' class='sugestao'><p id=" + i + ">" + suggestions.movies[i].title + "</p></a>");
			};
		}
	});
};

function addMovie(me) {
	var movieName = $(me).first("p").text();
	
	$.ajax({
		url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=qv67jaxpgqksy7cfvmcryhau&q=" + movieName,

		dataType: 'jsonp',

		success: function(movies) {
			console.log(movies.movies[0]);
			$("#filmes").append("<img src=" + movies.movies[0].posters.original + " class='filme'>");
		}
	});
};