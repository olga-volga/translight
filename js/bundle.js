/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({prevSelector, nextSelector, sliderItemSelector, slidesWrapperSelector, slidesFieldSelector, slidesToShow}) {

	const arrowPrev = document.querySelector(prevSelector),
		  arrowNext = document.querySelector(nextSelector),
		  sliderItem = document.querySelectorAll(sliderItemSelector),
		  slidesWrapper = document.querySelector(slidesWrapperSelector),// обертка слайдера
		  slidesField = document.querySelector(slidesFieldSelector),// полоса со всеми слайдами
		  slidesShownWidth = window.getComputedStyle(slidesWrapper).width,// ширина видимой части со слайдами для показа
		  slidesNumber = slidesToShow;

	let slideWidth,
		slideIndex = 1,
		offset = 0;// величина смещения слайдов при прокрутке

	if (slidesNumber === 2) {
		if (document.documentElement.clientWidth > 991.98) {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2) / 2;// задаем ширину каждого слайда как половину от видимой части слайдера
		} else {
			slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2);// задаем ширину каждого слайда равной ширине видимой части слайдера
		}
	} else {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2);// задаем ширину каждого слайда равной ширине видимой части слайдера
	}
	console.log(+slidesShownWidth.slice(0, slidesShownWidth.length - 2));

	slidesField.style.width = 100 * sliderItem.length + '%';// задаем ширину полосы со всеми слайдами

	sliderItem.forEach(item => {
		item.style.width = slideWidth;
	});

	arrowPrev.addEventListener('click', (e) => {
		if (e.target.classList.contains('projects-arrow--prev')) {
			if (offset == 0) {
				//offset = slideWidth * (sliderItem.length - 1);
				e.target.style.opacity = '.3';
			} else {
				offset -= slideWidth;
				arrowNext.style.opacity = '1';
			}
		}
		if (e.target.classList.contains('rent-arrow--prev')) {
			if (offset == 0) {
				offset = slideWidth * (sliderItem.length - 1);
			} else {
				offset -= slideWidth;
			}
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
	});

	arrowNext.addEventListener('click', (e) => {
		if (e.target.classList.contains('projects-arrow--next')) {
			if (offset == slideWidth * (sliderItem.length - 2)) {
				//offset = 0;
				e.target.style.opacity = '.3';
			} else {
				offset += slideWidth;
				arrowPrev.style.opacity = '1';
			}
		}
		if (e.target.classList.contains('rent-arrow--next')) {
			if (offset == slideWidth * (sliderItem.length - 1)) {
				offset = 0;
			} else {
				offset += slideWidth;
			}
		}
		
		slidesField.style.transform = `translateX(-${offset}px)`;
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__.default)();
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)({
		prevSelector: '.projects-arrow--prev',
		nextSelector: '.projects-arrow--next',
		sliderItemSelector: '.slider__item',
		slidesWrapperSelector: '.projects-slider',
		slidesFieldSelector: '.projects-slider__inner',
		slidesToShow: 2
	});
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)({
		prevSelector: '.rent-arrow--prev',
		nextSelector: '.rent-arrow--next',
		sliderItemSelector: '.rent-slider__item',
		slidesWrapperSelector: '.rent-slider',
		slidesFieldSelector: '.rent-slider__inner',
		slidesToShow: 1
	});

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map