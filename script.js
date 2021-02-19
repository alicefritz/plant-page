const navToggle = document.querySelector('.nav-toggle');

const slideShow = () => {
  const currentSlide = document.querySelector('.active-slide')
  let nextSlide = currentSlide.nextElementSibling;
  currentSlide.classList.toggle('active-slide')
  if(!nextSlide){
    nextSlide = document.querySelector('.slideshow-img')
  }
  nextSlide.classList.toggle('active-slide')
}

setInterval(() => {
  slideShow()
}, 10000);



const toggleNav = () => {
  const navElement = document.querySelector('nav');
  navElement.classList.toggle('nav-open');
  navToggle.classList.toggle('nav-toggle-open')
}

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  link.addEventListener('click', toggleNav)
})

navToggle.addEventListener('click', toggleNav)