$( document ).ready(function() {
	if (window.location.hash) {
    	$(window.location.hash.replace('#', '.')).toggle(false);
	}
});