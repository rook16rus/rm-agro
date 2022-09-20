export default function careerMoreButton() {
    const buttons = document.querySelectorAll('.career__success-button');
    const textContainers = document.querySelectorAll('.career__success-text-block');

    textContainers.forEach(container => {
        const hiddenText = document.querySelector('.career__success-hidden-text');

        if (!hiddenText.textContent.trim()) {
            container.nextElementSibling.remove();
        }
    })

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const textContainer = button.previousElementSibling;
            const hiddenText = textContainer.querySelector('.career__success-hidden-text');
            if (!hiddenText) return

            if (hiddenText.classList.contains('visually-hidden')) {
                hiddenText.classList.remove('visually-hidden');
                button.querySelector('span').textContent = 'Cкрыть текст'
                button.querySelector('img').style.transform = 'rotate(180deg)';
            } else {
                hiddenText.classList.add('visually-hidden');
                button.querySelector('span').textContent = 'Читать полностью'
                button.querySelector('img').style.transform = 'rotate(0deg)';
            }

            window.successSwiper.update();
        })
    })
}