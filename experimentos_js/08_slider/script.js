
document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.getElementById('sliderContainer');
  const slides = sliderContainer.querySelectorAll('.column');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  }

  // Show the initial slide
  showSlide(currentIndex);

  // Setup event listeners for next and previous buttons
  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.matches('.next-btn')) {
      nextSlide();
    } else if (target.matches('.prev-btn')) {
      prevSlide();
    }
  });
});
