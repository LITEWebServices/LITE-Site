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