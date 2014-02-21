$( document ).ready(function() {
	$(window).on('hashchange', function() {
    	$(window.location.hash.replace('#', '.')).toggle('slow');
    });
});