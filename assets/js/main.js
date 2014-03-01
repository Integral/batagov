$( document ).ready(function() {
	var hash = $(location).attr('hash').replace('#','');
	if(hash == 'composer' || hash == 'performer') {
		$('a[data-menu=".' + hash + '"]').parent().addClass('active');
	} else {
		$('a[data-menu="*"]').parent().addClass('active');
	}
});