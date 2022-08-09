export default function menuModalClose() {
    const closeButton = document.querySelector('.modal-menu .modal__close');
    const menuModal = document.querySelector('.modal-menu .modal__inner');

    closeButton.style.setProperty('--modal-height', menuModal.clientHeight + closeButton.clientHeight / 2 + 'px');
}