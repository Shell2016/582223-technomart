var feedbackOpen = document.querySelector(".feedback-modal-open");
var feedback = document.querySelector(".modal-feedback");
var mapOpen = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var cartOpen = document.querySelectorAll(".buy-btn");
var cart = document.querySelector(".modal-cart")
var close = document.querySelectorAll(".modal-close");
var modal = document.querySelectorAll(".modal");


if (feedbackOpen) {
    feedbackOpen.addEventListener("click", function (event) {
        event.preventDefault();
        feedback.classList.add("modal-show");
    });
}

if (mapOpen) {
    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        map.classList.add("modal-show");
    });
}

for (var i = 0; i < cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function (event) {
        event.preventDefault();
        cart.classList.add("modal-show");
    });
}

for (var x = 0; x < close.length; x++) {
    close[x].addEventListener("click", function (event) {
        event.preventDefault();
        for (var y = 0; y < modal.length; y++) {
            modal[y].classList.remove("modal-show");
        }
    });
}






