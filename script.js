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