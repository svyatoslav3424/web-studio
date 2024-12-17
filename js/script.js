const menuBurger = document.querySelector('.menu-burger-btn')
const menuBurgerClose = document.querySelector('.menu-close-btn')


menuBurger.addEventListener('click', () => {
    document.body.classList.add('is-menu-open')
})

menuBurgerClose.addEventListener('click', () => {
    document.body.classList.remove('is-menu-open')
})

