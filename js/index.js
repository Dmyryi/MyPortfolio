let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.list')

let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

let sliderItems = sliderList.querySelectorAll('.list .item')

// Function for next button
nextBtn.onclick = function () {
	moveSlider('next')
}

prevBtn.onclick = function () {
	moveSlider('prev')
}

nextBtn.scroll = function () {
	moveSlider('next')
}
prevBtn.scroll = function () {
	moveSlider('prev')
}

changeColorPalette(sliderItems[0])

// Function to handle slider movement
function moveSlider(direction) {
	sliderItems = sliderList.querySelectorAll('.list .item')
	thumbnailItems = thumbnail.querySelectorAll('.thumbnail .item')

	if (direction === 'next') {
		sliderList.appendChild(sliderItems[0])
		thumbnail.appendChild(thumbnailItems[0])
		slider.classList.add('next')
	} else if (direction === 'prev') {
		sliderList.prepend(sliderItems[sliderItems.length - 1])
		thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
		slider.classList.add('prev')
	}

	slider.addEventListener(
		'animationend',
		function () {
			if (direction === 'next') {
				slider.classList.remove('next')
			} else {
				slider.classList.remove('prev')
			}

			// Update color palette after animation ends
			sliderItems = sliderList.querySelectorAll('.list .item') // Update sliderItems again
			changeColorPalette(sliderItems[0])
		},
		{ once: true }
	)
}

// Function to change color palette
function changeColorPalette(currentSlide) {
	let slideType = currentSlide
		.querySelector('.content .type')
		.innerText.toLowerCase()
	let root = document.documentElement

	console.log('Current Slide Type:', slideType) // Add this line

	switch (slideType) {
		case 'webstudio':
			root.style.setProperty('--main-bg-color', '#2196f3')
			root.style.setProperty('--button-hover-color', '#1976d2')
			break
		case 'filmoteka':
			root.style.setProperty('--main-bg-color', '#ff6b08')
			root.style.setProperty('--button-hover-color', '#ff6b08')
			break
		case 'artem sytnik':
			root.style.setProperty('--main-bg-color', '#4caf50')
			root.style.setProperty('--button-hover-color', '#388e3c')
			break
		default:
			console.warn('Unknown slide type:', slideType)
			break
	}
}

// Add wheel event listener for scrolling
