export default function menuModalClose() {
    const closeButton = document.querySelector('.table .modal__close');
    const menuModal = document.querySelector('.table .modal__inner');

    closeButton.style.setProperty('--modal-height', menuModal.offsetTop - closeButton.clientHeight + 'px');
}