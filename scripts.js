document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('running-text');
    const textArray = [
        "I am a MERN stack developer.",
        "I am a data science enthusiast.",
        "I am a content creator.",
        "I am a designer."
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = textArray[index].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = textArray[index].substring(0, charIndex + 1);
            charIndex++;
        }

        textElement.innerHTML = currentText;

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === textArray[index].length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});
