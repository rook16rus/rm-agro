export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-input-file');

    inputs.forEach( input => {
        input.addEventListener('change', function (e) {
            const inputContainer = input.closest('.js-input-file-container');
            const inputFileName = inputContainer.querySelector('.js-input-file-name');
            const inputFileDesc = inputContainer.querySelector('.js-input-file-desc');

            if (matchMedia('(max-width: 640px)').matches) {
                inputFileDesc.innerText = this.files[0].name;
            } else {
                inputFileName.innerText = this.files[0].name;
            }
        });
    });
}