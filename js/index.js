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
				$("#sugestoes").append("<a href='#' onclick='addMovie(this)' class='sugestao'><p id=" + i + " poster='" + suggestions.movies[i].posters.original + "' runtime='" + suggestions.movies[i].runtime + "'>" + suggestions.movies[i].title + "</p></a>");
			};
		}
	});
};

function addMovie(me) {
	var movieName = $(me).first("p").text();
	var position = me.getElementsByTagName('p')[0].id;
	var poster = $(me.getElementsByTagName('p')[0]).attr("poster");
	var runtime = $(me.getElementsByTagName('p')[0]).attr("runtime");

	calculateTime(runtime);

	$("#filmes").append("<img src=" + poster + " class='filme'>");
};

function calculateTime(runtime) {
	console.log(totalTime);
	totalTime = totalTime + parseInt(runtime);
	console.log(totalTime);

	var hours = Math.floor(totalTime / 60);
	var days = Math.floor(hours / 24);

	hours = hours % 24;
	var minutes = totalTime % 60;

	$("#dias").text(days);
	$("#horas").text(hours);
	$("#minutos").text(minutes);
};