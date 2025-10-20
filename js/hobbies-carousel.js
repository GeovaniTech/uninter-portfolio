const images = [
    "imagens/eu-praia.jpeg",
    "imagens/eu-programando.jpeg",
    "imagens/eu-tomando-cafe.jpeg",
];

const carousel = document.getElementById("carousel-hobbies");
let currentIndex = 0;

carousel.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carousel.innerHTML = `<img src="${images[currentIndex]}" class="eu-hobbie">`;
});