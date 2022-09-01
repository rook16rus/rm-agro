import CircleType from "circletype";

export default function videoButton() {
    const buttons = document.querySelectorAll('.video-button__text');
    buttons.forEach(button => {
        if (button.classList.contains('circled')) return;

        new CircleType(button);
        button.classList.add('circled');
    });
}

window.initVideoButton = videoButton;