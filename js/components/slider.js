const slides=document.querySelectorAll(".slide");

const nextBtn=document.querySelector(".next");

const prevBtn=document.querySelector(".prev");

let currentSlide=0;

function showSlide(index) {
    slides.forEach(slide =>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if(currentSlide>=slides.length){
        currentSlide=0;
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;

    if(currentSlide<0){
        currentSlide=slides.length-1;
    }

    showSlide(currentSlide);

}

nextBtn.addEventListener("click", prevSlide);

prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);