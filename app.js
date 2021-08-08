//home page ----------------------------------------------

if (document.URL.includes("index.html")) {
    //nav-menu 
    const slideFunc = function(){
        const menu = document.querySelector('.nav-menu');
        const navUl = document.querySelector('.nav-list');
        menu.addEventListener('click', () => {
            navUl.classList.toggle('nav-active');
        });
    }
    slideFunc();

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
    }, introSectionOptions);

    navObserver.observe(introSection);
}

//portfolio page ----------------------------------------------
if (document.URL.includes('portfolio.html')){

    const learnMore = document.querySelector('.learn-more-btn');
    const hideBtn = document.querySelector('.hide-btn')
    const storyPart = document.querySelector('.story')
    learnMore.addEventListener('click', ()=>{
        storyPart.classList.add('active');
        learnMore.classList.add('active');
        hideBtn.classList.add('active');
    })
    hideBtn.addEventListener('click', () => {
        storyPart.classList.remove('active');
        learnMore.classList.remove('active');
        hideBtn.classList.remove('active');
    })
    
}

//about page ----------------------------------------------
if (document.URL.includes("about.html")) {
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
}

