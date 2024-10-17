let slideIndex = 1;
showSlides(slideIndex);

// Функция для переключения слайдов
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Функция для выбора конкретного слайда по точке
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Основная функция для показа слайдов
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Прячем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Убираем класс "active" у всех точек
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Показываем текущий слайд и активируем соответствующую точку
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



