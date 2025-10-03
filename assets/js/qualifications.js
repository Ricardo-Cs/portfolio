const qualificationMenuItens = document.querySelectorAll('.qualification-menu-item');
const qualificationContents = document.querySelectorAll('.qualification-content');
const filterMenuItens = document.querySelectorAll('.filter-menu-item');
const courseItems = document.querySelectorAll('.courses-list .qualification-data');

qualificationMenuItens.forEach((item, index) => {
    item.addEventListener('click', () => {
        qualificationMenuItens.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        item.classList.add('active');

        qualificationContents.forEach(content => {
            content.classList.remove('active');
        });

        qualificationContents[index].classList.add('active');
    });
});