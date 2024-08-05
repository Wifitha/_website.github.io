let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.card');
    const slideWidth = slides[0].offsetWidth;
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function autoScroll() {
    moveSlide(1);
}

// Auto scroll every 3 seconds
setInterval(autoScroll, 3000);

