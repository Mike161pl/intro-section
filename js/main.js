const featuresMenuOpen = document.querySelector('.nav__items--item')
const companyMenuOpen = document.querySelector('.company-item')
const menuFeatures = document.querySelector('.nav-menu')
const companyMenu = document.querySelector('.company-menu')
const navBtn = document.querySelector('.nav__menu-btn')
const navModalOpen = document.querySelector('.nav__menu')
const arrow = document.querySelector('.arrow')
const arrowCompany = document.querySelector('.arrow-company')
const bodyShadow = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('a')
const featuresOpen = () => {
	if (menuFeatures.style.display === 'block') {
		menuFeatures.style.display = 'none'
		arrow.classList.remove('up')
	} else {
		arrow.classList.add('up')
		menuFeatures.style.display = 'block'
	}
}
const companyOpen = () => {
	if (companyMenu.style.display === 'block') {
		companyMenu.style.display = 'none'
		arrowCompany.classList.remove('up')
	} else {
		companyMenu.style.display = 'block'
		arrowCompany.classList.add('up')
	}
}
const navOpenBtn = () => {
	navModalOpen.classList.toggle('active')
	bodyShadow.classList.toggle('shadow')
   navBtn.classList.toggle('cross')


	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navModalOpen.classList.remove('active')
			bodyShadow.classList.remove('shadow')
         navBtn.classList.remove('cross')
		})
	})
}
navBtn.addEventListener('click', navOpenBtn)
featuresMenuOpen.addEventListener('click', featuresOpen)
companyMenuOpen.addEventListener('click', companyOpen)
