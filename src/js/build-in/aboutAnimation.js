import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutAnimation() {
    const about = document.querySelector('.about');
    if (!about) return;

    const headerTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: "top 80%",
        }
    });

    headerTl.from('.about .section-header', {
        transform: 'translateY(20rem)',
        duration: 1,
        ease: "power1.out"
    }).from('.about__top', {
        transform: 'translateY(20rem)',
        duration: 1,
        ease: "power1.out"
    }, '=-1')

    const sliderTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about .features-slider',
            start: "top 95%",
        }
    });

    sliderTl.from('.about .features-slider', {
        transform: 'translateX(60%)',
        duration: 3,
        ease: "power3.out"
    }).from('.about .features-slider__slide-img', {
        width: '20rem',
        duration: 3,
        ease: "power3.out"
    }, '=-3')
}