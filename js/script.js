const queryBtn = document.querySelector('.hero-btn')
const closeBtn = document.querySelector('.close-btn')
    
const menuBurger = document.querySelector('.menu-burger-btn')
const menuBurgerClose = document.querySelector('.menu-close-btn')


menuBurger.addEventListener('click', () => {
    document.body.classList.add('is-menu-open')
})

menuBurgerClose.addEventListener('click', () => {
    document.body.classList.remove('is-menu-open')
})

queryBtn.addEventListener('click', () => {
    document.body.classList.add('is-modal-open')
})

closeBtn.addEventListener('click', () => {
    document.body.classList.remove('is-modal-open')
})
