import initSlider from "src/js/initSlider";

initSlider('.licenses__container', ( $el ) => ({
    wrapperClass:  'licenses__items',
    slideClass:    'licenses__item',
    navigation:    {
        prevEl: $el.parents('.licenses__slider').find('.nav__item--prev')[0],
        nextEl: $el.parents('.licenses__slider').find('.nav__item--next')[0],
    },
    // touchlicensesTarget: 'wrapper',
    slidesPerView: 5,
    spaceBetween:  0,
}));
