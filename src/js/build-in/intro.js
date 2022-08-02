import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function intro() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    /* Реализация анимации при наведении на пункт направления деятельности */

    const introListItem = document.querySelectorAll('.intro__list-item');
    const introHideImg = document.querySelector('.intro__video-hide-img');
    const introListTitles = document.querySelectorAll('.intro__list-title')

    introListItem.forEach(item => {
        const itemImg = item.querySelector('img');
        const itemText = item.dataset.text;
        const itemTitle = item.closest('.intro__footer-column').querySelector('.intro__list-title');
        const itemTitleSpan = itemTitle.querySelector('span:last-of-type')

        item.addEventListener('mouseenter', (e) => {
            introHideImg.classList.add('active');
            introHideImg.src = itemImg.src;

            itemTitle.classList.add('active');
            itemTitleSpan.textContent = itemText;

            introListItem.forEach(anotherItem => {
                if (anotherItem !== item) {
                    anotherItem.style.opacity = '0.3';
                }
            })

            introListTitles.forEach(title => {
                if (itemTitle !== title) {
                    title.style.opacity = '0.3';
                }
            })
        })

        item.addEventListener('mouseleave', (e) => {
            introHideImg.classList.remove('active');
            itemTitle.classList.remove('active');

            introListItem.forEach(anotherItem => {
                anotherItem.style.opacity = '1';
            })

            introListTitles.forEach(title => {
                title.style.opacity = '1';
            })
        })
    })

    /* Реализация появления элементов при загрузке страницы */

    const tl = gsap.timeline();

    tl.to('.intro__title', {
        'clip-path': 'inset(0% 0% 0% 0%)',
        delay: 0.5,
        duration: 1.5,
        ease: "power3.out"
    }).from('.intro__footer', {
        transform: 'translateY(2rem)',
        opacity: 0,
        duration: 0.5
    }, '=-0.8').from('.intro .link-block', {
        transform: 'translateY(4rem)',
        opacity: 0,
        duration: 0.5,
    }, '=-0.2').from('.header', {
        transform: 'translateY(4rem)',
        opacity: 0,
        duration: 0.5
    }, '=-0.5')
}