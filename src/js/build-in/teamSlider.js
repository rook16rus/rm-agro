import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function teamSlider() {
    const swipers = document.querySelectorAll('.company__team-slider');

    /* Инициализация свайперов */

    if (matchMedia('(max-width: 767px)').matches) {
        const mobileSwiper = new Swiper('.company__mobile-team-slider', {
            slidesPerView: "auto",
            spaceBetween: 15,
        })
    }

    swipers.forEach(slider => {
        const swiper = new Swiper(slider, {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 15,
            speed: 6000,
            autoplay: {
                enabled: true,
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: !!slider.dataset.reverse,
                pauseOnMouseEnter: true,
                waitForTransition: false
            },
            breakpoints: {
                769: {
                    allowTouchMove: false,
                    noSwiping: true,
                    freeMode: {
                        enabled: true,
                        momentum: false
                    },
                    speed: 6000,
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