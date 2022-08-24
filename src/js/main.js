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
import filterTags from "./build-in/filterTags";
import inputPlaceholder from "./build-in/inputPlaceholder";
import validation from "./build-in/validation";
import masks from "./build-in/masks";
import modals from "./build-in/modals";
import productSlider from "./build-in/productSlider";
import menuModalClose from "./build-in/menuModalClose";
import partnersSlider from "./build-in/partnersSlider";
import tagsSlider from "./build-in/tagsSlider";
import yandexMap from "./build-in/yandexMap";
import teamSlider from "./build-in/teamSlider";
import history from "./build-in/history";
import videoButton from "./build-in/videoButton";
import gallerySlider from "./build-in/gallerySlider";
import successSlider from "./build-in/successSlider";
import careerMoreButton from "./build-in/careerMoreButton";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
    editableTextContainer();

    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    validation();
    modals();
    masks();
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
    filterTags();
    inputPlaceholder();
    productSlider();
    menuModalClose();
    partnersSlider();
    tagsSlider();
    yandexMap();
    teamSlider();
    history();
    videoButton();
    gallerySlider();
    successSlider();
    careerMoreButton();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
