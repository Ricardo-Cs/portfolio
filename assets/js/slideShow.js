const carousel = document.querySelector("#carousel");

if (window.matchMedia("(min-width: 768px)").matches) {
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const cardWidth = carouselItems[0].offsetWidth;
    let scrollPosition = 0;

    const nextButton = document.querySelector(
        "#carousel .carousel-control-next"
    );
    const prevButton = document.querySelector(
        "#carousel .carousel-control-prev"
    );

    // Função para esconder ou mostrar os botões
    function updateButtons() {
        if (scrollPosition <= 0) {
            prevButton.style.display = "none"; // Esconde o botão anterior no primeiro slide
        } else {
            prevButton.style.display = "flex"; // Mostra o botão anterior
        }

        if (scrollPosition >= carouselInner.scrollWidth - cardWidth * 4) {
            nextButton.style.display = "none"; // Esconde o botão próximo no último slide
        } else {
            nextButton.style.display = "flex"; // Mostra o botão próximo
        }
    }

    // Atualiza os botões ao carregar
    updateButtons();

    // A transição suave para o próximo slide
    nextButton.addEventListener("click", function () {
        if (scrollPosition < carouselInner.scrollWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            carouselInner.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            updateButtons(); // Atualiza os botões após a transição
        }
    });

    // A transição suave para o slide anterior
    prevButton.addEventListener("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            carouselInner.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            updateButtons(); // Atualiza os botões após a transição
        }
    });
} else {
    carousel.classList.add("slide");
}
