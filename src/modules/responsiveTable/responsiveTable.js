const activeClass = 'responsiveTable__item--active';
$('.responsiveTable__head').on('click', ( e ) => {
  const $el = $(e.currentTarget);
  const $item = $el.parents('.responsiveTable__item');
  const $body = $item.find('.responsiveTable__body');
  const $inner = $item.find('.responsiveTable__inner');
  if ($item.hasClass(activeClass)) {
    $body.css({ maxHeight: $inner.outerHeight() });
    setTimeout(() => $body.css({ maxHeight: 0 }), 0);
  } else {
    $body.css({ maxHeight: $inner.outerHeight() });
  }

  setTimeout(() => $body.css({ maxHeight: '' }), 1000);
  $item.toggleClass(activeClass);
});
