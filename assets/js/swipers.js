/* eslint-disable linebreak-style */
import Swiper from 'swiper/bundle';

const nextButton = document.querySelector('.swiper-custom-next');
const nextButton2 = document.querySelector('.swiper-custom-next2');
const next = document.querySelector('.swiper-button-next');
const prev = document.querySelector('.swiper-button-prev');
const nextVideo = document.querySelector('.swiper-video-next');
const prevVideo = document.querySelector('.swiper-video-prev');

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

const swiperVideoWrapper = document.querySelector('.swiper-video');
const swiperVideos = new Swiper(swiperVideoWrapper.querySelector('.swiper'), {
  navigation: {
    nextEl: nextVideo,
    prevEl: prevVideo,
  },
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiperGaleria = new Swiper('.swiper-galeria', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperMemorias = new Swiper('.swiper-memorias', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'opacity-40',
  },
});


nextButton?.addEventListener('click', () => swiperEnlace.slideNext());
nextButton2?.addEventListener('click', () => swiperDocumento.slideNext());

next.addEventListener('click', () => {
  swiperGaleria.slideNext();
});

prev.addEventListener('click', () => {
  swiperGaleria.slidePrev();
});

next.addEventListener('click', () => {
  swiperMemorias.slideNext();
});

prev.addEventListener('click', () => {
  swiperMemorias.slidePrev();
});

nextVideo.addEventListener('click', () => {
  swiperVideos.slideNext();
});

prevVideo.addEventListener('click', () => {
  swiperVideos.slidePrev();
});

