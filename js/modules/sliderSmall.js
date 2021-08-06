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

export default sliderSmall;