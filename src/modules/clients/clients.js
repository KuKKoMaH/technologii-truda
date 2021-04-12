import initSlider from "src/js/initSlider";

initSlider('.clients__container', {
  wrapperClass:           'clients__items',
  slideClass:             'clients__item',
  navigation:             {
    // prevEl: $el.find('.eventsList__nav--prev')[0],
    // nextEl: $el.find('.eventsList__nav--next')[0],
  },
  // touchEventsTarget: 'wrapper',
  slidesPerColumn:        2,
  slidesPerView:          3,
  slidesPerGroup:         3,
  slidesPerColumnFill: 'row',
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
})
