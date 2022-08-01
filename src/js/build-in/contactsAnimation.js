import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function contactsAnimation() {
    const contacts = document.querySelector('.contacts');
    if (!contacts) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contacts',
            start: 'top 80%'
        }
    })

    tl.to('.contacts__mask rect', {})
}