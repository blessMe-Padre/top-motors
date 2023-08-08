const initInStockSliderReverse = () => {
    const inStockSliderReverse = document.querySelector('.in-stock__slider-reverse');

    if (inStockSliderReverse) {
        new Swiper(inStockSliderReverse, {
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

export { initInStockSliderReverse }