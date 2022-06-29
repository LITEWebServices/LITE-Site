//general 

//nav-menu 

const menu = document.querySelector('.nav-menu');
const navUl = document.querySelector('.nav-list');

const slideFunc = function(){
    menu.addEventListener('click', () => {
        navUl.classList.toggle('nav-active');
    });
}
slideFunc();


//home page ----------------------------------------------

if (document.URL.includes("index.html") || document.body.getAttribute('class') == 'index') {
    //Type Writer Effect
    const phrases = ['LITE Web Services          ', 'We provide the digital representation that you deserve.          '];
    let currentLetters = '';
    let currentPhrase = '';
    let arrIndex = 0;
    let letterIndex = 0;

    (function type(){
        if (arrIndex === phrases.length) {
            arrIndex = 0;
        }

        currentPhrase = phrases[arrIndex];
        currentLetters = currentPhrase.slice(0, ++letterIndex);

        document.querySelector(".typing").textContent = currentLetters;

        if (currentLetters.length === currentPhrase.length) {
            arrIndex++;
            letterIndex = 0;
            // setTimeout(type, 2000);
            
        }

        setTimeout(type, 125);

    })();
    
    
    // Drop Down Section
    const dropDownBtn = document.querySelector('.drop-down-btn');
    const dropDownText = document.querySelector('.drop-down-text');

    dropDownBtn.addEventListener('click', ()=> {
        dropDownBtn.classList.toggle('active'); //toggle
        dropDownText.classList.toggle('active'); //toggle
        
    })
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
                entry.target.lastElementChild.classList.add('scrolled');
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
    let selected = "budget";
    // document.querySelectorAll(".package-button.budget").classList.add('active');
    // document.querySelectorAll(".package.budget").classList.add('active');

    let currBtn;
    const pckg_buttons = document.querySelectorAll(".package-button");

    pckg_buttons.forEach((item, index) => {

        item.addEventListener('click', () => {

            pckg_buttons.forEach((item)=>{
                item.classList.remove('active');
                document.querySelector('.package.' + selected).classList.remove('active');
                
            })
            selected = pckg_buttons[index].className.split(" ")[1];
            currBtn = document.querySelector('.package-button.' + selected);
            currBtn.classList.add('active');
            document.querySelector('.package.' + selected).classList.add('active');
            // document.querySelector('h1').textContent = selected;
        })
    })

}

