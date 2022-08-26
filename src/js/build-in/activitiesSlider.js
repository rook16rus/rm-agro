import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function activitiesSlider() {
    const slider = document.querySelector('.js-activities-slider');
    if (!slider) return;

    const swiperThumb = new Swiper('.js-activities-slider-thumb', {
        slidesPerView: 'auto',
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY;
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    });

    const swiper = new Swiper('.js-activities-slider', {
        slidesPerView: "auto",
        spaceBetween: 25,
        autoHeight: true,
        thumbs: {
            swiper: swiperThumb,
        },
        breakpoints: {
            769: {
                slidesPerView: 'auto',
                spaceBetween: 110,
            }
        },
    })

    const contents = document.querySelectorAll('.activities-slider__content');
    contents[0].classList.add('active');

    swiper.on('slideChange', () => {
        contents.forEach(item => item.classList.remove('active'));
        contents[swiper.activeIndex] ? contents[swiper.activeIndex].classList.add('active') : null;
    })
}