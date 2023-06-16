const initExclusiveSlider = () => {
    const exclusiveSlider = document.querySelector('.exclusive__slider');

    if (exclusiveSlider) {
        let breakpoint = window.matchMedia('(min-width:1200px)');
        let swiper;

        const breakpointChecker = function () {
            if (breakpoint.matches === true) {

                if (swiper !== undefined) {
                    swiper.destroy(true, true);
                } return;

            } else if (breakpoint.matches === false) {
                // eslint-disable-next-line consistent-return
                return exclusiveSliderInit();
            }
        };

        const exclusiveSliderInit = function () {
            swiper = new Swiper(exclusiveSlider, {
                loop: true,
                spaceBetween: 10,
                init: true,
                slidesPerView: 1.5,
                breakpoints: {
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                },

            });
        };

        breakpoint.addEventListener('change', breakpointChecker);
        breakpointChecker();
    }
};

export { initExclusiveSlider }