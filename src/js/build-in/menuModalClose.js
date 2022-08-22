export default function menuModalClose() {
    const closeButton = document.querySelector('.modal-menu .modal__close');
    const menuModal = document.querySelector('.modal-menu .modal__inner');

    console.log(menuModal.offsetTop)

    closeButton.style.setProperty('--modal-height', menuModal.offsetTop - closeButton.clientHeight + 'px');
}