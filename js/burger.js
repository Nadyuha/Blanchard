window.addEventListener('DOMContentLoaded', function () {
	const menuBurger = document.querySelector('#burger__icon')
	if (menuBurger) {
		const menuBody = document.querySelector('#menu__body')
		menuBurger.addEventListener('click', function (e) {
			document.body.classList.toggle('_lock')
			menuBurger.classList.toggle('_active')
      document.querySelector('.nav').classList.toggle('_active-width')//add 2.06.2023
			menuBody.classList.toggle('_active')
		})
	}
})
