const $header = $('.header');
const activeClass = 'header--menu';
let menuActive = false;


$('.header__hamburger').on('click', () => {
  $header.addClass(activeClass);
  setTimeout(() => menuActive = true, 0);
});


export const closeMenu = () => {
  $header.removeClass(activeClass);
  setTimeout(() => menuActive = false, 0);
};

export const isMenuActive = () => menuActive;
