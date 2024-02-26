
const carouselItems = document.getElementById('carouselItems');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < carouselItems.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const itemWidth = carouselItems.children[0].offsetWidth;
  const offset = -currentIndex * itemWidth;
  carouselItems.style.transform = `translateX(${offset}px)`;
}
