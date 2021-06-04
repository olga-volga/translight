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

	// Slider

	/*const arrowParent = document.querySelector('.arrows'),
		  arrowPrev = arrowParent.querySelector('.arrow--prev'),
		  arrowNext = arrowParent.querySelector('.arrow--next'),
		  sliderItem = document.querySelectorAll('.slider__item');

	let index = 0;

	function hideSlide() {
		sliderItem.forEach(item => {
			item.style.display = 'none';
		});
	}

	function showSlide(i = 0) {
		hideSlide();
		sliderItem[i].style.display = 'block';
		sliderItem[i + 1].style.display = 'block';
	}

	hideSlide();
	showSlide();

	arrowParent.addEventListener('click', (e) => {

		if (e.target && e.target.classList.contains('arrow--next')) {
			arrowPrev.style.opacity = '1';
			if (index < sliderItem.length - 1) {
				index++;
				showSlide(index);
			} else if (index === sliderItem.length - 1) {
				e.target.style.opacity = '.3';
			}
		} else if (e.target && e.target.classList.contains('arrow--prev')) {
			arrowNext.style.opacity = '1';
			if (index > 0) {
				index--;
				showSlide(index);
			} else if (index === 0) {
				e.target.style.opacity = '.3';
			}
		}
	});*/

	/*const arrowPrev = document.querySelector('.arrow--prev'),
		  arrowNext = document.querySelector('.arrow--next'),
		  sliderItem = document.querySelectorAll('.slider__item');

	let index = 1;

	showSlide(index);

	function showSlide(n) {
		console.log(n);
		if (n > sliderItem.length) {
			index = 1;
			
		}

		if (n < 1) {
			index = sliderItem.length;
		}
		hideSlide();
		sliderItem[index - 1].style.display = 'block';
	}

	function hideSlide() {
		sliderItem.forEach(item => {
			item.style.display = 'none';
		});
	}

	function plusSlide(n) {
		showSlide(index += n);
	}

	arrowNext.addEventListener('click', () => {
		plusSlide(1);
	});

	arrowPrev.addEventListener('click', () => {
		plusSlide(-1);
	});*/

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

});