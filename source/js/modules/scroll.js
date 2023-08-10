const initScroll = () => {
    const menuLinks = document.querySelectorAll('.nav__link');

    const onMenuLinkClick = (evt) => {
        const menuLink = evt.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });
            evt.preventDefault();
        }
    };

    if (menuLinks.length > 0) {
        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });
    }
};

export { initScroll };