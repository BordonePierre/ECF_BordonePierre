// show or hide burger menu
function menuBurger() {
    const menu = document.getElementById('burger');
    const image = document.getElementById('img');

    menu.classList.toggle('hidden'); // add or remove hidden
    menu.classList.toggle('flex');   // add or remove flex
    image.classList.toggle('pt-25');
}

// show or hide togglemenu
function toggleMenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('hidden');
}

// slider
function initSlider(sliderId) {
    const slider = document.querySelector(`#${sliderId}`);
    const sliderCards = slider.querySelector(".cards");
    const leftArrow = slider.querySelector(".left");
    const rightArrow = slider.querySelector(".right");

    let currentIndex = 0;
    const cards = sliderCards.children;
    const totalCards = cards.length;

    // slider position
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        sliderCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // right arrow slide
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    });

    // left arrow slide
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateSlider();
    });
}

// Init all sliders
initSlider("slider1");
initSlider("slider2");
initSlider("slider3");
initSlider("slider4");


