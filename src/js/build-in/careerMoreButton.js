export default function careerMoreButton() {
    const buttons = document.querySelectorAll('.career__success-button');
    const textContainers = document.querySelectorAll('.career__success-text');

    textContainers.forEach(container => {
        const paragraphs = container.querySelectorAll('p:not(:first-child)');
        paragraphs.forEach(paragraph => paragraph.classList.add('visually-hidden'));

        if (paragraphs.length <= 0) {
            container.nextElementSibling.remove();
        }
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const textContainer = button.previousElementSibling;
            textContainer.querySelectorAll('p:not(:first-child)').forEach(paragraph => paragraph.classList.remove('visually-hidden'));

            button.remove()
        })
    })
}