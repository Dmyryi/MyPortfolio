document.addEventListener('DOMContentLoaded', function () {
	const textElement = document.querySelector('.typing-animation')
	const text = "I'm a web developer"
	let index = 0

	function typeText() {
		if (index < text.length) {
			textElement.innerHTML += text.charAt(index)
			index++
			setTimeout(typeText, 100) // Adjust typing speed here
		} else {
			setTimeout(() => {
				textElement.innerHTML = ''
				index = 0
				setTimeout(typeText, 500) // Pause before typing again
			}, 2000) // Pause before erasing
		}
	}

	typeText()
})
