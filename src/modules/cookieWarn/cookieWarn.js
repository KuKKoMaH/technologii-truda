const cookieKey = 'cookieAccepted';

if (!localStorage[cookieKey]) $('.cookieWarn').addClass('cookieWarn--active');

$('.cookieWarn__button').on('click', () => {
  localStorage[cookieKey] = true;
  $('.cookieWarn').removeClass('cookieWarn--active');
});
