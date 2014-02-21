$( document ).ready(function() {
	$(window).on('hashchange', function() {
		if(window.location.hash == '#all') {
			$('a.item').toggle(true);
		} else {
    		$('a.item:not(' + window.location.hash.replace('#', '.') + ')').toggle(false);
    		$(window.location.hash.replace('#', '.')).toggle(true);
    	}
    });
});