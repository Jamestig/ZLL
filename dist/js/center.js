// Hide elements above header line

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + 100;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.frame_content').each(function() {
    if ($(this).isInViewport()) {
      $(this).find('p, hr, h2').css('opacity', 0);
    } else {
      $(this).find('p, hr, h2').css('opacity', 1);
    }
  });
});

// Get vertical height from window

let vh = window.innerHeight * 0.01;
let innerHeight = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${vh}px`);
console.log("vh unit = " + vh);
console.log("window inner height = " + innerHeight);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	let newHeight = window.innerHeight;
	if (newHeight > innerHeight) {
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	console.log("resize vh unit = " + vh);
	console.log("window new height = " + newHeight);
});

// Media Query function

var orientation = window.screen.orientation;
console.log(orientation);