$("#options i").hover(function() {
	$(this).stop().animate({
		"width": "90px",
		"padding-left": "40px"
	}, 150);
}, function() {
	$(this).stop().animate({
		"width": "50px",
		"padding-left": "0px"
	}, 150);
});