import Swiper, { Navigation } from 'swiper';

new Swiper('.recommendation-block__slider', {
    modules: [ Navigation ],
    direction: 'vertical',
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 22,
    navigation: {
        nextEl: '.recommendation-block__slider-next',
    },
});