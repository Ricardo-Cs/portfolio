const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    0: {          // a partir de 0px de largura
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {        // a partir de 768px
      slidesPerView: 3,
      slidesPerGroup: 1
    }
  }
});
