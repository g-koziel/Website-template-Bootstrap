document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navBar = document.querySelector('.navbar-collapse')
	const navLinks = document.querySelector('.navbar-nav')

	const addShadow = () => {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	const removeShowNav = () => {
		navBar.classList.remove('show') //można inaczej
	}
	window.addEventListener('scroll', addShadow)
	navLinks.addEventListener('click', removeShowNav) //można inaczej

	// navLinks.addEventListener('click', () => {
	//     if (navBar.classList.contains('show')) {
	//         navBar.classList.remove('show')
	//     }
	// })
})
