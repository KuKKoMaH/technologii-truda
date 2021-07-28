import { BREAKPOINT_LG } from "src/js/breakpoints";
import initSlider        from "src/js/initSlider";

initSlider('.licenses__container', ( $el ) => ({
  wrapperClass:  'licenses__items',
  slideClass:    'licenses__item',
  navigation:    {
    prevEl: $el.parents('.licenses__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.licenses__slider').find('.nav__item--next')[0],
  },
  pagination:          {
    el:        $el.parents('.licenses__slider').find('.nav__pagination')[0],
    clickable: true,
  },
  // touchlicensesTarget: 'wrapper',
  slidesPerView: 2,
  spaceBetween:  0,
  breakpoints:   {
    [BREAKPOINT_LG]: {
      slidesPerView: 5,

    },
  },
}));
