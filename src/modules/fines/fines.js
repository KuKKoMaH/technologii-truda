const activeItemClass = 'fines__item--active';

$('.fines').each(( i, el ) => {
  const $el = $(el);
  const $headers = $el.find('.fines__header');
  const $items = $el.find('.fines__item');

  function activate( index ) {
    $items.removeClass(activeItemClass);
    $items.eq(index).addClass(activeItemClass);
  }

  $headers.on('click', function () {
    const $el = $(this).parents('.fines__item');
    activate($el.index());
  });

});
