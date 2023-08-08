import { initNav } from './modules/nav';
import { initStickyHeader } from './modules/sticky-header';
import { initScrollToTop } from './modules/scroll-to-top';
import { initHeroSlider } from './modules/hero-slider';
import { initExclusiveSlider } from './modules/exclusive-slider';
import './modules/mixitup';
import { initTabs } from './modules/tabs';
import { initSteps } from './modules/steps';
import { initPopup } from './modules/popup';
import { initInStockSlider } from './modules/in-stock-slider';
import { initInStockSliderReverse } from './modules/in-stock-slider-reverse';

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initStickyHeader();
  initNav();
  initScrollToTop();
  initHeroSlider();
  initExclusiveSlider();
  initInStockSlider();
  initInStockSliderReverse();
  initTabs();
  initSteps();
  initPopup();
});
