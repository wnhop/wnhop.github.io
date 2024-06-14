document.addEventListener("DOMContentLoaded", function () //menu
{
  const hamburger = document.getElementById("hamburger");
  const menuOverlay = document.getElementById("menuOverlay");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", function () {
    menuOverlay.style.display = "block";
  });

  closeMenu.addEventListener("click", function () {
    menuOverlay.style.display = "none";
  });
});

//carousel

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 5000);

  //background
  var cards = document.querySelectorAll(".card");
  var cardColors = ["#090622", "#081803", "#23060b"];
  var cardContainer = document.getElementById("produits");

  cards.forEach(function (card, index) {
    function changeBackgroundColor() {
      cardContainer.style.backgroundColor = cardColors[index];
    }

    card.addEventListener("mouseover", function (event) {
      changeBackgroundColor();
    });

    card.addEventListener("mouseout", function () {
      cardContainer.style.backgroundColor = "lastIndexOf";
    });

    var cardTitle = card.querySelector("h1");
    var cardParagraph = card.querySelector("p");

    cardTitle.addEventListener("mouseover", function (event) {
      changeBackgroundColor();
    });

    cardParagraph.addEventListener("mouseover", function (event) {
      changeBackgroundColor();
    });
  });

  //card hover
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      removeActiveClass();
      card.classList.add("active");
    });
  });

  function removeActiveClass() {
    allCards.forEach((card) => {
      card.classList.remove("active");
    });
  }
});
