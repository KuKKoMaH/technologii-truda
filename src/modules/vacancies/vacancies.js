const activeHeaderClass = 'vacancies__header--active';
const activeTabClass = 'vacancies__body--active';

$('.vacancies').each(( i, el ) => {
  const $el = $(el);
  const $headers = $el.find('.vacancies__header');
  const $bodies = $el.find('.vacancies__body');

  function activate( index ) {
    $headers.removeClass(activeHeaderClass);
    $bodies.removeClass(activeTabClass);
    $headers.eq(index).addClass(activeHeaderClass);
    $bodies.eq(index).addClass(activeTabClass);
  }

  $headers.on('click', function () {
    const $el = $(this);
    activate($el.index());
  });

});

$('.vacancies__more a').on('click', ( e ) => {
  e.preventDefault();
  e.stopPropagation();
  const $el = $(e.target);
  $el.parents('.vacancies__item').addClass('vacancies__item--full');
});
