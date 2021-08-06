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

export default sliderBig;