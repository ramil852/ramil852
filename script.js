// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav-link');

// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');

// Добавляем обработчик событий для каждой ссылки
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});