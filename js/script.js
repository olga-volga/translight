import menu from './modules/menu';
import tabs from './modules/tabs';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	menu();
	tabs();
	slider({
		prevSelector: '.projects-arrow--prev',
		nextSelector: '.projects-arrow--next',
		sliderItemSelector: '.slider__item',
		slidesWrapperSelector: '.projects-slider',
		slidesFieldSelector: '.projects-slider__inner',
		slidesToShow: 2
	});
	slider({
		prevSelector: '.rent-arrow--prev',
		nextSelector: '.rent-arrow--next',
		sliderItemSelector: '.rent-slider__item',
		slidesWrapperSelector: '.rent-slider',
		slidesFieldSelector: '.rent-slider__inner',
		slidesToShow: 1
	});

});