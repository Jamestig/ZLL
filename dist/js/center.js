$(document).ready(function () {
  var windowHeight = $(window).height(),
    gridTop = windowHeight * .00001,
    gridBottom = windowHeight * .99999;

  $(window).on('scroll', function () {
    $('.frame').each(function () {
      var thisTop = $(this).offset().top - $(window).scrollTop();

      if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
        $(this).css('opacity', 1);
      } else {
        $(this).css('opacity', .4);
      }
    });
  });
});

$(window).scroll(function() {
	
	$('.frame').each(function() {
		var topHalf = $(windowHeight / 2);
		if ( $(this).offset().top > topHalf) {
			console.log($(this));
		}
	});
});

$(function() {
  var eTop = $('.frame').offset().top; //get the offset top of the element
  log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

  $(window).scroll(function() { //when window is scrolled
		log(eTop - $(window).scrollTop());
		console.log(eTp)
  });
});