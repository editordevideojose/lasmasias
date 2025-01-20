const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
  const imagesContainer = carousel.querySelector('.carousel-images');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  const images = imagesContainer.querySelectorAll('img');
  const totalImages = images.length;
  let currentIndex = 0;

  // Generar botones dinámicamente
  images.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  // Actualizar los dots después de generarlos
  const dots = dotsContainer.querySelectorAll('button');

  function updateCarousel() {
    imagesContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  let autoSlideInterval = setInterval(autoSlide, 2000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoSlide, 2000);
    });
  });
});
