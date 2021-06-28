//nav-menu
const slideFunc = function(){
    const menu = document.querySelector('.nav-menu');
    const navUl = document.querySelector('.nav-list');
    menu.addEventListener('click', () => {
        navUl.classList.toggle('nav-active');
    });
}
const app = function(){
    slideFunc();
}

app();

//slides
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const icon = document.querySelectorAll('.frame-icon');
const numSlides = slides.length;
var currSlide = 0;

nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    icon.forEach((icon) => {
        icon.classList.remove('active');
    });
    currSlide++;
    if(currSlide > (numSlides-1)){
        currSlide = 0;
    }
    slides[currSlide].classList.add('active');
    icon[currSlide].classList.add('active');
});
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    icon.forEach((icon) => {
        icon.classList.remove('active');
    });
    currSlide--;
    if(currSlide < 0){
        currSlide = numSlides - 1;
    }
    slides[currSlide].classList.add('active');
    icon[currSlide].classList.add('active');
});

//scroll-observer

const header = document.querySelector('nav');
const introSection = document.querySelector('.head-bottom');

const introSectionOptions = {};

const navObserver = new IntersectionObserver(function(entries, introSectionObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
    });
}, 
introSectionOptions);

navObserver.observe(introSection);