//---------------Бургер на jquery-------------
$('.nav__burger').on('click', function () {
  $('.nav__burger').toggleClass('nav__burger--active')
  $('.nav__list').toggleClass('nav__list--active')
})

//При нажаті на силку шоб вікно header закривалось/пропадало
$('.nav__list-item').on('click', function () {
  $('.nav__burger').removeClass('nav__burger--active')
  $('.nav__list').removeClass('nav__list--active')
})

//--------------JS-------------------

const anchors = document.querySelectorAll('.header a')
const navList = document.querySelector('.nav__list')
const burger = document.querySelector('.nav__burger')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const attr = anchor.getAttribute('href').substr(1)

    document.getElementById(attr).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    navList.classList.remove('nav__list--active')
    burger.classList.remove('nav__burger--active')

    const overflowValue = burger.classList.contains('nav__burger--active')
      ? 'hidden'
      : 'auto'

    document.body.style.overflow = overflowValue
  })
}

burger.addEventListener('click', menu)

function menu(e) {
  burger.classList.toggle('nav__burger--active')
  navList.classList.toggle('nav__list--active')

  const overflowValue = burger.classList.contains('nav__burger--active')
    ? 'hidden'
    : 'auto'

  document.body.style.overflow = overflowValue
}
