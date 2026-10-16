const projectsSwiper = new Swiper('.projects-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  watchOverflow: true,
  keyboard: { enabled: true, onlyInViewport: true },
  pagination: { el: '.projects-pagination', clickable: true },
  navigation: { nextEl: '.projects-next', prevEl: '.projects-prev' },
  a11y: {
    prevSlideMessage: 'Projeto anterior',
    nextSlideMessage: 'Próximo projeto',
    paginationBulletMessage: 'Ir para o projeto {{index}}',
  },
  breakpoints: {
    576: { slidesPerView: 2 },  // tablets
    992: { slidesPerView: 3 },  // desktop
  },
});
