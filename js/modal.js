const queryBtn = document.querySelector('.hero-btn')
const closeBtn = document.querySelector('.close-btn')

queryBtn.addEventListener('click', () => {
    document.body.classList.add('is-modal-open')
})

closeBtn.addEventListener('click', () => {
    document.body.classList.remove('is-modal-open')
})
