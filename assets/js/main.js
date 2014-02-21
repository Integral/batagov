$( document ).ready(function() {
	$('dl.sub a').on('click', function(e) {
		console.log(this);
		console.log(e);
	});
	$(window).on('hashchange', function() {
		if(window.location.hash == '#all') {
			$('a.item').toggle(true);
		} else {
    		$('a.item:not(' + window.location.hash.replace('#', '.') + ')').toggle(false);
    		$(window.location.hash.replace('#', '.')).toggle(true);
    	}
    });
});