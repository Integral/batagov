$( document ).ready(function() {
	$('dl.sub a').on('click', function(e) {
		var filter = $(this).data();
		if(filter == 'all') {
			$('a.item').toggle(true);
		} else {
    		$('a.item:not(.' + filter + ')').toggle(false);
    		$('a.' + filter).toggle(true);
    	}
    });
});