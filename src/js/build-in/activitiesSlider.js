import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs, SnapPlugin, SnapGrid, SlideGrid} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs, SnapPlugin, SnapGrid, SlideGrid]);

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
            },
        }
    });

    const swiper = new Swiper('.js-activities-slider', {
        slidesPerView: 1.1,
        spaceBetween: 25,
        autoHeight: true,
        thumbs: {
            swiper: swiperThumb,
        },
        breakpoints: {
            769: {
                slidesPerView: 1.2,
                spaceBetween: 36,
            },
            920: {
                slidesPerView: 1.4,
            },
            1025: {
                slidesPerView: 1,
                allowTouchMove: false,
            }
        }
    })

    const contents = document.querySelectorAll('.activities-slider__content');
    contents[0].classList.add('active');

    swiper.on('slideChange', () => {
        contents.forEach(item => item.classList.remove('active'));
        contents[swiper.activeIndex] ? contents[swiper.activeIndex].classList.add('active') : null;
    })

    const thumbSlides = document.querySelectorAll('.activities .section-header__slide');

    thumbSlides.forEach((item, index) => {
        item.addEventListener('click', () => {
            swiper.slideTo(index);
        })
    })

}


/*{
      "title": "молочное производство",
      "text": "Растениеводческие предприятия Группы формируют собственную кормовую базу, богатую витаминами и полезными микроэлементами. Качество конечной продукции напрямую зависит от кормов, поставляемых на животноводческие предприятия.",
      "img": "img/activities-1.jpg"
    },
    {
      "title": "колбасное производство",
      "text": "Растениеводческие предприятия Группы формируют собственную кормовую базу, богатую витаминами и полезными микроэлементами. Качество конечной продукции напрямую зависит от кормов, поставляемых на животноводческие предприятия.",
      "img": "img/activities-1.jpg"
    },
    {
      "title": "забой скота",
      "text": "Растениеводческие предприятия Группы формируют собственную кормовую базу, богатую витаминами и полезными микроэлементами. Качество конечной продукции напрямую зависит от кормов, поставляемых на животноводческие предприятия.",
      "img": "img/activities-1.jpg"
    }*/