const slider = document.querySelector('.slider')
const next = document.querySelector('.next')
const slides = Array.from(slider.querySelectorAll('.client'))
const count = slides.length
let slideIndex = 0

next.addEventListener('click', showNextSlide)

function showNextSlide() {
  slideIndex = (slideIndex + 1) % count
  updateSlider()
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block'
      slide.style.margin = '0 auto'
    } else {
      slide.style.display = 'none'
      slide.style.margin = '0 auto'
    }
  })
}

updateSlider()

// burger

let menu = document.querySelector('ul')
let menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', function (e) {
  e.preventDefault()
  menu.classList.toggle('show-menu')
  menuToggle.classList.toggle('active')
})

window.addEventListener('resize', function () {
  if ((this.window.innerWidth > 480) & menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu')
    menuToggle.classList.remove('active')
  }
})
