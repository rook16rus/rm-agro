import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function history() {
    const history = document.querySelector('.company__history');
    if (!history) return;

    const numbersSubSwiper = new Swiper('.company__history-numbers-sub-slider', {
        slidesPerView: "auto",
        spaceBetween: 20,
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY
                if (diff < range || diff > -range) s.allowClick = true;
            }
        },
    });

    const numbersSwiper = new Swiper('.company__history-numbers-slider', {
        effect: "fade",
        slidesPerView: 1,
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: numbersSubSwiper
        },
        navigation: {
            nextEl: history.querySelector('.js-next-slide'),
            prevEl: history.querySelector('.js-prev-slide'),
        }
    });

    const contentSwiper = new Swiper('.company__history-content-slider', {
        slidesPerView: 1,
        thumbs: {
            swiper: numbersSubSwiper
        }
    });

    numbersSwiper.on('slideChange',() => {
        contentSwiper.slideTo(numbersSwiper.activeIndex);
    })

    contentSwiper.on('slideChange',() => {
        numbersSwiper.slideTo(contentSwiper.activeIndex);
    })
}