let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let image = document.querySelector("#webpageicon");
let carousels = document.querySelector(".carousels");
let cards = document.querySelectorAll(".cards");
let cardWidth = cards[0].offsetWidth;
let totalCardsWidth = cards.length * cardWidth;
let maxScrollPosition = (totalCardsWidth - carousels.offsetWidth) + 150;
let currentScrollPosition = 0;
let screenWidth = window.innerWidth;
let scrollAmount;
let navBar = document.getElementById('nav-bar');
let navClose = document.getElementById('nav-close');
let navLinks = document.getElementById('nav-links');

navClose.style.display = 'none';
navLinks.style.display = 'none';
navBar.addEventListener('click', () => {
    navBar.style.display = 'none';
    navClose.style.display = 'block';
    navLinks.style.display = 'block';
});
navClose.addEventListener('click', () => {
    navClose.style.display = 'none';
    navLinks.style.display = 'none';
    navBar.style.display = 'block';
})
prev.style.visibility = 'hidden'
next.addEventListener('click', Next);
prev.addEventListener('click', Prev);
image.addEventListener('click', reload);
calculateScrollAmount();
console.log(window.innerWidth);

function calculateScrollAmount() {
    if (screenWidth <= 767) {
        scrollAmount = cardWidth + 10;
    } else if (screenWidth >= 768 && screenWidth <= 991) {
        scrollAmount = cardWidth * 2 + 20;
    } else if (screenWidth >= 992 && screenWidth <= 1199) {
        scrollAmount = cardWidth * 3 + 30;
    } else if (screenWidth >= 1200 && screenWidth <= 1399) {
        scrollAmount = cardWidth * 4 + 40;
    } else {
        scrollAmount = cardWidth * 5 + 10 * 5;
    }
}

function Prev() {
    currentScrollPosition -= scrollAmount;
    if (currentScrollPosition <= 0) {
        currentScrollPosition = 0;
        prev.style.visibility = 'hidden';
    }
    carousels.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
    updateNextPrevButtons();
}

function Next() {
    currentScrollPosition += scrollAmount;
    if (currentScrollPosition >= maxScrollPosition) {
        currentScrollPosition = maxScrollPosition;
    }
    carousels.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
    updateNextPrevButtons();
}

function updateNextPrevButtons() {
    prev.style.visibility = currentScrollPosition > 0 ? 'visible' : 'hidden';
    next.style.visibility = currentScrollPosition < maxScrollPosition ? 'visible' : 'hidden';
}

window.addEventListener('resize', function () {
    screenWidth = window.innerWidth;
    calculateScrollAmount();
});

function reload() {
    window.location.reload();
}
