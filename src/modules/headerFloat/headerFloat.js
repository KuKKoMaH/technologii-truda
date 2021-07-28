import { openMenu }   from "src/modules/headerMenu/headerMenu";
import { openSearch } from "src/modules/headerSearch/headerSearch";

const $document = $(document);
let isMenuActive = false;
const $menu = $('.headerFloat');
const activeClass = 'headerFloat--active';

$('.headerFloat__hamburger').on('click', openMenu);

const onScroll = () => {
  const scrollTop = $document.scrollTop();
  if (scrollTop > 110) {
    if (!isMenuActive) {
      isMenuActive = true;
      $menu.addClass(activeClass);
    }
  } else {
    if (isMenuActive) {
      isMenuActive = false;
      $menu.removeClass(activeClass);
    }
  }
};
$(window).on('scroll', onScroll);
onScroll();

$('.headerFloat__search').on('click', openSearch);
