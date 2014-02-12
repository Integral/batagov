$( "dl.sub dd a" ).on( "click", function() {
	console.log('click');
	if (window.location.hash) {
    	$(window.location.hash.replace('#', '.')).toggle(false);
	}
});