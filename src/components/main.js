if (window.location.pathname !== '/') {
	$('header').addClass('static');
	$('main').css('padding-top', $('header').outerHeight());
}

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

	// stuff
	$('.lien-he-ngay p, .lien-he-ngay img').click(function () {
		$('.form-lien-he-ngay').fadeToggle('fast')
	})

	// hamburger click
	// $('header .hamburger').on('click', function () {
	// 	$(this).siblings('.header-nav').slideToggle();
	// })
	$('header .hamburger').on('click', function () {
		$('.nav-mobile').toggleClass('active');
	})

	// Slider
	let headerBanner = new Swiper('.header-banner .swiper-container', {
		loop: true,
		speed: 2000,
		lazy: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.header-banner .pagination',
			clickable: true
		},
	});

	var camNhanHocVien = new Swiper('.cam-nhan .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		speed: 1900,
		breakpoints: {
			575.97: {
				slidesPerView: 1
			}
		},
		pagination: {
			el: '.cam-nhan .pagination',
			clickable: true,
		},
	});

	// Event hover silde CamNhanHocVien
	$('.cam-nhan figcaption').mouseover(function () {
		camNhanHocVien.autoplay.stop();
	});
	$('.cam-nhan figcaption').mouseleave(function () {
		camNhanHocVien.autoplay.start();
	});


	// stuff-hoi-dap
	$('.toggle-stuff').click(function () {
		$('.stuff-hoi-dap').toggleClass('active')
	})

	$('.hoi-dap .item-title').click(function () {
		$(this).parent().toggleClass('active');
		$(this).siblings('.item-content').slideToggle();
	})

	var tinTucIndex = new Swiper('.tin-tuc .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1900,
		breakpoints: {
			767.97: {
				slidesPerView: 2
			},
			575.97: {
				slidesPerView: 2,
				spaceBetween: 15
			}
		},
		pagination: {
			el: '.tin-tuc .pagination',
			clickable: true,
		},
	});
	var lienKetIndex = new Swiper('.lien-ket .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		speed: 1900,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			991.97: {
				slidesPerView: 4
			},
			767.97: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			320: {
				slidesPerView: 1
			}
		},
		pagination: {
			el: '.lien-ket .pagination',
			clickable: true,
		},
	});
	var boSuuTap = new Swiper('.bo-suu-tap .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 45,
		speed: 1900,
		breakpoints: {
			991.97: {
				slidesPerView: 2
			},
			575.97: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		},
		pagination: {
			el: '.bo-suu-tap .pagination',
			clickable: true,
		},
	});
});