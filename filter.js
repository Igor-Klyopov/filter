const filterCard = document.querySelectorAll('.имя класса элемента списка');

document.querySelector('.имя класса списка').addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['filter'];

    filterCard.forEach((elem) => {
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('имя класса, который будет прятать ненужные карточки');
        }
        else {
            elem.classList.remove('имя класса, который будет прятать ненужные карточки');
        }
    });

});