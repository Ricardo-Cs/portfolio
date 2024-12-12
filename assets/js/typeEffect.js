const textElement = document.getElementById('author-dev-area');
const text = ['Desenvolvedor Web', 'Estudante de Programação', 'Desenvolvedor Back-end'];
let cout = 0;
const typingSpeed = 100; 
const eraseSpeed = 50;

function typeAndErase() {
    textElement.textContent = '';
    
    function type() {
        if (charIndex < text[cout].length) {
            textElement.textContent += text[cout].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            charIndex = 0; 
            cout == 2 ? cout = 0: cout++;
            setTimeout(type, typingSpeed);
        }
    }

    let charIndex = 0;
    type();
}

typeAndErase();