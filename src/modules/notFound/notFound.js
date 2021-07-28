let isMenuActive = false;
const $menu = $('.notFound__asideContent');
const activeClass = 'notFound__asideContent--active';

$('.notFound__hamburger').on('click', () => {
  setTimeout(() => {
    isMenuActive ? close() : open();
  }, 0);
});

const open = () => {
  $menu.addClass(activeClass);
  isMenuActive = !isMenuActive;
};
const close = () => {
  $menu.removeClass(activeClass);
  isMenuActive = !isMenuActive;
};

$('body').on('click', ( e ) => {
  if (!isMenuActive) return;
  const $target = $(e.target);
  if (!$target.closest($menu).length) {
    close();
  }
});
