import { BREAKPOINT_LG } from "src/js/breakpoints";
import initSlider        from "src/js/initSlider";

initSlider('.headBanner__slider', ( $el ) => {
  if ($el.find('.headBanner__slide').length < 2) return null;
  return {
    wrapperClass:  'headBanner__slides',
    slideClass:    'headBanner__slide',
    pagination:    {
      el:        $el.parents('.headBanner').find('.nav__pagination')[0],
      clickable: true,
    },
    autoplay:      {
      delay:             $el.data('delay') || 5000,
      // disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween:  0,
    breakpoints:   {
      [BREAKPOINT_LG]: {
        autoplay: {
          delay:                $el.data('delay') || 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter:    true,
        },
      },
    },
  };
}, {
  afterInit: ( swiper, $el ) => {
    let focused = false;
    let entered = false;
    const start = () => {

      setTimeout(() => {
        if (!focused && !entered) swiper.autoplay.start();
      }, 5000);
    };
    const stop = () => {
      swiper.autoplay.stop();
    };
    $el
      .on('mouseenter', () => {
        entered = true;
        stop();
      })
      .on('mouseleave', () => {
        entered = false;
        start();
      });
    $el.find('input')
      .on('focus', () => {
        focused = true;
        stop();
      })
      .on('blur', () => {
        focused = false;
        start();
      });
  },
});
