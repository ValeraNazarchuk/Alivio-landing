// ----------OPEN POPUP----------
const sign = document.querySelector('#sign')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')

//----------FORM(LOGIN AND REGISTRATION)------
const popupButtons = document.querySelectorAll('.popup__box-btn')
const formLogin = document.querySelector('.form-login')
const formRegistration = document.querySelector('.form-registration')

//-----------ANCHORS AND BURGER--------
const anchors = document.querySelectorAll('.nav__item-link')
const navList = document.querySelector('.header__menu')
const burger = document.querySelector('.nav__burger')

// ----------OPEN POPUP----------
sign.addEventListener('click', (e) => {
  if (navList.classList.contains('header__menu--active')) menu()
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

//--------FORM(LOGIN AND REGISTRATION)-------
// event for the button LOGIN
popupButtons[0].addEventListener('click', () => {
  popupButtons[0].classList.add('button-active')
  popupButtons[1].classList.remove('button-active')
  formRegistration.style.display = 'none'
  formLogin.style.display = 'flex'
})

// event for the button REGISTRATION
popupButtons[1].addEventListener('click', () => {
  popupButtons[0].classList.remove('button-active')
  popupButtons[1].classList.add('button-active')
  formLogin.style.display = 'none'
  formRegistration.style.display = 'flex'
})

//-----------ANCHORS AND BURGER-------
// pressing on the anchor
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const attr = anchor.getAttribute('href').substr(1)

    document.getElementById(attr).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    navList.classList.remove('header__menu--active')
    burger.classList.remove('nav__burger--active')

    const overflowValue = burger.classList.contains('nav__burger--active')
      ? 'hidden'
      : 'auto'

    document.body.style.overflow = overflowValue
  })
}

// event for the BURGER
burger.addEventListener('click', menu)

function menu() {
  burger.classList.toggle('nav__burger--active')
  navList.classList.toggle('header__menu--active')

  const overflowValue = burger.classList.contains('nav__burger--active')
    ? 'hidden'
    : 'auto'

  document.body.style.overflow = overflowValue
}