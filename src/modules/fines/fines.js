const activeHeaderClass = 'fines__header--active';
const activeTabClass = 'fines__body--active';

$('.fines').each((i, el) => {
    const $el = $(el);
    const $headers = $el.find('.fines__header');
    const $bodies = $el.find('.fines__body');

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
