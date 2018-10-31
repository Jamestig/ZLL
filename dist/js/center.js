$(document).ready(function () {
	var windowHeight = $(window).height();
	var windowTop = windowHeight * 0.5;

  $(window).on('scroll', function () {
    $('.frame').each(function () {
			var thisTop = $(this).offset().top - $(window).scrollTop();

      if (thisTop > windowTop) {
				$(this).find('p').css('opacity', 0);
      } else {
				$(this).find('p').css('opacity', 1);
      }
    });
  });
});