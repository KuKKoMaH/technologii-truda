import 'jquery';
import Breakpoints from 'breakpoints-js';
import initGallery from "src/js/initGallery";
import './initMap';

Breakpoints({
  sm: {
    min: 0,
    max: 797,
  },
  md: {
    min: 798,
    max: 1169,
  },
  lg: {
    min: 1170,
    max: Infinity,
  },
});

$('.gallery').each(( i, el ) => {
  initGallery({ $items: $(el).find('.gallery__item') });
});
