import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function teamSlider() {
    const swipers = document.querySelectorAll('.company__team-slider');

    /* Инициализация свайперов */

    swipers.forEach(swiper => {
        new Swiper(swiper, {
            loop: true,
            allowTouchMove: false,
            noSwiping: true,
            freeMode: {
                enabled: true,
                momentum: false
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: !!swiper.dataset.reverse,
                pauseOnMouseEnter: true,
                waitForTransition: false
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
            },
        })
    });

    /* Ховер эффект */

    const slides = document.querySelectorAll('.company__team-slide');

    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const text = slide.querySelector('.company__team-text');
            const hideText = text.nextElementSibling;

            text.style.setProperty('--text-height', hideText.clientHeight + 'px');
        })
    })
}