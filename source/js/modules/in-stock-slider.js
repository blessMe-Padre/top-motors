const initInStockSlider = () => {
    const inStockSlider = document.querySelector('.in-stock__slider');

    if (inStockSlider) {
        new Swiper(inStockSlider, {
            loop: true,
            // effect: 'fade',
            spaceBetween: 30,
            init: true,
            slidesPerView: 1,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    let bulletTexts = ['Toyota', 'Lexus', 'Nissan', 'Mazda', 'Honda', 'Subaru'];
                    return '<span class="' + className + '">' + bulletTexts[index] + '</span>';
                },
            },

        });
    }
};

export { initInStockSlider }