//mobile menu
const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector("#overlay");

//slider
const nextArrow = document.querySelector(".slider__arrow--right");
const prevArrow = document.querySelector(".slider__arrow--left");
const images = document.querySelectorAll(".slider__image");
const slider = document.querySelectorAll(".slider__nav--indicator");
const numberOfImages = images.length;
var imageNumber = 0;

//right arrow
nextArrow.addEventListener("click", () => {
    images.forEach((image) => {
        image.classList.remove("current-slide");
    });
    slider.forEach((slide) => {
        slide.classList.remove("current-slide");
    });

    imageNumber++;

    if(imageNumber > (numberOfImages - 1)){
        imageNumber = 0;
    }

    images[imageNumber].classList.add("current-slide");
    slider[imageNumber].classList.add("current-slide");
});

//left arrow
prevArrow.addEventListener("click", () => {
    images.forEach((image) => {
        image.classList.remove("current-slide");
    });
    slider.forEach((slide) => {
        slide.classList.remove("current-slide");
    });

    imageNumber--;

    if(imageNumber < 0){
        imageNumber = numberOfImages - 1;
    }

    images[imageNumber].classList.add("current-slide");
    slider[imageNumber].classList.add("current-slide");
});

//mobile menu
btnHamburger.addEventListener("click",
    function() {
    /*console.log("click hamburger");*/

    if(btnHamburger.classList.contains("open")) { // close menu
        btnHamburger.classList.remove("open");
        overlay.classList.remove("visible");
    }
    else {
        btnHamburger.classList.add("open"); //open menu
        overlay.classList.add("visible");
    }
})
