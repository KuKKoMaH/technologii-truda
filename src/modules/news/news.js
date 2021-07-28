const activeHeaderClass = 'news__link--active';
const activeTabClass = 'news__body--active';

$('.news').each(( i, el ) => {
  const $el = $(el);

  const $menu = $el.find('.news__menu');
  const $menuItems = $el.find('.news__link');
  const $bodies = $el.find('.news__body');

  function activate( index ) {
    $menuItems.removeClass(activeHeaderClass);
    $bodies.removeClass(activeTabClass);
    $menuItems.eq(index).addClass(activeHeaderClass);
    $bodies.eq(index + 1).addClass(activeTabClass);
  }

  $menuItems.find('button').on('click', function () {
    const $el = $(this).parents('.news__link');
    activate($el.index());
    $menu.removeClass('news__menu--active');
  });


  $el.find('.news__menuButton, .news__closeButton').on('click', () => {
    $menu.toggleClass('news__menu--active');
  });
});

