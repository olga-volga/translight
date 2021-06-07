"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu
	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');
	
	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', () => {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	});

	//Tabs
	const tabsParent = document.querySelector('.catalog-body__headings'),
		  tabs = tabsParent.querySelectorAll('.catalog-heading'),
		  tabsContent = document.querySelectorAll('.body-products');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		});
		tabs.forEach(item => {
			item.classList.remove('catalog-heading__active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('catalog-heading__active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		if (event.target && event.target.classList.contains('catalog-heading')) {
			tabs.forEach((item, i) => {
				
				if (event.target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});	
		}
	});

	// Big Slider

	const arrowPrev = document.querySelector('.arrow--prev'),
		  arrowNext = document.querySelector('.arrow--next'),
		  sliderItem = document.querySelectorAll('.slider__item'),
		  slidesWrapper = document.querySelector('.projects-slider'),// обертка слайдера
		  slidesField = document.querySelector('.projects-slider__inner'),// полоса со всеми слайдами
		  slidesShownWidth = window.getComputedStyle(slidesWrapper).width;// ширина видимой части со слайдами для показа

	let slideWidth,// задаем ширину каждого слайда как половину от видимой части слайдера
		slideIndex = 1,
		offset = 0;// величина смещения слайдов при прокрутке

	if (document.documentElement.clientWidth > 991.98) {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2) / 2;
	} else {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2);
	}

	slidesField.style.width = 100 * sliderItem.length + '%';// задаем ширину полосы со всеми слайдами

	sliderItem.forEach(item => {
		item.style.width = slideWidth;
	});

	arrowNext.addEventListener('click', (e) => {
		if (offset == slideWidth * (sliderItem.length - 2)) {
			//offset = 0;
			e.target.style.opacity = '.3';
		} else {
			offset += slideWidth;
			arrowPrev.style.opacity = '1';
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
	});

	arrowPrev.addEventListener('click', (e) => {
		if (offset == 0) {
			//offset = slideWidth * (sliderItem.length - 1);
			e.target.style.opacity = '.3';
		} else {
			offset -= slideWidth;
			arrowNext.style.opacity = '1';
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
	});

	// Small Slider

	const rentArrowPrev = document.querySelector('.rent-arrow--prev'),
		  rentArrowNext = document.querySelector('.rent-arrow--next'),
		  rentSliderItem = document.querySelectorAll('.rent-slider__item');

	let index = 1;

	showSlide(index);

	function showSlide(n) {
		if (n > rentSliderItem.length) {
			index = 1;
		}
		if (n < 1) {
			index = rentSliderItem.length;
		}
		hideSlide();

		rentSliderItem[index - 1].style.display = 'block';

		setTimeout(() => {
			rentSliderItem[index - 1].style.opacity = '1';
		}, 0);
	}

	function hideSlide() {
		rentSliderItem.forEach(item => {
			item.style.display = 'none';
			item.style.opacity = '0';
		});
	}

	function plusSlide(n) {
		showSlide(index += n);
	}

	rentArrowNext.addEventListener('click', () => {
		plusSlide(1);
	});

	rentArrowPrev.addEventListener('click', () => {
		plusSlide(-1);
	});

});