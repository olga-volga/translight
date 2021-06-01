$(document).ready(function(){
	$('.rent-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.rent-arrows'),
		responsive: [
			{
				breakpoint: 768.98,
				settings: {
					slidesToShow: 1,
					appendArrows: $('.rent-slider')
					//centerMode: false,
					//variableWidth: false
				}
			}
		]
	});
});