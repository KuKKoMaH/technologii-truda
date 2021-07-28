const $menu = $('.submenu__items');

if ($menu.length) {
  $('body').on('click', ( e ) => {
    const $target = $(e.target);
    if (!$target.closest($menu).length) {
      $menu.removeClass('submenu__items--active');
    }
  });

  $('.submenu__menuButton, .submenu__closeButton').on('click', () => {
    setTimeout(() => {
      $menu.toggleClass('submenu__items--active');
    });
  });
}
