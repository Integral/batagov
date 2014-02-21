$( document ).ready(function() {
	$('dl.sub a').on('click', function() {
		$("dl.sub dd.active").removeClass("active");
		$(this).parent().addClass('active');
		var filter = $(this).data("menu");
		if(filter == 'all') {
			$('a.item').toggle(true);
		} else {
    		$('a.item:not(.' + filter + ')').toggle(false);
    		$('a.' + filter).toggle(true);
    	}
    });
});