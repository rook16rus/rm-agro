export default function careerMoreButton() {
    const buttons = document.querySelectorAll('.career__success-button');
    const textContainers = document.querySelectorAll('.career__success-text-block');

    textContainers.forEach(container => {
        const hiddenText = document.querySelector('.career__success-hidden-text');

        if (!hiddenText.textContent.trim()) {
            container.nextElementSibling.remove();
        }
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const textContainer = button.previousElementSibling;
            const hiddenText = textContainer.querySelector('.career__success-hidden-text');
            if (!hiddenText) return

            if (hiddenText.classList.contains('visually-hidden')) {
                hiddenText.classList.remove('visually-hidden');
                button.innerHTML = `
                    <span>Скрыть текст</span>
                    <img class="lazyload" style="transform: rotate(180deg)" data-src="img/down-arrow.svg" alt="Иконка">
               `
            } else {
                hiddenText.classList.add('visually-hidden');
                button.innerHTML = `
                    <span>Читать полностью</span>
                    <img class="lazyload" data-src="img/down-arrow.svg" alt="Иконка">
               `
            }
        })
    })
}