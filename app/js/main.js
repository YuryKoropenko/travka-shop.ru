$(document).ready(function() {
/*маска*/
	$('.s-form__phone').mask('(999) 999-9999');

/*Выпадающее меню*/
	$('.nav__popup .fa').on('click', function() {
		$('.nav').slideToggle();
	});

/*карточка*/
	$('.card__color-block-img-wp .card__color-block-img').on('click', function() {
		var at = $(this).attr('src');
		$('.card__top-left-img').attr('src', at);
	});

/*выстраивание блоков
	$('.r-content__prod-wp').hide();
	$('.r-content__tab-vid-item-first').on('click', function() {
		$('.r-content__tab-vid-item-last').removeClass('r-content__tab-vid-active');
		$(this).addClass('r-content__tab-vid-active');
		$('.r-content__prod-wp').hide();
		$('.r-content__tab-top-wp').fadeIn();
	});
	$('.r-content__tab-vid-item-last').on('click', function() {
		$('.r-content__tab-vid-item-first').removeClass('r-content__tab-vid-active')
		$(this).addClass('r-content__tab-vid-active')
		$('.r-content__tab-top-wp').hide();
		$('.r-content__prod-wp').fadeIn();
	});
*/

/*прижатие футера*/
		$(function() {
		$("body").css({padding:0,margin:0});
			var f = function() {
				$(".content").css({position:"relative"});
				var h1 = $("body").height();
				var h2 = $(window).height();
				var d = h2 - h1;
				var h = $(".content").height() + d;    
				var ruler = $("<div>").appendTo(".content");       
				h = Math.max(ruler.position().top,h);
				ruler.remove();    
				$(".content").height(h);
			};
			setInterval(f,1000);
			$(window).resize(f);
		f();
	});
});