import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function jobAnimation() {
    const job = document.querySelector('.job');
    if (!job) return

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.job',
            start: 'top 80%'
        }
    })

    tl.to('.job__inner',{
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.6,
    }).from('.job__title', {
        y: '20rem',
        duration: 1,
    }, '=-0.4').from('.job__slider', {
        y: '20rem',
        duration: 1,
    }, '=-1').from('.job__footer', {
        y: '15rem',
        duration: 1,
    }, '=-1')
}