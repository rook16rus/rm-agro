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
            textContainer.querySelector('.career__success-hidden-text').classList.remove('visually-hidden');

            button.remove()
        })
    })
}