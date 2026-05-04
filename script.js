document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ЗАГРУЗКА ХЕДЕРА И ФУТЕРА ---
    function includeHTML(file, elementId) {
        const element = document.getElementById(elementId);
        if (!element) return; // Если на странице нет этого ID, ничего не делаем

        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Ошибка загрузки файла ' + file);
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    // Вызываем загрузку
    includeHTML('header.html', 'header-placeholder');
    includeHTML('footer.html', 'footer-placeholder');


    // --- 2. СЛАЙДЕР ВИДЕО ---
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    // Проверяем, есть ли слайды на этой странице (чтобы не было ошибок в Контактах)
    if (slides.length > 0) {
        function changeVideo() {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }

        setInterval(changeVideo, 4000); // каждые 4 секунды
    }
});