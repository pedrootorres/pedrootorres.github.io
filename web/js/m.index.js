var first = true;

$("#menuIcon").click(function () {
	if(first){
		$("#menu").slideDown();
		first = false;
	} else {
		$("#menu").slideUp();
		first = true;
	}
	
});