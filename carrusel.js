document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    let intervalTime = 10000; // Cambio automático 
    let autoSlide;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", function () {
        nextSlide();
        restartAutoSlide();
    });

    prevButton.addEventListener("click", function () {
        prevSlide();
        restartAutoSlide();
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, intervalTime);
    }

    function restartAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();
});
