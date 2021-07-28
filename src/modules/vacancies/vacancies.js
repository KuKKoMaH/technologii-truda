const activeHeaderClass = 'vacancies__menuItem--active';
const activeTabClass = 'vacancies__body--active';

$('.vacancies').each(( i, el ) => {
  const $el = $(el);
  const $menu = $el.find('.vacancies__menu');
  const $menuActive = $el.find('.vacancies__menuActive');
  const $menuItems = $el.find('.vacancies__menuItem');
  const $bodies = $el.find('.vacancies__body');

  function activate( index ) {
    $menuItems.removeClass(activeHeaderClass);
    $bodies.removeClass(activeTabClass);
    $menuItems.eq(index).addClass(activeHeaderClass);
    $bodies.eq(index).addClass(activeTabClass);
    $menuActive.html($menuItems.eq(index).text());
  }

  $menuItems.on('click', function () {
    const $el = $(this);
    activate($el.index());
    $menu.removeClass('vacancies__menu--active');
  });

});

$('.vacancies__more a').on('click', ( e ) => {
  e.preventDefault();
  e.stopPropagation();
  const $el = $(e.target);
  $el.parents('.vacancies__item').addClass('vacancies__item--full');
});

const $menu = $('.vacancies__menu');

if ($menu.length) {
  $('body').on('click', ( e ) => {
    const $target = $(e.target);
    if (!$target.closest($menu).length) {
      $menu.removeClass('vacancies__menu--active');
    }
  });

  $('.vacancies__menuButton, .vacancies__closeButton').on('click', () => {
    setTimeout(() => {
      $menu.toggleClass('vacancies__menu--active');
    });
  });
}
