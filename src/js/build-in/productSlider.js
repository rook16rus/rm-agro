import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function productSlider() {
    const container = document.querySelector('.modal-product__slider-container');
    if (!container) return;

    const swiper = new Swiper('.modal-product__slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: container.querySelector('.js-next-slide'),
            prevEl: container.querySelector('.js-prev-slide'),
        }
    })
}