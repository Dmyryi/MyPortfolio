let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.list')

let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Function for next button
nextBtn.onclick = function () {
	moveSlider('next')
}

prevBtn.onclick = function () {
	moveSlider('prev')
}

function moveSlider(direction) {
	let sliderItems = slider.querySelectorAll('.list .item')
	let thumbnailItems = thumbnail.querySelectorAll('.item')

	if (direction === 'next') {
		sliderList.appendChild(sliderItems[0])
		thumbnail.appendChild(thumbnailItems[0])
		slider.classList.add('next')
	} else if (direction === 'prev') {
		sliderList.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0])
		thumbnail.insertBefore(
			thumbnailItems[thumbnailItems.length - 1],
			thumbnailItems[0]
		)
		slider.classList.add('prev')
	}

	setTimeout(() => {
		slider.classList.remove('next', 'prev')
	}, 500) // Adjust this timing to match your CSS animation duration
}
