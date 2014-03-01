$( document ).ready(function() {
	var hash = $(location).attr('hash').replace('#','');
	if(hash == 'composer' || hash == 'performer') {
		$('a[data-menu=' + hash + ']').parent().addClass('active');
		$('a.item:not(.' + hash + '), h2:not(.' + hash + ')').toggle(false);
    	$('a.' + hash + ', h2.' + hash).toggle(true);
	} else {
		$('a[data-menu=*]').parent().addClass('active');
	}
});