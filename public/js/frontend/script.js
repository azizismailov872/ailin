$(document).ready(function () {

	$('.nav-button').on('click', function () {
		$('.animated-icon1').toggleClass('open');
		$('.navbar-toggler').toggleClass('whiteBorder');
		$( 'div.collapse-nav' ).toggle("slide",400).fade();
	});
});
