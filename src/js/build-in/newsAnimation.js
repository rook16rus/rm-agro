import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function newsAnimation() {
    const news = document.querySelector('.news');
    if (!news) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.news',
            start: 'top 80%'
        }
    })

    tl.from('.news .section-header', {
        y: '20rem',
        duration: 1.2
    },).to('.news .section-header__mask rect', {
        height: '100%',
        duration: 1.6,
    }, '=-1').to('.news__item', {
        'clip-path': 'inset(0% 0% 0%)',
        duration: 1.3,
    }, '=-1.3').to('.news__slider', {
        'clip-path': 'inset(0% 0% 0%)',
        duration: 0.7,
    }, '=-0.8')
}