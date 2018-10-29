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

(function ($) {

  // Setup variables
  $window = $(window);
  $slide = $('.frame');
  $body = $('body');

  //FadeIn all sections   
  $body.imagesLoaded(function () {
    setTimeout(function () {

      // Resize sections
      adjustWindow();

      // Fade in sections
      $body.removeClass('loading').addClass('loaded');

    }, 800);
  });

  function adjustWindow() {

    // Init Skrollr
    var s = skrollr.init({
      forceHeight: false
    });

    // Get window size
    winH = $window.height();

    /* Keep minimum height 550
    if (winH <= 550) {
      winH = 550;
    }
    */

    // Resize our slides
    $slide.height(winH * .7);

    // Refresh Skrollr after resizing our sections
    s.refresh($('.frame'));

  }

})(jQuery);