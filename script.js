document.addEventListener("DOMContentLoaded", function () {
  // Menu
  const hamburger = document.getElementById("hamburger");
  const menuOverlay = document.getElementById("menuOverlay");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", function () {
    menuOverlay.style.display = "block";
  });

  closeMenu.addEventListener("click", function () {
    menuOverlay.style.display = "none";
  });

  // Carousel
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  setInterval(() => {
    images.forEach((img) => img.classList.remove("active"));
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 5000);

  // background hover
  const cards = document.querySelectorAll(".card");
  const cardColors = ["#090622", "#081803", "#23060b"];
  const cardContainer = document.getElementById("produits");
  let currentCardIndex = -10;

  cards.forEach(function (card, index) {
    card.addEventListener("mouseenter", function () {
      if (currentCardIndex !== index) {
        cardContainer.style.backgroundColor = cardColors[index];
        currentCardIndex = index;
      }
    });

    card.addEventListener("mouseleave", function () {});
  });

  // Card hover effects
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      removeActiveClass();
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });
  });

  function removeActiveClass() {
    allCards.forEach((card) => {
      card.classList.remove("active");
    });
  }
});
