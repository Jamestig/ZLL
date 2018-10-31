$(document).ready(function () {

	$(window).scroll(function () {

		$('.frame').each(function () {
			var topHalf = $(window).height() * 0.2;
			console.log(topHalf);
			if ($(this).offset().top > topHalf) {
				console.log($(this));
			}
		});
	});

});