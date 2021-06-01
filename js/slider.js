$(document).ready(function(){
	$('.projects-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.arrows'),
		responsive: [
			{
				breakpoint: 768.98,
				settings: {
					slidesToShow: 1,
					appendArrows: $('.projects-slider')
					//centerMode: false,
					//variableWidth: false
				}
			}
		]
	});
});