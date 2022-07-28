export default function header() {
    const header = document.querySelector('.header');
    const intro = document.querySelector('.intro');

    if (intro) {
        intro.style.setProperty('--header-height', header.clientHeight + 'px');
    } else {
        document.documentElement.style.setProperty('--header-height', header.clientHeight + 'px');
    }

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (scrollDistance >= 150) {
            if (header.classList.contains('header--whiter')) return;
            header.classList.add('header--white');
        } else {
            header.classList.remove('header--white');
        }
    });
}