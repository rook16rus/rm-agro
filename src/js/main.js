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
