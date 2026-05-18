const images=[
    "assets/images/piscina.webp",
    "assets/images/jacuzzi.avif",
    "assets/images/spa.jpg",
    "assets/images/restaurante.avif",
    "assets/images/show.jpg",
    "assets/images/bar.jpg",
    "assets/images/wifi.webp"
];

let current=0;

const image=document.getElementById("imagen-carrusel");

document.getElementById("next").addEventListener("click", ()=>{
    current++;

    if(current>=images.length){
        current=0;
    }

    image.src=images[current];
});

document.getElementById("prev").addEventListener("click", ()=>{
    current--;
    if(current<0){
        current=images.length-1;
    }
    image.src=images[current];
});