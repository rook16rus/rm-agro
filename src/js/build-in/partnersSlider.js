import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function partnersSlider() {
    const swipers = document.querySelectorAll('.partners-slider__slider');

    swipers.forEach(swiper => {
        new Swiper(swiper, {
            loop: true,
            freeMode: {
                enabled: true,
                momentum: false
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: !!swiper.dataset.reverse
            },
            slidesPerView: "auto",
            speed: 6000,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    spaceBetween: 30
                },
                1024: {
                    spaceBetween: 50
                }
            }
        })
    })
}