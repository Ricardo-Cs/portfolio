const qualificationMenuItens = document.querySelectorAll('.qualification-menu-item');
let qualificationMenuItemActive = document.querySelector('.qualification-menu-item.active');
const qualificationContentActive = document.querySelector('.qualification-content.active');
const qualificationContentNotActive = document.querySelector('.qualification-content:not(.active)');

qualificationMenuItens.forEach((item) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('active')) {
            item.classList.add('active');
            qualificationMenuItemActive.classList.remove('active');
            qualificationMenuItemActive = item;
            qualificationContentActive.classList.toggle('active');
            qualificationContentNotActive.classList.toggle('active');
        };
    })
})