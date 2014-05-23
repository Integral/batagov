$(function(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  var doc = $(document);

  // top link
  $('#top').click(function(e){
    $('body').animate({ scrollTop: 0 }, 'fast');
    e.preventDefault();
  });

  // scrolling links
  var added;
  doc.scroll(function(e){
    if (doc.scrollTop() > 5) {
      if (added) return;
      added = true;
      $('body').addClass('scroll');
    } else {
      $('body').removeClass('scroll');
      added = false;
    }
  })
})

$(window).load(function(){
    $('#l10n img').BlackAndWhite({
        hoverEffect : true,
    });
});