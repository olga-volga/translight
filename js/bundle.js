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

/***/ "./js/modules/sliderBig.js":
/*!*********************************!*\
  !*** ./js/modules/sliderBig.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderBig() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderBig);

/***/ }),

/***/ "./js/modules/sliderSmall.js":
/*!***********************************!*\
  !*** ./js/modules/sliderSmall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderSmall() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSmall);

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
/* harmony import */ var _modules_sliderBig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderBig */ "./js/modules/sliderBig.js");
/* harmony import */ var _modules_sliderSmall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderSmall */ "./js/modules/sliderSmall.js");







window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__.default)();
	(0,_modules_sliderBig__WEBPACK_IMPORTED_MODULE_2__.default)();
	(0,_modules_sliderSmall__WEBPACK_IMPORTED_MODULE_3__.default)();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map