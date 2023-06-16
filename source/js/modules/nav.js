const initNav = () => {
  const button = document.querySelector('.toggle-btn');
  const headerWrapper = document.querySelector('.header__wrapper');
  const body = document.querySelector('body');


  button.addEventListener('click', (evt) => {
    evt.stopPropagation();
    button.classList.toggle('is-active');
    headerWrapper.classList.toggle('is-active');
    body.classList.toggle('scroll-lock');
    body.classList.toggle('page--lock');
    let buttonAtrAttribute = button.getAttribute('aria-expanded') === true;
    buttonAtrAttribute ? button.setAttribute("aria-expanded", false)
      : button.setAttribute("aria-expanded", true);
  });

  body.addEventListener('click', function (evt) {
    if (evt.target !== headerWrapper && evt.target !== button) {
      button.classList.remove('is-active');
      headerWrapper.classList.remove('is-active');
      body.classList.remove('scroll-lock');
      body.classList.remove('page--lock');
    }
  });
};

export { initNav };
