let isSearchActive = false;
const $search = $('.headerSearch');
const $input = $('.headerSearch__input');
const activeClass = 'headerSearch--active';
//    $header.addClass(activeClass);
//     setTimeout(() => menuActive = true, 0);

export const openSearch = () => {
  $search.addClass(activeClass);
  $input.focus();
  setTimeout(() => isSearchActive = true, 0);

};

export const closeSearch = () => {
  $search.removeClass(activeClass);
  setTimeout(() => isSearchActive = false, 0);
};

$('.headerSearch__close').on('click', closeSearch);

