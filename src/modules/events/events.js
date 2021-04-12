import initSlider from "src/js/initSlider";

initSlider('.events__container', ( $el ) => ({
  wrapperClass:  'events__items',
  slideClass:    'events__item',
  navigation:    {
    prevEl: $el.parents('.events__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.events__slider').find('.nav__item--next')[0],
  },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 2,
  spaceBetween:  0,
}));
