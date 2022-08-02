import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
import initSliders from "./custom/initSliders";
import fancybox from "./build-in/fancybox";
import header from "./build-in/header";
import activitiesSlider from "./build-in/activitiesSlider";
import hoverButton from "./build-in/hoverButton";
import intro from "./build-in/intro";
import aboutAnimation from "./build-in/aboutAnimation";
import activitiesAnimation from "./build-in/activitiesAnimation";
import productsAnimation from "./build-in/productsAnimation";
import jobAnimation from "./build-in/jobAnimation";
import newsAnimation from "./build-in/newsAnimation";
import contactsAnimation from "./build-in/contactsAnimation";
import footerAnimation from "./build-in/footerAnimation";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
    editableTextContainer();

    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    fancybox();
    header();
    intro();
    activitiesSlider();
    hoverButton();
    aboutAnimation();
    activitiesAnimation();
    productsAnimation();
    jobAnimation();
    newsAnimation();
    contactsAnimation();
    footerAnimation();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    header();
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});