import initSlider        from "src/js/initSlider";
import { BREAKPOINT_LG } from "src/js/breakpoints";

initSlider('.clients__container', ( $el ) => ({
  wrapperClass:    'clients__items',
  slideClass:      'clients__item',
  navigation:      {
    prevEl: $el.parents('.clients__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.clients__slider').find('.nav__item--next')[0],
  },
  pagination:      {
    el:        $el.parents('.clients__aside').find('.nav__pagination')[0],
    clickable: true,
  },
  slidesPerColumn: 3,
  slidesPerView:   2,
  slidesPerGroup:  2,
  speed:           400,
  breakpoints:     {
    [BREAKPOINT_LG]: {
      slidesPerColumn: 2,
      slidesPerView:   3,
      slidesPerGroup:  3,
    },
  },
}));
