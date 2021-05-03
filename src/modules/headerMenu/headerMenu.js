import { closeMenu, isMenuActive } from "src/modules/header/header";

const $menu = $('.headerMenu__left, .headerMenu__right');

$('.headerMenu__close').on('click', closeMenu);

$('body').on('click', ( e ) => {
  if (!isMenuActive()) return;
  const $target = $(e.target);
  if (!$target.closest($menu).length) {
    closeMenu();
  }
});
