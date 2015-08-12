// https://soundcloud.com/bnglory09/why-do-we-fall-motivational -> songs
var playQuote = function(quote, author) {
	var audio = new Audio();
	console.log(author);

	audio.src = "https://translate.google.pl/translate_tts?ie=UTF-8&tl=pt-br&q=" + quote + "&total=1&idx=0&client=t&prev=input";
	audio.play();

	$("body").append('<iframe id="backgroundSong" width="0" height="0" src="https://youtube.com/embed/8-wIg90lagk?start=50&autoplay=1"></iframe>');

	audio.addEventListener("ended", function() {
		var audio2 = new Audio();
		audio2.src = "https://translate.google.pl/translate_tts?ie=UTF-8&tl=pt-br&q=" + author + "&total=1&idx=0&client=t&prev=input";
		audio2.play();
	});
}

if(window.location.href.indexOf("?quote=") == -1) {
	$("#quoteForm").show();
} else {
	var url = window.location.href;
	var quote = url.substring(url.indexOf("?quote=") + 7);
	var author = url.substring(url.indexOf("&surname=") + 9, url.indexOf("&name")) + ". " + url.substring(url.indexOf("&name=") + 6);

	$("#quoteReady").show();
	playQuote(quote, author);
}

$("#quoteIt").click(function(e) {
	e.preventDefault();

	var quote = $("#quote").val();
	var author = $("#author").val().split(' ');

	var name = author[0];
	var surname = author[author.length-1];

	window.location.replace(window.location.href + "?quote=" + quote + "&surname=" + surname + "&name=" + name);
});