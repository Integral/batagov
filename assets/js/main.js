$( document ).ready(function() {
	$(window).on('hashchange', function() {
    	$('a.item:not(' + window.location.hash.replace('#', '.') + ')').toggle('slow');
    });
});