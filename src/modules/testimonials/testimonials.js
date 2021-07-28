import { BREAKPOINT_LG } from "src/js/breakpoints";
import initSlider        from "src/js/initSlider";

initSlider('.testimonials__container', ( $el ) => ({
  wrapperClass:    'testimonials__items',
  slideClass:      'testimonials__item',
  navigation:      {
    prevEl: $el.parents('.testimonials__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.testimonials__slider').find('.nav__item--next')[0],
  },
  pagination:      {
    el:        $el.parents('.testimonials__slider').find('.nav__pagination')[0],
    clickable: true,
  },
  // touchEventsTarget: 'wrapper',
  // slidesPerView:   1,
  // slidesPerColumn: 2,
  spaceBetween:    0,
  slidesPerView:   1,
  slidesPerColumn: 2,
  slidesPerGroup:  1,

  breakpoints: {
    [BREAKPOINT_LG]: {
      slidesPerView:   2,
      slidesPerColumn: 1,
    },
  },
}), {
  // sm: false,
  // md: false,
  // lg: true,
});
