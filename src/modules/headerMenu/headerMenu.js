let isMenuActive = false;
const $menu = $('.headerMenu');
const activeClass = 'headerMenu--active';
//    $header.addClass(activeClass);
//     setTimeout(() => menuActive = true, 0);

const $menuContent = $('.headerMenu__left, .headerMenu__right');

export const openMenu = () => {
  $menu.addClass(activeClass);
  setTimeout(() => isMenuActive = true, 0);

};

export const closeMenu = () => {
  $menu.removeClass(activeClass);
  setTimeout(() => isMenuActive = false, 0);
};

$('.headerMenu__close').on('click', closeMenu);

$('body').on('click', ( e ) => {
  if (!isMenuActive) return;
  const $target = $(e.target);
  if (!$target.closest($menuContent).length) {
    closeMenu();
  }
});

