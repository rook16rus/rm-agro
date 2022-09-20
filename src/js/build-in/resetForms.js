export default function resetForms() {
    const forms = document.querySelectorAll('.js-handle-form');

    forms.forEach(form => {
        form.addEventListener('reset', (e) => {
            const labels = document.querySelectorAll('.input + label');
            labels.forEach(label => label.classList.remove('active'));

            const inputFileDesc = form.querySelector('.js-input-file-desc');
            inputFileDesc.innerText = 'Прикреприть свое резюме';
        })
    })
}