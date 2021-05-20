// Focus Visible Polyfill
import 'focus-visible'
import 'alpinejs'

// Internal Modules
import './modules/nav'
import './modules/buzzsprout'

import comment from './modules/comments';
var SimpleLightbox = require('simple-lightbox');

var lightbox = new SimpleLightbox({
  elements: '.tiled-gallery img',
  urlAttribute: 'data-large-file', // where to expect large image
});

comment();

let slideWrapper = document.querySelector('.about__container');
let slideControls = document.querySelectorAll('.about__control');
let slides = document.querySelectorAll('.about__slide');

slideControls.forEach(control => {
  control.addEventListener('click', ()=>{
    let target = control.dataset.target;
    document.documentElement.scrollTop = document.documentElement.scrollTop + 1;
    slides[target].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
  });
});

let controlElements = document.querySelectorAll('.about__controls__direction button');

function aboutControlsHandler() {
  controlElements.forEach(function (controlElement) {
    controlElement.addEventListener('click', () => {
      var current = parseInt(slideWrapper.querySelector('.active').dataset.slide);
      var direction = controlElement.dataset.direction;
      var target = (direction == 'forwards') ? (++current) : (--current);
      document.documentElement.scrollTop = document.documentElement.scrollTop + 1;
      slides[target].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    });
  });
}

function handleSlideIntersect(slides) {
  slides.forEach(function (slide) {
    if(slide.intersectionRatio > 0.5) {
      toggleControls(parseInt(slide.target.dataset.slide));
      slide.target.classList.add('active');
      slideControls[slide.target.dataset.slide].classList.add('active');
    }
    else {
      slide.target.classList.remove('active');
      slideControls[slide.target.dataset.slide].classList.remove('active');
    }
  });
}

function createSlideObserver() {
  var slideObserver = new IntersectionObserver(
    handleSlideIntersect,
    {
      root: null,
      rootMargin: '0px',
      threshold: [0.5],
    }
  );

  slides.forEach(slide => {
    slideObserver.observe(slide);
  });
}

aboutControlsHandler();

if ('IntersectionObserver' in window) {
  createSlideObserver();
}


function toggleControls(index) {
  if (index < 1) {
    controlElements[0].setAttribute('disabled',true);
    controlElements[1].removeAttribute('disabled');
  }
  else if (++index == slides.length) {
    controlElements[1].setAttribute('disabled',true);
    controlElements[0].removeAttribute('disabled');
  }
  else {
    controlElements[1].removeAttribute('disabled');
    controlElements[0].removeAttribute('disabled');
  }
}


