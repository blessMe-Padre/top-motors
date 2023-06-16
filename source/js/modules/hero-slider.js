const initHeroSlider = () => {
  const sliderHero = document.querySelector('.hero__slider');

  if (sliderHero) {
    let swiper = new Swiper(sliderHero, {
      loop: true,
      spaceBetween: 10,
      init: true,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });
  }
};

export { initHeroSlider }
