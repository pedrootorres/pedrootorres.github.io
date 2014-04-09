var totalTime = 0;

var typingTimer;
var interval = 500;
$("#busca").keyup(function() {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(suggestMovies, interval);
});

$("#busca").keydown(function() {
	clearTimeout(typingTimer);
});

function suggestMovies () {
	var text = $("#busca").val();
	
	$("#sugestoes").empty();
	$.ajax({
		url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=qv67jaxpgqksy7cfvmcryhau&q=" + text,

		dataType: 'jsonp',

		success: function(suggestions) {
			for (var i = 0; i < suggestions.movies.length && i < 4; i++) {
				$("#sugestoes").append("<a href='#' onclick='addMovie(this)' class='sugestao'><p id=" + i + ">" + suggestions.movies[i].title + "</p></a>");
			};
		}
	});
};

function addMovie(me) {
	var movieName = $(me).first("p").text();
	var position = me.getElementsByTagName('p')[0].id;

	var runtime = 0;
	$.ajax({
		url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=qv67jaxpgqksy7cfvmcryhau&q=" + movieName,

		dataType: 'jsonp',

		success: function(movies) {
			$("#filmes").append("<img src=" + movies.movies[position].posters.original + " class='filme'>");
			runtime = movies.movies[position].runtime;

			calculateTime(runtime);
		}
	});
};

function calculateTime(runtime) {
	totalTime += runtime;

	var hours = Math.floor(totalTime / 60);
	var days = Math.floor(hours / 24);

	hours = hours % 24;
	var minutes = totalTime % 60;

	$("#dias").text(days);
	$("#horas").text(hours);
	$("#minutos").text(minutes);
};