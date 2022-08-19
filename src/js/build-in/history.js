import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs, SnapPlugin, SnapGrid, SlideGrid} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs, SnapPlugin, SnapGrid, SlideGrid]);

export default function history() {
    const history = document.querySelector('.company__history');
    if (!history) return;

    const numbersSubSwiper = new Swiper('.company__history-numbers-sub-slider', {
        slidesPerView: "auto",
        spaceBetween: 7,
        breakpoints: {
            641: {
                spaceBetween: 20,
            }
        },
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
        slidesPerView: "auto",
        thumbs: {
            swiper: numbersSubSwiper
        },
        spaceBetween: 30,
        breakpoints: {
            641: {
                spaceBetween: 50
            },
            1025: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    numbersSwiper.on('slideChange',() => {
        contentSwiper.slideTo(numbersSwiper.activeIndex);
    })

    contentSwiper.on('slideChange',() => {
        numbersSwiper.slideTo(contentSwiper.activeIndex);
    })

    contentSwiper.snapGrid[contentSwiper.snapGrid.length - 1] = contentSwiper.slidesGrid[contentSwiper.slidesGrid.length - 1];
}