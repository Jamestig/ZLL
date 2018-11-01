$(document).ready(function () {

	var contentTop = $('.frame_content').offset().top;
	$(window).on('scroll', function () {
		$('.frame_content').each(function () {
			if ($(this).scrollTop() >= contentTop) {
				console.log('top');
			}
		})

	});
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

	var mediaQueryList = window.matchMedia("(orientation: portrait)"); // Create the query list.
	function handleOrientationChange(mql) {

	} // Define a callback function for the event listener.
	mediaQueryList.addListener(handleOrientationChange); // Add the callback function as a listener to the query list.

	handleOrientationChange(mediaQueryList); // Run the orientation change handler once.

	function handleOrientationChange(evt) {
		if (evt.matches) {
			/* The viewport is currently in portrait orientation */
		} else {
			/* The viewport is currently in landscape orientation */
		}
	}

});