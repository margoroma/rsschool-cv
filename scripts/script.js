const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const allBody = document.querySelector('.body');
const burgerLink = document.querySelector('.header_menu');

function onToggle() {
    if (headerBurger) {
            allBody.classList.toggle('_lock');
            headerBurger.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
        };
}


console.group(`Критерии оценки задания вёрстки CV`);
console.warn('вёрстка валидная +10');
console.warn('вёрстка семантическая +20');
console.warn('для оформления СV используются css-стили +10');
console.warn('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10');
console.warn('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10');
console.warn('есть адаптивное бургер-меню +10');
console.warn('на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10');
console.warn('контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
console.warn('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
console.warn('CV содержит пример вашего кода с подсветкой кода +10');
console.warn('CV содержит изображения-ссылки на выполненные вами проекты +10');
console.warn('CV выполнено на английском языке +10');
console.warn('выполнены требования к Pull Request +10');
console.warn('видеорезюме пока нет, в процессе');
console.warn('дизайн судить проверяющим');
console.groupEnd();
console.warn('140 баллов');
console.groupEnd();
