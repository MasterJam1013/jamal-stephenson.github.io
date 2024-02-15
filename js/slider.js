let currentSlide = 0;

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = slides.length - 1;
  }

  // Hide all slides and reset animations
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.animation = "none";
  }

  // Apply specific animation to each slide
  switch (currentSlide) {
    case 0:
      slides[currentSlide].style.animation = "fadeIn 1s";
      break;
    case 1:
      slides[currentSlide].style.animation = "slideIn 1s";
      break;
    case 2:
      slides[currentSlide].style.animation = "scaleUp 1s";
      break;
    case 3:
      slides[currentSlide].style.animation = "rotateIn 1s";
      break;
  }

  slides[currentSlide].style.display = "block"; // Show the current slide
}

function changeSlide(n) {
  showSlide((currentSlide += n));
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});
