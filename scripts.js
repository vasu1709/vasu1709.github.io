const professions = ["CSE Student","Web Developer", "Data Science enthusiastic", "Co-author"];
let index = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
    const currentText = professions[index];
    typingElement.textContent = isDeleting ? currentText.substring(0, charIndex--) : currentText.substring(0, charIndex++);
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % professions.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));
