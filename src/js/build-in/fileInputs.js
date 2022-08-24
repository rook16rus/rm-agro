export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-input-file');

    inputs.forEach( input => {
        input.addEventListener('change', function (e) {
            const inputContainer = input.closest('.js-input-file-container');
            const inputFileName = inputContainer.querySelector('.js-input-file-name');

            inputFileName.innerText = this.files[0].name;
        });
    });
}