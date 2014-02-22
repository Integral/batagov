$( document ).ready(function() {
	var hash = $(location).attr('hash').replace('#','');
	if(hash == 'all' || hash == 'composer' || hash == 'performer') {
		$('a[data-menu=' + hash + ']').parent().addClass('active');
	} else {
		$('a[data-menu=all]').parent().addClass('active');
	}
	$('dl.sub a').on('click', function() {
		$("dl.sub dd.active").removeClass("active");
		$(this).parent().addClass('active');
		var filter = $(this).data("menu");
		if(filter == 'all') {
			$('a.item, h2').toggle(true);
		} else {
    		$('a.item:not(.' + filter + '), h2:not(.' + filter + ')').toggle(false);
    		$('a.' + filter + ', h2.' + filter).toggle(true);
    	}
    });
});