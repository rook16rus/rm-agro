export default function features() {
    if (matchMedia('(max-width: 640px)').matches) return;

    const items = document.querySelectorAll('.features-slider__slide');

    items.forEach(item => {
        const title = item.querySelector('.features-slider__content h3');
        const titlePaddingRight = window.getComputedStyle(title, null).getPropertyValue("padding-right").slice(0, -2) * 1;
        const titleSpan = item.querySelector('.features-slider__content h3 span');
        const text = item.querySelector('.features-slider__content p');

        text.style.width = titlePaddingRight  + titleSpan.clientWidth + 'px';
    })
}