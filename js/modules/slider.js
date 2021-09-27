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

export default slider;