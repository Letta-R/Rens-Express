let visibleCard = 2; // starten vanuit middelste slide indien 5 slides
let totalCards = 0; // wordt geïnitialiseerd in setSlider()
const slider = document.querySelector('.slider');

function setSlider() {
    //const slider = document.querySelector('.slider');
    const cardWidth = slider.querySelector('.card').offsetWidth;
    totalCards = document.querySelectorAll('.card').length;
    // gap is de som van marges, 15px aan elke zijde van card
    const gap = 30;  
    //centeren visibleCard in de slider
    let offset = ((cardWidth + gap) * (visibleCard - 1) - ((slider.parentElement.offsetWidth - cardWidth - gap) / 2)); 
    offset = (offset < 0) ? 0 : offset;
    slider.style.transform = `translateX(-${offset}px)`;
}

function prevCard() {
    if (visibleCard > 2) {
        visibleCard--;
        setSlider();
    }
} 

function nextCard() {
    if (visibleCard < totalCards) {
        visibleCard++;
        setSlider();
    }
}

window.addEventListener('resize', setSlider); //herbereken wanneer schermformaat of orientatie wijzigt
const prev =  document.querySelector('.prev');
const next =  document.querySelector('.next');
if(prev){
    prev.addEventListener('click', prevCard);
}
if(next){
    next.addEventListener('click', nextCard);
}
if(slider){
    setSlider(); // uitvoeren functie wanneer de pagina is ingeladen
}

//Hamburger navigatie start
const hamburgerButton = document.getElementById('hamburgerButton');
const headerNav = document.querySelector('header>nav')

hamburgerButton.addEventListener('click', function(){
    headerNav.classList.toggle('hidden');
})
//Hamburger navigatie end
//Search balk start
const searchButton = document.getElementById('searchButton');
const searchBar = document.querySelector('header .search');

searchButton.addEventListener('click', function(){
    searchBar.classList.toggle('hidden');
})
//Search balk end
//profile balk start
const profileButton = document.getElementById('profileButton');
const profileBar = document.querySelector('header .profile');

profileButton.addEventListener('click', function(){
    profileBar.classList.toggle('hidden');
})
//profile balk end

//light dark mode

const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', function(){
    document.body.classList.toggle("dark-mode");
    const image = darkModeBtn.querySelector('img');
    if(document.body.classList.contains('dark-mode')){
        image.src = "./img/Moon_icon.svg";
    }else{
        image.src = "./img/Sun_icon.svg";
    }
})



//    
//    element.getElementById.replace()
