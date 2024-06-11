const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dots')

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const imageWidth = document.querySelector('.carousel-images img').clientWidth;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }
    updateCarousel();

});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;

    } else {
        currentIndex = totalImages - 1
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * imageWidth;
    images.style.transform = `translateX(${offset}px)`;
}
