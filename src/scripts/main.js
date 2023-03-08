const popupTrigger = document.querySelector('#sign')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')

popupTrigger.addEventListener('click', (e) => {
  popup.classList.add('show')
  document.body.style.cssText = `overflow: hidden;`
})

popupClose.addEventListener('click', (e) => {
  popup.classList.remove('show')
  document.body.style.cssText = ''
})

// close on click on overlay

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show')
    document.body.style.cssText = ''
  }
})

// close on press of escape button

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && popup.classList.contains('show')) {
    popup.classList.remove('show')
    document.body.style.cssText = ''
  }
})

//--------------
const popupBtn = document.querySelectorAll('.popup__box-btn')
const formLogin = document.querySelector('.form-login')
const formRegistration = document.querySelector('.form-registration')

popupBtn[0].addEventListener('click', () => {
  popupBtn[0].classList.add('button-active')
  popupBtn[1].classList.remove('button-active')
  formRegistration.style.display = 'none'
  formLogin.style.display = 'flex'
})

popupBtn[1].addEventListener('click', () => {
  popupBtn[0].classList.remove('button-active')
  popupBtn[1].classList.add('button-active')
  formLogin.style.display = 'none'
  formRegistration.style.display = 'flex'
})

//-----------------