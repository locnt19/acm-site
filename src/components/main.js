$(document).ready(function () {
	// back-2-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('header').addClass('on-scroll');
		} else {
			$('header').removeClass('on-scroll');
		}
		if ($(this).scrollTop() > 100) {
			$('.btn-back-2-top').fadeIn()
		} else $('.btn-back-2-top').fadeOut()
	})

	$('.btn-back-2-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})

	$('.d-menu a').each(function () {
		$(this).on('click', function (e) {
			e.preventDefault()
			const target = $(this).attr('href');
			const position = $(target).offset().top - $('header').outerHeight();
			$('html, body').animate({
				scrollTop: position
			}, 1000)
		})
	})

});