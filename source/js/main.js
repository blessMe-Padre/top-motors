import { initNav } from './modules/nav';
import { initStickyHeader } from './modules/sticky-header';
import { initScrollToTop } from './modules/scroll-to-top';
import { initScroll } from './modules/scroll';
import { initHeroSlider } from './modules/hero-slider';
import { initExclusiveSlider } from './modules/exclusive-slider';
import './modules/mixitup';
import WOW from './modules/wow';
import { initTabs } from './modules/tabs';
import { initSteps } from './modules/steps';
import { initPopup } from './modules/popup';
import { initInStockSlider } from './modules/in-stock-slider';
import { initInStockSliderReverse } from './modules/in-stock-slider-reverse';
import { initMask } from './modules/mask';
import { initValidation } from './modules/validation';

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initStickyHeader();
  initNav();
  initScrollToTop();
  initScroll();
  initHeroSlider();
  initExclusiveSlider();
  initInStockSlider();
  initInStockSliderReverse();
  initTabs();
  initSteps();
  initPopup();
  initValidation();
  initMask();
  new WOW().init();
});
