import initSlider from "src/js/initSlider";

initSlider('.history__container', ($el) => ({
    wrapperClass: 'history__items',
    slideClass: 'history__item',
    navigation: {
        prevEl: $el.parents('.history__slider').find('.nav__item--prev')[0],
        nextEl: $el.parents('.history__slider').find('.nav__item--next')[0],
    },
    // touchEventsTarget: 'wrapper',
    slidesPerView: 5,
    spaceBetween: 0,
    initialSlide: $el.find('.history__item').length - 1,
}));

const activeHeaderClass = 'history__item--active';
const activeTabClass = 'history__body--active';

$('.history').each((i, el) => {
    const $el = $(el);
    const $headers = $el.find('.history__item');
    const $bodies = $el.find('.history__body');

    function activate(index) {
        $headers.removeClass(activeHeaderClass);
        $bodies.removeClass(activeTabClass);
        $headers.eq(index).addClass(activeHeaderClass);
        $bodies.eq(index).addClass(activeTabClass);
    }

    $headers.on('click', function () {
        const $el = $(this);
        activate($el.index());
    });

})
