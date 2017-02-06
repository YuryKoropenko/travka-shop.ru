$(document).ready(function() {
/*маска*/
	$('.s-form__phone').mask('(999) 999-9999');

/**/
	$('.nav__popup .fa').on('click', function() {
		$('.nav').slideToggle();
	});
});