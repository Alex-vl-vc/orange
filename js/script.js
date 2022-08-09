$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		if ($('.header__menu').click(function (e) {
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		})
		);
	});

	$('.cards__slider').slick({
		slidesToShow: 4,
		variableWidth: true
	});

	$('.reviews_cards__slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		centerMode: true
	});
	$('.cards__slider,.reviews_cards__slider').slick('setPosition');
});


