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