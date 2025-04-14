let right = document.querySelector(".R");
let slider = document.querySelector(".slider");
let body = document.querySelector("body");
right.addEventListener('click', function(e) {
  e.stopPropagation();
  slider.classList.toggle("active");
});

body.addEventListener('click', function(e) {
  slider.classList.remove("active");
})