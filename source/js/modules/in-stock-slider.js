const initInStockSlider = () => {
    const inStockSlider = document.querySelector('.in-stock__slider');

    if (inStockSlider) {
        new Swiper(inStockSlider, {
            loop: true,
            spaceBetween: 30,
            init: true,
            slidesPerView: 1,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    let bulletTexts = ['Toyota', 'Hyundai', 'KIA', 'Toyota', 'Hyundai', 'KIA'];
                    return '<span class="' + className + '">' + bulletTexts[index] + '</span>';
                },
            },

        });
    }
};

export { initInStockSlider }