export default function header() {
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');

    if (intro) {
        intro.style.setProperty('--header-height', header.clientHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');
    }
}