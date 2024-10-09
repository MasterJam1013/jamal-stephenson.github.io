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


// Function to handle card click with animation
function handleCardClick(card) {
  card.classList.add('clicked');
  setTimeout(() => {
      card.classList.remove('clicked');
  }, 300);
}

// Function to handle mobile view (under 768px)
function showNextCard() {
  if (window.innerWidth < 768) {
      cards.forEach((card, index) => {
          card.style.display = index === currentIndex ? 'block' : 'none';
      });
      currentIndex = (currentIndex + 1) % cards.length;
  } else {
      // On desktop (768px and above), display all cards
      cards.forEach(card => {
          card.style.display = 'block';
      });
  }
}

// Function to initialize or update the card display based on screen size
function handleResize() {
  if (window.innerWidth < 768) {
      // Start auto-scroll for mobile view
      showNextCard();
      if (!scrollInterval) {
          scrollInterval = setInterval(showNextCard, 3000); // 3-second delay
      }
  } else {
      // Clear interval when switching to desktop
      if (scrollInterval) {
          clearInterval(scrollInterval);
          scrollInterval = null;
      }
      showNextCard(); // Ensure all cards are shown on desktop
  }
}

// Variables
let currentIndex = 0;
const cards = document.querySelectorAll('.service-item');
let scrollInterval = null;

// Initial check for window size
handleResize();

// Add event listener for window resizing
window.addEventListener('resize', handleResize);

// Initialize mobile view (for the first page load)
if (window.innerWidth < 768) {
  showNextCard();
}
