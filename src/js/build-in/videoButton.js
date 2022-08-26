import CircleType from "circletype";

export default function videoButton() {
    const buttons = document.querySelectorAll('.video-button__text');
    buttons.forEach(button => new CircleType(button));
}

window.initVideoButton = videoButton;