// Slideshow for dogs.html (mySlides)
let slideIndexDog = 1;
showSlidesDog(slideIndexDog);

function plusSlidesDog(n) {
    showSlidesDog(slideIndexDog += n);
}

function currentSlideDog(n) {
    showSlidesDog(slideIndexDog = n);
}

function showSlidesDog(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndexDog = 1 }
    if (n < 1) { slideIndexDog = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexDog - 1].style.display = "block";
    dots[slideIndexDog - 1].className += " active";
}