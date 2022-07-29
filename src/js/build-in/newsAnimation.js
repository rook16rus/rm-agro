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
    }, '=-1').from()
}