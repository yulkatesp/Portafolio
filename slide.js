let index = 0;
const slides = document.querySelector('.slides');

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % 2;
    slides.style.transform = `translateX(-${index * 250}px)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + 2) % 2;
    slides.style.transform = `translateX(-${index * 250}px)`;
});
