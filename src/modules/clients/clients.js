import initSlider from "src/js/initSlider";

initSlider('.clients__container', ( $el ) => ({
  wrapperClass:           'clients__items',
  slideClass:             'clients__item',
  navigation:             {
    prevEl: $el.parents('.clients__slider').find('.nav__item--prev')[0],
    nextEl: $el.parents('.clients__slider').find('.nav__item--next')[0],
  },
  // touchEventsTarget: 'wrapper',
  slidesPerColumn:        2,
  slidesPerView:          3,
  slidesPerGroup:         3,
  slidesPerColumnFill:    'row',
  // spaceBetween:           20,
  speed:                  400,
  loopFillGroupWithBlank: true,
  breakpoints:            {
    // 1150: {
    //   slidesPerView: 3,
    // },
    // 1080:  {
    //   slidesPerView: 2,
    // },
  },
}));
