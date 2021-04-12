import initSlider from "src/js/initSlider";

initSlider('.testimonials__container', ( $el ) => ({
  wrapperClass:  'testimonials__items',
  slideClass:    'testimonials__item',
  navigation:    {
    prevEl: $el.parents('.testimonials__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.testimonials__slider').find('.nav__item--next')[0],
  },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 2,
  spaceBetween:  0,
}));
