const themeButton = document.querySelector('#page-theme-icon');

// Change page theme
themeButton.addEventListener('click', () => {
    const themeIcon = document.querySelector('#page-theme-icon i');

    if(themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeButton.style.color = 'yellow';
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeButton.style.color = 'black'
    }
    
});

// Type effect
const textElement = document.getElementById('author-dev-area');
const text = 'Desenvolvedor FullStack Júnior'; // The text you want to type out
const typingSpeed = 100; // Adjust typing speed in milliseconds
const eraseSpeed = 50; // Adjust erasing speed in milliseconds

function typeAndErase() {
    textElement.textContent = ''; // Clear the text element before typing again
    
    function type() {
        if (charIndex < text.length) {
            textElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 1000); // Wait for a second before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            charIndex = 0; // Reset charIndex to start typing again
            setTimeout(type, typingSpeed);
        }
    }

    let charIndex = 0;
    type(); // Start typing
}

typeAndErase(); // Call the function to initiate the typing and erasing loop
