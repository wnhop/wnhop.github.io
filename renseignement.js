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

  var modal = document.getElementById("modal");

  var images = document.querySelectorAll(".right img");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");

  images.forEach((img) => {
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
