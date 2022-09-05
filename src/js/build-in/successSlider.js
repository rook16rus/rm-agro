import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function successSlider() {
    const success = document.querySelector('.career__success');
    if (!success) return

    const swiper = new Swiper('.career__success-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: success.querySelector('.js-next-slide'),
            prevEl: success.querySelector('.js-prev-slide'),
        },
        breakpoints: {
            769: {
                spaceBetween: 50,
            },
            1025: {
                spaceBetween: 80,
            }
        }
    })
}