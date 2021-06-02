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

	const arrowParent = document.querySelector('.arrows'),
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
	});

});