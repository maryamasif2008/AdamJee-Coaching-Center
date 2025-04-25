let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

showSlide(currentSlideIndex);


// animation

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.animationPlayState = 'paused';
  observer.observe(card);
});