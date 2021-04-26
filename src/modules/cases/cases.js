import initSlider from "src/js/initSlider";

initSlider('.cases__container', ( $el ) => ({
  wrapperClass:  'cases__items',
  slideClass:    'cases__item',
  navigation:    {
    prevEl: $el.parents('.cases__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.cases__slider').find('.nav__item--next')[0],
  },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 1,
  spaceBetween:  0,
}));
