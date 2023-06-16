const initStickyHeader = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= 450) {
            header.classList.add('header-fixed');
            hero.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('header-fixed');
            hero.style.marginTop = `0px`;
        }
    });
};


export { initStickyHeader };