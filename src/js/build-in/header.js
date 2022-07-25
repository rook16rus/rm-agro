export default function header() {
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');

    if (intro) {
        intro.style.setProperty('--header-height', header.clientHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');
    }

    window.addEventListener('scroll', () => {
        if (header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top) {
            if (header.classList.contains('header--whiter')) return;
            header.classList.add('header--white');
        } else {
            header.classList.remove('header--white');
        }
    });
}