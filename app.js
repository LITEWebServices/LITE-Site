//general 

//nav-menu 
const slideFunc = function(){
    const menu = document.querySelector('.nav-menu');
    const navUl = document.querySelector('.nav-list');
    menu.addEventListener('click', () => {
        navUl.classList.toggle('nav-active');
    });
}
slideFunc();


//home page ----------------------------------------------

if (document.URL.includes("index.html")) {
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


    const main_imgs = document.querySelectorAll('.site-showcase .main-img');
    const extra_imgtxt = document.querySelectorAll('.slide-in');
    const sites = document.querySelectorAll('.site-showcase');

    const options = {
        threshold: 0,
        rootMargin: "-250px",
    };

    const bigImgObserver = new IntersectionObserver(function(entries, portfolioObserver){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("scrolled");
            }

        });
    
    }, options);

    const txtImgObserver = new IntersectionObserver(function(entries, portfolioObserver){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                // entry.target.classList.add("scrolled");
                // alert(entry.target.lastElementChild.className);
                entry.target.lastElementChild.classList.add('scrolled');




                // txtimg = entry.querySelector('slide-in');
                // alert(txtimg.)
                // txtimg.target.classList.add("scrolled");
            }

        });

    }, options);

    main_imgs.forEach(img => {
        bigImgObserver.observe(img);
    })

    sites.forEach(site => {
        txtImgObserver.observe(site);
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

if (document.URL.includes("services.html")) {
    // const submitBtn = document.getElementById("submit");
    // submitBtn.addEventListener('click', () => {
    //     document.getElementById("name").value="Lite";
    //     document.getElementById("email").value=null;
    //     document.getElementById("msg").value=null;
    // })
}

