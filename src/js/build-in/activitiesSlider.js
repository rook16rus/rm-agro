import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function activitiesSlider() {
    const swiperThumb = new Swiper('.js-activities-slider-thumb', {
        slidesPerView: 'auto',
    });

    const swiper = new Swiper('.js-activities-slider', {
        slidesPerView: 'auto',
        spaceBetween: 110,
        thumbs: {
            swiper: swiperThumb,
        }
    })
}