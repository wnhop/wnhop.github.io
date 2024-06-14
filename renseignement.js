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

  // Get the modal
  var modal = document.getElementById("modal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
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

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
