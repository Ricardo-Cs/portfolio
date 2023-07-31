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