/* eslint-disable linebreak-style */
const {default: Swiper} = require('swiper');

const nextButton = document.querySelector('.swiper-custom-next');
const nextButton2 = document.querySelector('.swiper-custom-next2');


const conf = {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-custom-prev',
    nextEl: '.swiper-custom-next',
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
const conf2 = {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-custom-prev',
    nextEl: '.swiper-custom-next',
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

const swiperEnlace = new Swiper('.swiper-enlaces', conf);
const swiperDocumento = new Swiper('.swiper-documentos', conf2);


nextButton.addEventListener('click', ()=> swiperEnlace.slideNext());
nextButton2.addEventListener('click', () => swiperDocumento.slideNext());

// console.log(swiperEnlace);
