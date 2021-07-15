//slideshow
const slides = document.querySelectorAll('.slide');
const pegs = document.querySelectorAll('.peg');
let currentSlide = 0;

slides[0].classList.add('active');
pegs[0].classList.add('active');

var rmvActive = function(i){
    slides.forEach((item) => {
        item.classList.remove('active');
    })

    pegs.forEach((item) => {
        item.classList.remove('active');
    });
}

pegs.forEach((item, index) => {

    item.addEventListener('click', () => {
        slides.forEach((item) => {
            item.classList.remove('active');
        })
    
        pegs.forEach((item) => {
            item.classList.remove('active');
        });

        currentSlide = index;
        slides[currentSlide].classList.add('active');
        pegs[currentSlide].classList.add('active');
    });
});