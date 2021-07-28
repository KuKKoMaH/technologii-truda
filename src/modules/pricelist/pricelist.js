$('body').on('click', ( e ) => {
  $('.pricelist__item').removeClass('pricelist__item--active');
});

$('.pricelist__question, .pricelist__price').on('click', ( e ) => {
  setTimeout(() => {
    $(e.currentTarget).parents('.pricelist__item').toggleClass('pricelist__item--active');
  });
});
