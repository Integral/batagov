$( "dl.sub dd a" ).on( "click", function() {
	if (window.location.hash) {
    	$(window.location.hash.replace('#', '.')).toggle(false);
	}
});