const headerBurger = document.querySelector('.header_burger');
if (headerBurger) {
    const headerMenu = document.querySelector('.header_menu');
    headerBurger.addEventListener('click', function (e) {
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
    
}