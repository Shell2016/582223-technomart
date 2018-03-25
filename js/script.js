var feedbackOpen = document.querySelector(".feedback-modal-open");
var feedback = document.querySelector(".modal-feedback");
var mapOpen = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var cartOpen = document.querySelector(".buy-btn");
var cart = document.querySelector(".modal-cart")
var close = document.querySelector(".modal-close");
var modal = document.querySelector(".modal");


feedbackOpen.addEventListener("click", function (event) {
  event.preventDefault();
  feedback.classList.add("modal-show");
});

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.add("modal-show");
});

cartOpen.addEventListener("click", function (event) {
  event.preventDefault();
  cart.classList.add("modal-show");
});


